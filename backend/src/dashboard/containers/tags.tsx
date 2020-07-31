import React from "react";
import { Tags as View } from "../components/tags";
import { Status } from "../../enums/status.enum";
import { Tag } from "../../interfaces/tag.interface";
import { TagType } from "../../enums/tagType.enum";

const getTag = (_: null, idx: number) => {
  const id = Math.random().toFixed(4);
  return {
    _id: id,
    createdAt: new Date(),
    updatedAt: new Date(),
    title: "Tag" + idx,
    type: TagType.technology,
    description: "Short description about this tag",
    status: Status.new,
  };
};

export const Tags = () => {
  const data: Tag[] = new Array(10).fill(null).map(getTag);
  return <View data={data} />;
};
