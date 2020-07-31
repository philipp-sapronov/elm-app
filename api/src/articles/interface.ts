import { ArticleStatus } from "./enums";

export interface IArticle {
  content: string;
  createdAt: Date;
  _id: string;
  preview: string;
  slug: string;
  status: ArticleStatus;
  excerpt: string;
  categories: Array<string>;
  tags: Array<string>;
  title: string;
  updatedAt: Date;
}
