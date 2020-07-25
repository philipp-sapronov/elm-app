import React from "react";
import { Switch } from "react-router-dom";
import { dashboardRoutes } from "../dashboard";

export const Router: React.FC = () => {
  return <Switch>{[dashboardRoutes]}</Switch>;
};
