import { Status } from '../enums/status.enum';

export interface Article {
  content: string;
  createdAt: Date;
  id: string;
  preview: string;
  slug: string;
  status: Status;
  categories: Array<string>;
  tags: Array<string>;
  title: string;
  updatedAt: Date;
}