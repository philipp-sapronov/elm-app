import { Route } from "../router/route";
import React from "react";
import { Dashboard } from "./containers/dashboard";
import { Posts } from "./containers/posts";
import { Categories } from "./containers/categories";
import { Tags } from "./containers/tags";
import { Users } from "./containers/users";
import { Media } from "./containers/media";
import { Settings } from "./containers/settings";
import { Menu } from "./containers/menu";

export const dashboardRoutes = [
  <Route key={"dashboard"} path={"/posts"} exact component={Posts} />,
  <Route key={"dashboard"} path={"/posts/:slug"} exact component={Posts} />,
  <Route key={"dashboard"} path={"/categories"} exact component={Categories} />,
  <Route key={"dashboard"} path={"/media"} exact component={Media} />,
  <Route key={"dashboard"} path={"/settings"} exact component={Settings} />,
  <Route key={"dashboard"} path={"/tags"} exact component={Tags} />,
  <Route key={"dashboard"} path={"/users"} exact component={Users} />,
  <Route key={"dashboard"} path={"/menu"} exact component={Menu} />,
  <Route key={"dashboard-alias"} path={"/dashboard"} exact component={Dashboard} />,
  <Route key={"dashboard"} path={"/"} exact component={Dashboard} />,
];

export { default as dashboardReducers } from "./reducers";
