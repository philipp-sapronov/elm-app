import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { PageDrawer } from "../../layout/private/pageDrawer";
import { Form } from "../components/tags/form";
import { useHistory } from "react-router-dom";
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

export const TagForm = () => {
  const { slug } = useParams();
  const { push } = useHistory();

  // get current item from store
  const isSlug = slug !== undefined;
  const [tag, setTag] = useState<Tag | null>(null);

  const handleClose = () => push("/tags");

  useEffect(() => {
    if (!isSlug || slug === "add") return setTag(null);
    setTag(getTag(null, 1));
  }, [slug]);

  const title = `${isSlug ? "Update" : "Add"} Tag`;

  const handleSubmit = (data: Partial<Tag>) => {
    console.log(data, "data");
  };

  return (
    <PageDrawer open={isSlug}>
      <Form
        onClose={handleClose}
        title={title}
        tag={tag}
        onSubmit={handleSubmit}
        tagTypes={Object.values(TagType)}
      />
    </PageDrawer>
  );
};
