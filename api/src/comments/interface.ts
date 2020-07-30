export interface Comment {
  _id: string;
  author: string;
  content: string;
  createdAt: Date;
  parentId: string;
  postId: string;
  updatedAt: Date;
}
