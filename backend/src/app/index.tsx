import React from "react";
import { store } from "../store";
import { Provider } from "react-redux";
import Theme from "../theme";

export const App: React.FC = ({ children }) => {
  return (
    <Provider store={store}>
      <Theme>{children}</Theme>
    </Provider>
  );
};
