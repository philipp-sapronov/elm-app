import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { PageDrawer } from "../../layout/private/pageDrawer";
import { Form } from "../components/categories/form";
import { useHistory } from "react-router-dom";
import { Status } from "../../enums/status.enum";
import { Category } from "../../interfaces/category.interface";
const title = "What is Lorem Ipsum?";

const getCategory = (_: null, idx: number) => {
  const id = Math.random().toFixed(4);
  return {
    id,
    createdAt: new Date(),
    updatedAt: new Date(),
    title: "Category" + idx,
    status: Status.new,
    description: "Short description about category",
  };
};

export const CategoryForm = () => {
  const { slug } = useParams();
  const { push } = useHistory();

  // get current item from store
  const isSlug = slug !== undefined;
  const [category, setCategory] = useState<Category | null>(null);

  const handleClose = () => push("/categories");

  useEffect(() => {
    if (!isSlug || slug === "add") return setCategory(null);
    setCategory(getCategory(null, 1));
  }, [slug]);

  const title = `${isSlug ? "Update" : "Add"} Category`;

  const handleSubmit = (data: Partial<Category>) => {
    console.log(data, "data");
  };

  return (
    <PageDrawer open={isSlug}>
      <Form onClose={handleClose} title={title} category={category} onSubmit={handleSubmit} />
    </PageDrawer>
  );
};
