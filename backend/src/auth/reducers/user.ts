import { combineReducers, createReducer, PayloadAction } from "@reduxjs/toolkit";
import { createAction } from "@reduxjs/toolkit";

export const loadUser = createAction<string>("query/loadHeaders");

const uid = createReducer("xxx-yyy", {
  [loadUser.type]: (_, action: PayloadAction<string>) => action.payload,
});

export default combineReducers({
  uid,
});
