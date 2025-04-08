import { Module } from '@nestjs/common';
import { UserModule } from './users/user.module';
import { DbModule } from '@your-crypto-tracker/db';
import { CoreModule } from '@your-crypto-tracker/core';

@Module({
  imports: [CoreModule, DbModule, UserModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
