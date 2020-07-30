import { Schema } from 'mongoose';

import { TagsDbParams } from './../tags/schema';
import { CategoryDbParams } from './../categories/schema';
import { ArticleStatus } from './enums';

const { Types } = Schema;

export const ArticleSchema = new Schema(
  {
    categories: [{ type: Types.ObjectId, default: [], ref: CategoryDbParams.name }],
    content: { type: Types.String, required: true },
    postedAt: Types.Date,
    slug: {
      type: Types.String,
      required: true,
      unique: true,
    },
    status: {
      type: Types.String,
      default: ArticleStatus.new,
      enum: Object.values(ArticleStatus),
      required: true,
    },
    summery: { type: Types.String, required: true, trim: true },
    tags: [{ type: Types.ObjectId, default: [], ref: TagsDbParams.name }],
    title: { type: Types.String, required: true, trim: true },
  },
  { timestamps: true },
);

export const ArticleDbParams = {
  name: 'Article',
  collection: 'articles',
  schema: ArticleSchema,
};
