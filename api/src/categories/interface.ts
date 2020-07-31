import { Status } from "./../statuses/enums";
export interface ICategory {
  _id: string;
  createdAt: Date;
  description: string;
  status: Status;
  title: string;
  updatedAt: Date;
}
