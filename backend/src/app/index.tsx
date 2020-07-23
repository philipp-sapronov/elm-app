import React from "react";
import { store } from "../store";
import { Provider } from "react-redux";
import Theme from "../theme";
import { Router } from "../router";
import { BrowserRouter } from "react-router-dom";
import { Layout } from "../layout";

export const App: React.FC = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Theme>
          <Layout>
            <Router />
          </Layout>
        </Theme>
      </BrowserRouter>
    </Provider>
  );
};
