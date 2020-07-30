import { USER_COLLECTION_NAME, UserSchema, USER_MODEL_NAME } from './schema';
import { model } from 'mongoose';

export const User = model(USER_MODEL_NAME, UserSchema, USER_COLLECTION_NAME);
