import React from "react";
import Drawer from "@material-ui/core/Drawer";
import { usePageDrawerStyles } from "./styles";

type PageDrawerProps = {
  open: boolean;
};

export const PageDrawer: React.FC<PageDrawerProps> = ({ children, open }) => {
  const classes = usePageDrawerStyles();
  return (
    <Drawer anchor={"right"} open={open} classes={{ paper: classes.paper }}>
      {children}
    </Drawer>
  );
};
