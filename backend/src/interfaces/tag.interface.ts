import { TagType } from "../enums/tagType.enum";
import { Status } from "../enums/status.enum";

export interface Tag {
  createdAt: Date;
  id: string;
  title: string;
  type: TagType;
  status: Status;
  updatedAt: Date;
}
