import { Route } from "../router/route";
import React from "react";
import { Dashboard } from "./containers/dashboard";

export const dashboardRoutes = [
  <Route key={"dashboard"} path={"/"} exact component={Dashboard} />,
  <Route key={"dashboard-alias"} path={"/dashboard"} exact component={Dashboard} />,
];

export { default as dashboardReducers } from "./reducers";
