import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserDto } from '../dto';
import { UserService } from '../service';
import { ApiBody } from '@nestjs/swagger';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  @ApiBody({ type: CreateUserDto })
  async create(@Body() data: CreateUserDto) {
    return await this.userService.create(data);
  }
}
