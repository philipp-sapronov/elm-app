import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { dashboardRoutes } from "../dashboard";

const AppRouter: React.FC = () => {
  return (
    <Router>
      <Switch>{[dashboardRoutes]}</Switch>
    </Router>
  );
};

export default AppRouter;
