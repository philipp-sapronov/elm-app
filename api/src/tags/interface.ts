import { Status } from "./../statuses/enums";
import { TagType } from "./enums";

export interface ITag {
  _id: string;
  createdAt: Date;
  description: string;
  status: Status;
  title: string;
  type: TagType;
  updatedAt: Date;
}
