import { Schema } from 'mongoose';
const { Types } = Schema;

const CategorySchema = new Schema(
  {
    title: { type: Types.String, required: true, trim: true, lowercase: true, unique: true },
  },
  { timestamps: true },
);

export const CategoryDbParams = {
  name: 'Category',
  collection: 'categories',
  schema: CategorySchema,
};
