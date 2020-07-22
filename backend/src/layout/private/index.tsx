import React from "react";
import { AppBar } from "@material-ui/core";

export const PrivateLayout: React.FC = ({ children }) => {
  return (
    <div>
      <AppBar>{"ololo"}</AppBar>
      {children}
    </div>
  );
};
