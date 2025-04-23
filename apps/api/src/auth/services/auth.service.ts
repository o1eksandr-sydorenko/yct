import { Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { LoginDto, RegisterDto, AuthResponseDto } from '../dto';
import { UsersService } from '../../users/services';
import type { User } from '@prisma/client';
import { compare, genSalt, hash } from 'bcrypt';
import { ConfigService } from '@nestjs/config';
import { ValidationPropertyException } from '@your-crypto-tracker/core';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
    @Inject(ConfigService) private configService: ConfigService
  ) {}

  async login(loginDto: LoginDto): Promise<AuthResponseDto> {
    const user = await this.validateUser(loginDto.email, loginDto.password);

    return {
      accessToken: await this.assignJwtToken(user),
      expiresIn: this.configService.get<number>('JWT_EXPIRES_IN', 3600),
    };
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
      role: 'USER',
      password: hashedPassword,
    });

    return {
      accessToken: await this.assignJwtToken(user),
      expiresIn: this.configService.get<number>('JWT_EXPIRES_IN', 3600),
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
    const payload = { email: user.email, sub: user.id };
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
