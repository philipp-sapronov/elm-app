import { combineReducers } from "redux";
import { Tag } from "../../interfaces/tag.interface";
import { createReducer, createAction, PayloadAction } from "@reduxjs/toolkit";

export const setData = createAction<Tag[]>("set tags data");
export const setLoading = createAction("set tags loading");
export const setError = createAction<string>("set tags error");

const data = createReducer<Tag[]>([], {
  [setData.type]: (_, action: PayloadAction<Tag[]>) => action.payload,
});

const loading = createReducer(false, {
  [setLoading.type]: () => true,
  [setData.type]: () => false,
  [setError.type]: () => false,
});

const error = createReducer<string | null>(null, {
  [setData.type]: () => null,
  [setError.type]: (_, action: PayloadAction<string>) => action.payload,
});

export const tags = combineReducers({ data, loading, error });
