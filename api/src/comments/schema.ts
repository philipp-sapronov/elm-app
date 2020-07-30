import { ArticleDbParams } from './../articles/schema';
import { Schema } from 'mongoose';
const { Types } = Schema;

const NAME = 'Comment';

export const CommentSchema = new Schema(
  {
    author: { type: Types.ObjectId, required: true, ref: 'User' },
    parentId: { type: Types.ObjectId, ref: NAME },
    postId: { type: Types.ObjectId, ref: ArticleDbParams.name, required: true },
    content: { type: Types.String, required: true, trim: true },
  },
  { timestamps: true },
);

export const Comment = {
  name: NAME,
  collection: 'comments',
  schema: CommentSchema,
};
