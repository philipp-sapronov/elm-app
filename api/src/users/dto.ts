import { UserStatus, UserRole } from './enums';

export class CreateCommentDto {
  name: string;
  email: string;
  status: UserStatus;
  role: UserRole;
}

export class UpdateCommentDto extends CreateCommentDto {
  _id: string;
  createdAt: Date;
  updatedAt: Date;
}
