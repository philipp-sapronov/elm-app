import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { PageDrawer } from "../../layout/private/pageDrawer";
import { Form } from "../components/tags/form";
import { useHistory } from "react-router-dom";
import { Tag } from "../../interfaces/tag.interface";
import * as thunks from "../thunks/tags";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store/types";
import { TagType } from "../../enums/tagType.enum";

export const TagForm = () => {
  const { slug } = useParams();
  const { push } = useHistory();

  // get current item from store
  const isSlug = slug !== undefined;
  const tags = useSelector((state: RootState) => state.dashboard.tags.data);
  const [tag, setTag] = useState<Tag | null>(null);
  const dispatch = useDispatch();

  const handleClose = () => push("/tags");

  useEffect(() => {
    if (!isSlug || slug === "add") return setTag(null);
    setTag(tags.find((item) => item.title === slug) || null);
  }, [slug]);

  const title = `${isSlug ? "Update" : "Add"} Tag`;

  const handleAdd = async (data: Partial<Tag>) => {
    dispatch(thunks.add(data as Tag));
  };
  const handleUpdate = async (data: Partial<Tag>) => {
    dispatch(thunks.update({ ...tag, ...data } as Tag));
  };

  return (
    <PageDrawer open={isSlug}>
      <Form
        onClose={handleClose}
        title={title}
        tagTypes={Object.values(TagType)}
        tag={tag}
        onSubmit={tag === null ? handleAdd : handleUpdate}
      />
    </PageDrawer>
  );
};
