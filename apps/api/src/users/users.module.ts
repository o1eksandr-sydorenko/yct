import { Module } from '@nestjs/common';
import { UsersService } from './services';
import { UserController } from './controller';

@Module({
  imports: [],
  controllers: [UserController],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}
