import React, { useEffect } from "react";
import { Categories as View } from "../components/categories";
import * as thunks from "../thunks/categories";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store/types";

export const Categories = () => {
  const { data, error, loading } = useSelector((state: RootState) => state.dashboard.categories);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(thunks.get());
  }, []);

  return <View data={data} loading={loading} error={error} />;
};
