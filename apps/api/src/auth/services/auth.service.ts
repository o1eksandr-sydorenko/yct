import { Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { LoginDto, RegisterDto, AuthResponseDto, ProfileDto } from '../dto';
import { UsersService } from '../../users/services';
import { Role, type User } from '@prisma/client';
import { compare, genSalt, hash } from 'bcrypt';
import { ConfigService } from '@nestjs/config';
import { ValidationPropertyException } from '@your-crypto-tracker/core';
import { JwtPayload } from '../types';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
    @Inject(ConfigService) private configService: ConfigService
  ) {}

  async login(loginDto: LoginDto): Promise<AuthResponseDto> {
    const user = await this.validateUser(loginDto.email, loginDto.password);

    return this.getAuthResponse(user);
  }

  async register(registerDto: RegisterDto): Promise<AuthResponseDto> {
    const existingUser = await this.usersService.findByEmail(registerDto.email);

    if (existingUser) {
      throw new ValidationPropertyException(
        'email',
        'User with this email already exists'
      );
    }

    const hashedPassword = await this.encryptPassword(registerDto.password);
    const user = await this.usersService.create({
      ...registerDto,
      role: Role.USER,
      password: hashedPassword,
    });

    return this.getAuthResponse(user);
  }

  async getAuthResponse(user: User): Promise<AuthResponseDto> {
    return {
      accessToken: await this.assignJwtToken(user),
      expiresIn: this.configService.get<number>(
        'JWT_EXPIRATION_TIME_SECONDS',
        3600
      ),
    };
  }

  async getProfileById(id: string): Promise<ProfileDto> {
    const user = await this.usersService.findById(id);

    if (!user) {
      throw new UnauthorizedException('User not found');
    }
    const { email, firstName, lastName, role, createdAt, updatedAt } = user;

    return {
      id,
      email,
      firstName: firstName ?? undefined,
      lastName: lastName ?? undefined,
      role,
      permissions: [],
      createdAt,
      updatedAt,
    };
  }

  async encryptPassword(password: string) {
    const salt: string = await genSalt(
      +this.configService.get<number>('BCRYPT_SALT_ROUNDS', 10)
    );

    return await hash(password, salt);
  }

  async comparePasswords(password: string, hashedPassword: string) {
    return await compare(password, hashedPassword);
  }

  async assignJwtToken(user: User) {
    const payload: JwtPayload = {
      email: user.email,
      sub: user.id,
      role: user.role as Role,
    };

    return this.jwtService.signAsync(payload);
  }

  private async validateUser(email: string, password: string) {
    const user = await this.usersService.findByEmail(email);

    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const isPasswordValid = await this.comparePasswords(
      password,
      user.password
    );

    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid credentials');
    }

    return user;
  }
}
