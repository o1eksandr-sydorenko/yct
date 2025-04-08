import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsOptional, IsString } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({ type: () => String })
  @IsString()
  role: string;

  @ApiProperty({ type: () => String })
  @IsEmail()
  email: string;

  @ApiProperty({ type: () => String })
  @IsString()
  password: string;

  @ApiProperty({ type: () => String, required: false })
  @IsString()
  @IsOptional()
  firstName?: string;

  @ApiProperty({ type: () => String, required: false })
  @IsString()
  @IsOptional()
  lastName?: string;
}
