import React, { useEffect } from "react";
import { Tags as View } from "../components/tags";
import { Status } from "../../enums/status.enum";
import { TagType } from "../../enums/tagType.enum";
import * as thunks from "../thunks/tags";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store/types";

export const Tags = () => {
  const { data, error, loading } = useSelector((state: RootState) => state.dashboard.tags);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(thunks.get());
  }, []);

  return <View data={data} loading={loading} error={error} />;
};
