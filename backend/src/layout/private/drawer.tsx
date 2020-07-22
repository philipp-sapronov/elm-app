import React from "react";
import { Drawer as MUIDrawer, DrawerProps } from "@material-ui/core";
import { useDrawerStyles } from "./styles";
import clsx from "clsx";
import IconButton from "@material-ui/core/IconButton";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import MenuIcon from "@material-ui/icons/Menu";

import ListItemText from "@material-ui/core/ListItemText";
const navigationMenu = [
  { title: "Articles", link: "/articles", icon: MailIcon },
  { title: "Categories", link: "/categories", icon: MailIcon },
  { title: "Menu", link: "/menu", icon: MailIcon },
  { title: "Tags", link: "/tags", icon: MailIcon },
  { title: "Media", link: "/media", icon: MailIcon },
  { title: "Settings", link: "/settings", icon: MailIcon },
];

export const Drawer: React.FC<
  {
    handleClose: () => void;
    open: boolean;
  } & DrawerProps
> = ({ handleClose, open }) => {
  const classes = useDrawerStyles();

  return (
    <MUIDrawer
      variant="permanent"
      className={clsx(classes.drawer, {
        [classes.drawerOpen]: open,
        [classes.drawerClose]: !open,
      })}
      classes={{
        paper: clsx({
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        }),
      }}
    >
      <div className={classes.toolbar}>
        <IconButton onClick={handleClose} color="inherit" aria-label="open drawer" edge="start">
          {open ? <ChevronLeftIcon /> : <MenuIcon />}
        </IconButton>
      </div>
      <Divider />
      <List>
        {navigationMenu.map(({ title, icon: Icon, link }) => (
          <ListItem button key={title} onClick={() => console.log(link)}>
            <ListItemIcon>
              <Icon />
            </ListItemIcon>
            <ListItemText primary={title} />
          </ListItem>
        ))}
      </List>
      <Divider />
    </MUIDrawer>
  );
};
