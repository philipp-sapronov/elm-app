import { AnyAction, combineReducers } from "redux";
import { dashboardReducers as dashboard } from "../dashboard";

export const rootReducer = combineReducers({ dashboard });
