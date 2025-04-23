import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserDto } from '../dto';
import { UsersService } from '../services';
import { ApiBody } from '@nestjs/swagger';

@Controller('users')
export class UserController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  @ApiBody({ type: CreateUserDto })
  async create(@Body() data: CreateUserDto) {
    return await this.usersService.create(data);
  }
}
