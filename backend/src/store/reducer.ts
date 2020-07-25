import { combineReducers } from "redux";
import { dashboardReducers as dashboard } from "../dashboard";
import { authReducers as auth } from "../auth";

export const rootReducer = combineReducers({ dashboard, auth });
