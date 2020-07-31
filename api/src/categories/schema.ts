import { Status } from "./../statuses/enums";
import { Schema } from "mongoose";
const { Types } = Schema;

const CategorySchema = new Schema(
  {
    title: { type: Types.String, required: true, trim: true, lowercase: true, unique: true },
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

export const CategoryDbParams = {
  name: "Category",
  collection: "categories",
  schema: CategorySchema
};
