import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { PageDrawer } from "../../layout/private/pageDrawer";
import { Form } from "../components/categories/form";
import { useHistory } from "react-router-dom";
import { Category } from "../../interfaces/category.interface";
import * as thunks from "../thunks/categories";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store/types";

const title = "What is Lorem Ipsum?";

export const CategoryForm = () => {
  const { slug } = useParams();
  const { push } = useHistory();

  // get current item from store
  const isSlug = slug !== undefined;
  const categories = useSelector((state: RootState) => state.dashboard.categories.data);
  const [category, setCategory] = useState<Category | null>(null);
  const dispatch = useDispatch();

  const handleClose = () => push("/categories");

  useEffect(() => {
    if (!isSlug || slug === "add") return setCategory(null);
    setCategory(categories.find((item) => item.title === slug) || null);
  }, [slug]);

  const title = `${isSlug ? "Update" : "Add"} Category`;

  const handleAdd = async (data: Partial<Category>) => {
    dispatch(thunks.add(data as Category));
  };
  const handleUpdate = async (data: Partial<Category>) => {
    console.log("update");
    dispatch(thunks.update({ ...category, ...data } as Category));
  };

  return (
    <PageDrawer open={isSlug}>
      <Form
        onClose={handleClose}
        title={title}
        category={category}
        onSubmit={category === null ? handleAdd : handleUpdate}
      />
    </PageDrawer>
  );
};
