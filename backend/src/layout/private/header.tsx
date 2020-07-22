import React from "react";
import { AppBar } from "@material-ui/core";
import { useHeaderStyles } from "./styles";
import clsx from "clsx";
import Toolbar from "@material-ui/core/Toolbar";

export const Header = ({ open }: { open: boolean }) => {
  const classes = useHeaderStyles();

  return (
    <AppBar
      position="fixed"
      className={clsx(classes.appBar, {
        [classes.appBarShift]: open,
      })}
    >
      <Toolbar>content</Toolbar>
    </AppBar>
  );
};
