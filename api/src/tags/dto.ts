export class CreateTagDto {
  title: string;
  type: string;
}

export class UpdateTagDto extends CreateTagDto {
  _id: string;
  createdAt: Date;
  updatedAt: Date;
}
