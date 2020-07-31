import { combineReducers } from "redux";
import { Category } from "./../../interfaces/category.interface";
import { createReducer, createAction, PayloadAction } from "@reduxjs/toolkit";

export const setData = createAction<Category[]>("set categories data");
export const setLoading = createAction("set categories loading");
export const setError = createAction<string>("set categories error");

const data = createReducer<Category[]>([], {
  [setData.type]: (_, action: PayloadAction<Category[]>) => action.payload,
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

export const categories = combineReducers({ data, loading, error });
