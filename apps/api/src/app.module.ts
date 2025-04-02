import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { DbModule } from '@your-crypto-tracker/db';

@Module({
  imports: [DbModule, UsersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
