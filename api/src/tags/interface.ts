import { TagType } from './enums';

export interface ITag {
  createdAt: Date;
  _id: string;
  title: string;
  type: TagType;
  updatedAt: Date;
}
