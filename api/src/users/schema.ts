import { UserStatus, UserRole } from './enums';
import { Schema } from 'mongoose';
const { Types } = Schema;

export const UserSchema = new Schema(
  {
    name: { type: Types.String },
    email: { type: Types.ObjectId, required: true, uniq: true },
    status: { type: Types.String, required: true, enum: Object.values(UserStatus) },
    role: { type: Types.String, required: true, enum: Object.values(UserRole) },
  },
  { timestamps: true },
);

export const USER_MODEL_NAME = 'User';
export const USER_COLLECTION_NAME = 'users';
