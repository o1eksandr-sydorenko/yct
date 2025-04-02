import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { ExtendedPrismaClient, prismaClient } from '../config';

@Injectable()
export class PrismaService implements OnModuleInit, OnModuleDestroy {
  private readonly client: ExtendedPrismaClient = prismaClient;

  async onModuleInit() {
    await this.client.$connect();
  }

  async onModuleDestroy() {
    await this.client.$disconnect();
  }

  get db() {
    return this.client;
  }
}
