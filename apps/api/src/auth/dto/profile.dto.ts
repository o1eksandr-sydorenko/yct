import { ApiProperty } from '@nestjs/swagger';
import { Role } from '@prisma/client';

export class ProfileDto {
  @ApiProperty()
  id: string;

  @ApiProperty()
  email: string;

  @ApiProperty({ required: false })
  firstName?: string;

  @ApiProperty({ required: false })
  lastName?: string;

  @ApiProperty({ enum: Role, enumName: 'UserRole' })
  role: Role;

  @ApiProperty()
  permissions: string[];

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;
}
