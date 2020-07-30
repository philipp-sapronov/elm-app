export class CreateCommentDto {
  author: string;
  parentId: string;
  postId: string;
  content: string;
}

export class UpdateCommentDto extends CreateCommentDto {
  _id: string;
  createdAt: Date;
  updatedAt: Date;
}
