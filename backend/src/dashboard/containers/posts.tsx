import React, { useEffect } from "react";
import { Categories as View } from "../components/posts";
import * as thunks from "../thunks/posts";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store/types";

export const Posts = () => {
  const { data, error, loading } = useSelector((state: RootState) => state.dashboard.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(thunks.get());
  }, []);

  return <View data={data} loading={loading} error={error} />;
};
