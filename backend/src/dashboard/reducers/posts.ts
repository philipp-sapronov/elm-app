import { combineReducers } from "redux";
import { Article } from "../../interfaces/post.interface";
import { createReducer, createAction, PayloadAction } from "@reduxjs/toolkit";

export const setData = createAction<Article[]>("set posts data");
export const setLoading = createAction("set posts loading");
export const setError = createAction<string>("set posts error");

const data = createReducer<Article[]>([], {
  [setData.type]: (_, action: PayloadAction<Article[]>) => action.payload,
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

export const posts = combineReducers({ data, loading, error });
