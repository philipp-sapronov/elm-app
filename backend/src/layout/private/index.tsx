// @ts-ignore
import React from "react";

import { Header } from "./header";
import { Drawer } from "./drawer";
import { useStyles } from "./styles";

export const PrivateLayout: React.FC = ({ children }) => {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <div className={classes.root}>
      <Header open={open} />
      <Drawer toggle={toggleDrawer} open={open} />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        {children}
      </main>
    </div>
  );
};
