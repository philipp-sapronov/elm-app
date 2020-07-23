import React from "react";
import {
  Drawer as MUIDrawer,
  DrawerProps,
  IconButton,
  Divider,
  ListItem,
  ListItemIcon,
  ListItemText,
  ButtonBase,
  List,
} from "@material-ui/core";
import clsx from "clsx";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import MenuIcon from "@material-ui/icons/Menu";
import PermMediaIcon from "@material-ui/icons/PermMedia";
import DashboardIcon from "@material-ui/icons/Dashboard";
import CategoryIcon from "@material-ui/icons/Category";
import SettingsIcon from "@material-ui/icons/Settings";
import AssignmentIcon from "@material-ui/icons/Assignment";
import AppsIcon from "@material-ui/icons/Apps";
import TurnedInIcon from "@material-ui/icons/TurnedIn";
import AccountBoxIcon from "@material-ui/icons/AccountBox";

import { useDrawerStyles } from "./styles";
import { NavLink } from "react-router-dom";
const navListEntities = [
  { title: "Dashboard", link: "/", icon: DashboardIcon },
  { title: "Articles", link: "/posts", icon: AssignmentIcon },
  { title: "Categories", link: "/categories", icon: CategoryIcon },
  { title: "Tags", link: "/tags", icon: TurnedInIcon },
  { title: "Menu", link: "/menu", icon: AppsIcon },
];

const navListSettings = [
  { title: "Users", link: "/users", icon: AccountBoxIcon },
  { title: "Media", link: "/media", icon: PermMediaIcon },
  { title: "Settings", link: "/settings", icon: SettingsIcon },
];

export const Drawer: React.FC<
  {
    toggle: () => void;
    open: boolean;
  } & DrawerProps
> = ({ toggle, open }) => {
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
        <IconButton onClick={toggle} color="inherit" aria-label="open drawer" edge="start">
          {open ? <ChevronLeftIcon /> : <MenuIcon />}
        </IconButton>
      </div>
      <Divider />
      <List>
        {navListEntities.map(({ title, icon: Icon, link }) => (
          <ListItem disableGutters className={classes.listItem}>
            <NavLink key={title} to={link} className={classes.navlink}>
              <ButtonBase component="div" classes={{ root: classes.iconButton }}>
                <ListItemIcon>
                  <Icon />
                </ListItemIcon>
                <ListItemText primary={title} />
              </ButtonBase>
            </NavLink>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {navListSettings.map(({ title, icon: Icon, link }) => (
          <ListItem disableGutters className={classes.listItem}>
            <NavLink key={title} to={link} className={classes.navlink}>
              <ButtonBase component="div" classes={{ root: classes.iconButton }}>
                <ListItemIcon>
                  <Icon />
                </ListItemIcon>
                <ListItemText primary={title} />
              </ButtonBase>
            </NavLink>
          </ListItem>
        ))}
      </List>
    </MUIDrawer>
  );
};
