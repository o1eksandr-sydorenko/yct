import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { DbModule } from '@your-crypto-tracker/db';
import { CoreModule } from '@your-crypto-tracker/core';
import { AuthModule } from './auth/auth.module';
import { APP_GUARD } from '@nestjs/core';
import { JwtAuthGuard } from './auth/guards';

@Module({
  imports: [CoreModule, DbModule, AuthModule, UsersModule],
  controllers: [],
  providers: [
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
  ],
})
export class AppModule {}
