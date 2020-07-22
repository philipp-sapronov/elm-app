import { Action } from "@reduxjs/toolkit";
import { ThunkAction } from "redux-thunk";
import { store } from "../store";
import { rootReducer } from "./reducer";

export type RootState = ReturnType<typeof rootReducer>;
export type AppThunk = ThunkAction<void, RootState, null, Action<string>>;
export type AppDispatch = typeof store.dispatch;
