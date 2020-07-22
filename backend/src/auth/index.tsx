import { Route } from "../router/route";
import React from "react";

const Login = () => <div>login</div>;

export const dashboardRoutes = [<Route key={"login"} path={"/login"} exact component={Login} />];

export { default as authReducers } from "./reducers";
