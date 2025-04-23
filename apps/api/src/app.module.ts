import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { DbModule } from '@your-crypto-tracker/db';
import { CoreModule } from '@your-crypto-tracker/core';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [CoreModule, DbModule, AuthModule, UsersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
