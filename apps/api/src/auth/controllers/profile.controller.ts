import { Controller, Get } from '@nestjs/common';
import { ProfileDto } from '../dto';
import { CurrentUserId } from '../decorators';
import { AuthService } from '../services';
import { ApiResponseWithErrors } from '@your-crypto-tracker/core';
import { ApiBearerAuth } from '@nestjs/swagger';

@ApiBearerAuth()
@Controller('profile')
export class ProfileController {
  constructor(private readonly authService: AuthService) {}

  @Get()
  @ApiResponseWithErrors({ type: ProfileDto })
  async getProfile(@CurrentUserId() userId: string): Promise<ProfileDto> {
    return this.authService.getProfileById(userId);
  }
}
