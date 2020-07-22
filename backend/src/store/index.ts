import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./reducer";

export const store = configureStore({
  reducer: rootReducer,
});

// @ts-ignore
if (process.env.NODE_ENV === "development" && module.hot) {
  // @ts-ignore
  module.hot.accept("./reducer", () => {
    const newRootReducer = require("./reducer").default;
    store.replaceReducer(newRootReducer);
  });
}
