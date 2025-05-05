import { Role } from '@prisma/client';

export class CurrentUserDto {
  id: string;
  email: string;
  role: Role;
}
