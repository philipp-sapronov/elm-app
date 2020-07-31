import { Status } from "../enums/status.enum";

export interface Article {
  categories: Array<string>;
  content: string;
  createdAt: Date;
  _id: string;
  excerpt: string;
  postedAt: Date;
  slug: string;
  status: Status;
  tags: Array<string>;
  title: string;
  updatedAt: Date;
}
