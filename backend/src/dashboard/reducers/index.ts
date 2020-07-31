import { categories } from "./categories";
import { combineReducers } from "@reduxjs/toolkit";
import { posts } from "./posts";
import { tags } from "./tags";

export default combineReducers({
  posts,
  categories,
  tags,
});
