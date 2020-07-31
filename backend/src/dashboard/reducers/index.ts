import { categories } from "./categories";
import { combineReducers } from "@reduxjs/toolkit";
import articles from "./articles";

export default combineReducers({
  articles,
  categories,
});
