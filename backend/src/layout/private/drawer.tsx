import React from "react";
import {
  Drawer as MuiDrawer,
  DrawerProps,
  IconButton,
  Divider,
  ListItem as MuiListItem,
  ListItemIcon,
  ListItemText,
  ButtonBase,
  List,
} from "@material-ui/core";
import clsx from "clsx";
import MenuIcon from "@material-ui/icons/Menu";
import PermMediaIcon from "@material-ui/icons/PermMedia";
import DashboardIcon from "@material-ui/icons/Dashboard";
import CategoryIcon from "@material-ui/icons/Category";
import SettingsIcon from "@material-ui/icons/Settings";
import AssignmentIcon from "@material-ui/icons/Assignment";
import AppsIcon from "@material-ui/icons/Apps";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import MenuOpenIcon from "@material-ui/icons/MenuOpen";
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import { useDrawerStyles } from "./styles";
import { NavLink } from "react-router-dom";

const navListEntities = [
  { title: "Dashboard", link: "/", icon: DashboardIcon },
  { title: "Articles", link: "/posts", icon: AssignmentIcon },
  { title: "Categories", link: "/categories", icon: CategoryIcon },
  { title: "Tags", link: "/tags", icon: LocalOfferIcon },
  { title: "Feedback", link: "/feedback", icon: QuestionAnswerIcon },
  { title: "Users", link: "/users", icon: AccountBoxIcon },
];

const navListSettings = [
  { title: "Menu", link: "/menu", icon: AppsIcon },
  { title: "Media", link: "/media", icon: PermMediaIcon },
  { title: "Settings", link: "/settings", icon: SettingsIcon },
];

const ListItem = ({
  classes,
  link,
  icon: Icon,
  title,
}: {
  classes: ReturnType<typeof useDrawerStyles>;
  title: string;
  icon: React.FC;
  link: string;
}) => {
  return (
    <MuiListItem key={link} disableGutters className={classes.listItem}>
      <NavLink to={link} className={classes.navlink}>
        <ButtonBase component="div" classes={{ root: classes.iconButton }}>
          <ListItemIcon>
            <Icon />
          </ListItemIcon>
          <ListItemText primary={title} />
        </ButtonBase>
      </NavLink>
    </MuiListItem>
  );
};

export const Drawer: React.FC<
  {
    toggle: () => void;
    open: boolean;
  } & DrawerProps
> = ({ toggle, open }) => {
  const classes = useDrawerStyles();

  return (
    <MuiDrawer
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
          {open ? <MenuOpenIcon /> : <MenuIcon />}
        </IconButton>
      </div>
      <Divider />
      <List>
        {navListEntities.map((item) => (
          <ListItem key={item.link} {...item} classes={classes} />
        ))}
      </List>
      <Divider />
      <List>
        {navListSettings.map((item) => (
          <ListItem key={item.link} {...item} classes={classes} />
        ))}
      </List>
    </MuiDrawer>
  );
};
