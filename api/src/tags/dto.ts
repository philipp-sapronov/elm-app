import { TagType } from "./enums";
export class CreateTagDto {
  title: string;
  type: TagType;
}

export class UpdateTagDto extends CreateTagDto {
  _id: string;
  createdAt: Date;
  updatedAt: Date;
}

export class DeleteTagDto {
  id: string;
}
