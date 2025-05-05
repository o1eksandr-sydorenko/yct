import { Role } from '@prisma/client';

export interface CreateUserInput {
  role: Role;
  email: string;
  password: string;
  firstName?: string;
  lastName?: string;
  ipAddress?: string;
}
