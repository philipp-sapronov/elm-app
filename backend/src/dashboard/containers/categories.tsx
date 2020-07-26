import React from "react";
import { Categories as View } from "../components/categories";
import { Status } from "../../enums/status.enum";
import { Category } from "../../interfaces/category.interface";

const getCategory = (_: null, idx: number) => {
  const id = Math.random().toFixed(4);
  return {
    id,
    createdAt: new Date(),
    updatedAt: new Date(),
    title: "Category" + idx,
    status: Status.new,
    description: 'Short description about category'
  };
};

export const Categories = () => {
  const data: Category[] = new Array(10).fill(null).map(getCategory);
  return <View data={data} />;
};
