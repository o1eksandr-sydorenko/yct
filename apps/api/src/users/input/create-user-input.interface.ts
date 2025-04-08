export interface CreateUserInput {
  role: string;
  email: string;
  password: string;
  firstName?: string;
  lastName?: string;
  ipAddress?: string;
}
