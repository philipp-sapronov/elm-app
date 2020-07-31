import { Status } from "./../statuses/enums";
import { Schema } from "mongoose";
import { TagType } from "./enums";
const { Types } = Schema;

const TagSchema = new Schema(
  {
    title: { type: Types.String, required: true, trim: true, lowercase: true, unique: true },
    type: { type: Types.String, required: true, enum: Object.values(TagType) },
    description: { type: Types.String, required: true, trim: true },
    status: {
      type: Types.String,
      default: Status.new,
      enum: Object.values(Status),
      required: true
    }
  },
  { timestamps: true }
);

export const TagsDbParams = {
  name: "Tag",
  collection: "tags",
  schema: TagSchema
};
