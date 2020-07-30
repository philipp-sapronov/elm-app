import { UserStatus, UserRole } from './enums';

export interface User {
  _id: string;
  createdAt: Date;
  name: string;
  email: string;
  status: UserStatus;
  role: UserRole;
  updatedAt: Date;
}
