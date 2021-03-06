import { Status } from "../enums/status.enum";

export interface Category {
  createdAt: Date;
  description: string;
  _id: string;
  title: string;
  status: Status;
  updatedAt: Date;
}
