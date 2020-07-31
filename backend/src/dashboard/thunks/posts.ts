import { Article } from "./../../interfaces/post.interface";
import { AppThunk } from "./../../store/types";
import * as api from "../api/posts";
import * as actions from "../reducers/posts";

type OmitAddFields<T> = Omit<T, "id" | "createdAt" | "updatedAt">;
type OmitUpdateFields<T> = Omit<T, "id">;

export const get = (): AppThunk => async (dispatch) => {
  try {
    dispatch(actions.setLoading());
    const data = await api.get();

    dispatch(actions.setData(data));
  } catch (e) {
    if (typeof e?.message === "string") {
      dispatch(actions.setError(e.message));
    } else {
      console.error(e);
    }
  }
};

export const add = (post: OmitAddFields<Article>): AppThunk => async (dispatch) => {
  try {
    dispatch(actions.setLoading());
    const data = await api.add(post);
    // dispatch(actions.setData(data));
  } catch (e) {
    if (typeof e?.message === "string") {
      dispatch(actions.setError(e.message));
    } else {
      console.error(e);
    }
  }
};

export const update = (post: OmitUpdateFields<Article>): AppThunk => async (dispatch) => {
  try {
    dispatch(actions.setLoading());
    const data = await api.update(post);
    // dispatch(actions.setData(data));
  } catch (e) {
    if (typeof e?.message === "string") {
      dispatch(actions.setError(e.message));
    } else {
      console.error(e);
    }
  }
};

export const remove = (id: string): AppThunk => async (dispatch) => {
  try {
    dispatch(actions.setLoading());
    const data = await api.remove(id);
    // dispatch(actions.setData(data));
  } catch (e) {
    if (typeof e?.message === "string") {
      dispatch(actions.setError(e.message));
    } else {
      console.error(e);
    }
  }
};
