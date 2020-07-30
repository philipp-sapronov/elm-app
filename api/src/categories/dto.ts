export class CreateCategoryDto {
  title: string;
}

export class UpdateCategoryDto extends CreateCategoryDto {
  _id: string;
  createdAt: Date;
  updatedAt: Date;
}
