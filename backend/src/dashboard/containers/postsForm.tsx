import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { PageDrawer } from "../../layout/private/pageDrawer";
import { Form } from "../components/posts/form";
import { useHistory } from "react-router-dom";
import { Article } from "../../interfaces/post.interface";
import { Status } from "../../enums/status.enum";
const title = "What is Lorem Ipsum?";

const getPost = (_: null, idx: number): Article => {
  const id = Math.random().toFixed(4);
  return {
    categories: [],
    content: "content",
    createdAt: new Date(),
    _id: id,
    preview: "preview",
    slug: "what-is-loremipsum-" + idx,
    status: Status.new,
    tags: [],
    title: title + " " + idx,
    updatedAt: new Date(),
    postedAt: new Date(),
  };
};

export const PostsForm = () => {
  const { slug } = useParams();
  const { push } = useHistory();

  const handleClose = () => push("/posts");
  // get current item from store
  const isSlug = slug !== undefined;
  const [post, setPost] = useState<Article | null>(null);

  useEffect(() => {
    if (!isSlug || slug === "add") return setPost(null);
    setPost(getPost(null, 1));
  }, [slug]);

  const title = `${isSlug ? "Update" : "Add"} Post`;
  const handleSubmit = () => {
    //
  };
  return (
    <PageDrawer open={isSlug}>
      <Form
        onClose={handleClose}
        title={title}
        post={post}
        categories={["first", "second", "third"]}
        tags={["first", "second", "third"]}
        onSubmit={handleSubmit}
      />
    </PageDrawer>
  );
};
