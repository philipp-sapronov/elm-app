import React from "react";
import { store } from "../store";
import { Provider } from "react-redux";
import Theme from "../theme";
import { Layout } from "../layout";

export const App: React.FC = ({ children }) => {
  return (
    <Provider store={store}>
      <Theme>
        <Layout>{children}</Layout>
      </Theme>
    </Provider>
  );
};
