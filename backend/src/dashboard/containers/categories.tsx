import React from "react";
import { Categories as View } from "../components/categories";

export interface Category {
  _id: string;
  createdAt: Date;
  updatedAt: Date;
  title: string;
}

const getCategory = () => {
  const _id = Math.random().toFixed(4);
  return {
    _id,
    createdAt: new Date(),
    updatedAt: new Date(),
    title: "Category" + _id,
  };
};

export const Categories = () => {
  const data: Category[] = new Array(10).map(getCategory);
  return <View data={data} />;
};
