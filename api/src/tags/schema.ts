import { Schema } from 'mongoose';
import { TagType } from './enums';
const { Types } = Schema;

const TagSchema = new Schema(
  {
    title: { type: Types.String, required: true, trim: true, lowercase: true, unique: true },
    type: { type: Types.String, required: true, enum: Object.values(TagType) },
  },
  { timestamps: true },
);

export const TagsDbParams = {
  name: 'Tag',
  collection: 'tags',
  schema: TagSchema,
};
