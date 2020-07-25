import { Status } from "../enums/status.enum";

export interface Category {
  createdAt: Date;
  id: string;
  title: string;
  status: Status;
  updatedAt: Date;
}
