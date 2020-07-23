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
import ListItemText from "@material-ui/core/ListItemText";

// import MailIcon from "@material-ui/icons/Mail";
import MenuIcon from "@material-ui/icons/Menu";
import PermMediaIcon from "@material-ui/icons/PermMedia";
import DashboardIcon from "@material-ui/icons/Dashboard";
import CategoryIcon from "@material-ui/icons/Category";
import SettingsIcon from "@material-ui/icons/Settings";
import AssignmentIcon from "@material-ui/icons/Assignment";
import AppsIcon from "@material-ui/icons/Apps";
import TurnedInIcon from "@material-ui/icons/TurnedIn";
import AccountBoxIcon from "@material-ui/icons/AccountBox";

const navListEntities = [
  { title: "Dashboard", link: "/", icon: DashboardIcon },
  { title: "Articles", link: "/articles", icon: AssignmentIcon },
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
        {navListEntities.map(({ title, icon: Icon, link }) => (
          <ListItem button key={title} onClick={() => console.log(link)}>
            <ListItemIcon>
              <Icon />
            </ListItemIcon>
            <ListItemText primary={title} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {navListSettings.map(({ title, icon: Icon, link }) => (
          <ListItem button key={title} onClick={() => console.log(link)}>
            <ListItemIcon>
              <Icon />
            </ListItemIcon>
            <ListItemText primary={title} />
          </ListItem>
        ))}
      </List>
    </MUIDrawer>
  );
};
