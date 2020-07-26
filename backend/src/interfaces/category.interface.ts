import { Status } from "../enums/status.enum";

export interface Category {
  createdAt: Date;
  description: string;
  id: string;
  title: string;
  status: Status;
  updatedAt: Date;
}
