import { Status } from "./../statuses/enums";

export class CreateCategoryDto {
  title: string;
  description: string;
  status: Status;
}

export class UpdateCategoryDto extends CreateCategoryDto {
  _id: string;
  createdAt: Date;
  updatedAt: Date;
}

export class DeleteCategoryDto {
  id: string;
}
