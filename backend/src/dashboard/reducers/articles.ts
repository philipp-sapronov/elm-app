import { combineReducers, createReducer, PayloadAction } from "@reduxjs/toolkit";
import { createAction } from "@reduxjs/toolkit";

export const loadHeaders = createAction<string[]>("query/loadHeaders");

const test = createReducer("", {
  [loadHeaders.type]: (_, action: PayloadAction<string>) => action.payload,
});

export default combineReducers({
  test,
});
