import React from "react";
import { Categories as View } from "../components/posts";
import { Article } from "../../interfaces/post.interface";
import { Status } from "../../enums/status.enum";

const getPost = (_: null, idx: number): Article => {
  const id = Math.random().toFixed(4);
  return {
    categories: [],
    content: "content",
    createdAt: new Date(),
    id,
    preview: "preview",
    slug: "article-" + idx,
    status: Status.new,
    tags: [],
    title: "Article" + idx,
    updatedAt: new Date(),
  };
};

export const Posts = () => {
  const data: Article[] = new Array(10).fill(null).map(getPost);
  return <View data={data} />;
};
