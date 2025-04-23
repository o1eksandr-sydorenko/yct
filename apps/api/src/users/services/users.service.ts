import { Inject, Injectable } from '@nestjs/common';
import { PrismaService } from '@your-crypto-tracker/db';
import { CreateUserInput } from '../input';
import type { User } from '.prisma/client';

@Injectable()
export class UsersService {
  constructor(
    @Inject(PrismaService) protected readonly prismaService: PrismaService
  ) {}

  async findByEmail(email: string): Promise<User | null> {
    return this.prismaService.db.user.findUnique({
      where: { email },
    });
  }

  async create(data: CreateUserInput): Promise<User> {
    return await this.prismaService.db.user.create({
      data: {
        ...data,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    });
  }
}
