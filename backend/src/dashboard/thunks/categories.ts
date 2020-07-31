import { Category } from "./../../interfaces/category.interface";
import { AppThunk } from "./../../store/types";
import * as api from "../api/categories";
import * as actions from "../reducers/categories";

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

export const add = (category: OmitAddFields<Category>): AppThunk => async (dispatch) => {
  try {
    dispatch(actions.setLoading());
    const data = await api.add(category);
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

export const update = (category: OmitUpdateFields<Category>): AppThunk => async (dispatch) => {
  try {
    dispatch(actions.setLoading());
    const data = await api.update(category);
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
