import { ArticleStatus } from "./enums";
export class CreateArticleDto {
  categories: Array<string>;
  content: string;
  slug: string;
  status: ArticleStatus;
  excerpt: string;
  tags: Array<string>;
  title: string;
}

export class UpdateArticleDto extends CreateArticleDto {
  _id: string;
  createdAt: Date;
  updatedAt: Date;
}

export class DeleteArticleDto {
  id: string;
}
