import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { DbModule } from '@your-crypto-tracker/db';
import { CoreModule } from '@your-crypto-tracker/core';

@Module({
  imports: [CoreModule, DbModule, UsersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
