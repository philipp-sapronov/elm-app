import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { PageDrawer } from "../../layout/private/pageDrawer";
import { Form } from "../components/posts/form";
import { useHistory } from "react-router-dom";
import { Article } from "../../interfaces/post.interface";
import * as thunks from "../thunks/posts";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store/types";
import * as categoriesThunks from "../thunks/categories";
import * as tagsThunks from "../thunks/tags";

// helper
const toAutocompleteOption = (item: { _id: string; title: string }) => ({
  _id: item._id,
  label: item.title,
});

export const PostsForm = () => {
  const { slug } = useParams();
  const { push } = useHistory();

  // get current item from store
  const isSlug = slug !== undefined;
  const posts = useSelector((state: RootState) => state.dashboard.posts.data);
  const tags = useSelector((state: RootState) => state.dashboard.tags.data);
  const categories = useSelector((state: RootState) => state.dashboard.categories.data);

  const [post, setPost] = useState<Article | null>(null);
  const dispatch = useDispatch();

  const handleClose = () => push("/posts");

  useEffect(() => {
    if (!isSlug || slug === "add") return setPost(null);
    setPost(posts.find((item) => item.slug === slug) || null);
  }, [slug]);

  const title = `${isSlug ? "Update" : "Add"} Post`;

  useEffect(() => {
    dispatch(tagsThunks.get());
    dispatch(categoriesThunks.get());
  }, []);

  const handleAdd = async (data: Partial<Article>) => {
    dispatch(thunks.add(data as Article));
  };
  const handleUpdate = async (data: Partial<Article>) => {
    dispatch(thunks.update({ ...post, ...data } as Article));
  };

  return (
    <PageDrawer open={isSlug}>
      <Form
        onClose={handleClose}
        title={title}
        post={post}
        categories={categories.map(toAutocompleteOption)}
        tags={tags.map(toAutocompleteOption)}
        onSubmit={post === null ? handleAdd : handleUpdate}
      />
    </PageDrawer>
  );
};
