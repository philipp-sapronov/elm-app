import { Tag } from "./../../interfaces/tag.interface";
import { AppThunk } from "./../../store/types";
import * as api from "../api/tags";
import * as actions from "../reducers/tags";

type OmitAddFields<T> = Omit<T, "id" | "createdAt" | "updatedAt">;
type OmitUpdateFields<T> = Omit<T, "id">;

export const get = (): AppThunk => async (dispatch) => {
  try {
    dispatch(actions.setLoading());
    const data = await api.get();
    console.log(data, "RESPONSE DATA");
    dispatch(actions.setData(data));
  } catch (e) {
    if (typeof e?.message === "string") {
      dispatch(actions.setError(e.message));
    } else {
      console.error(e);
    }
  }
};

export const add = (tag: OmitAddFields<Tag>): AppThunk => async (dispatch) => {
  try {
    dispatch(actions.setLoading());
    const data = await api.add(tag);
    console.log(data, "RESPONSE ADD DATA");
    // dispatch(actions.setData(data));
  } catch (e) {
    if (typeof e?.message === "string") {
      dispatch(actions.setError(e.message));
    } else {
      console.error(e);
    }
  }
};

export const update = (tag: OmitUpdateFields<Tag>): AppThunk => async (dispatch) => {
  try {
    dispatch(actions.setLoading());
    const data = await api.update(tag);
    console.log(data, "RESPONSE UPDATE DATA");
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
    console.log(data, "RESPONSE REMOVE DATA");
    // dispatch(actions.setData(data));
  } catch (e) {
    if (typeof e?.message === "string") {
      dispatch(actions.setError(e.message));
    } else {
      console.error(e);
    }
  }
};
