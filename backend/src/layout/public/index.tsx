import React from "react";
import { AppBar } from "@material-ui/core";

export const PublicLayout: React.FC = ({ children }) => {
  return (
    <div>
      <AppBar>{"PublicLayout"}</AppBar>
      {children}
    </div>
  );
};
