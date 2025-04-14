import { Inject, Injectable } from '@nestjs/common';
import { PrismaService } from '@your-crypto-tracker/db';
import { CreateUserInput } from '../input';

@Injectable()
export class UserService {
  constructor(
    @Inject(PrismaService) protected readonly prismaService: PrismaService
  ) {}

  async create(data: CreateUserInput): Promise<void> {
    await this.prismaService.db.user.create({
      data: {
        ...data,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    });
  }
}
