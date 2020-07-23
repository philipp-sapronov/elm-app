import React from "react";
import { AppBar, Badge, InputBase, IconButton } from "@material-ui/core";
import { useHeaderStyles } from "./styles";
import clsx from "clsx";
import Toolbar from "@material-ui/core/Toolbar";

import NotificationsIcon from "@material-ui/icons/Notifications";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import SearchIcon from "@material-ui/icons/Search";
import GitHubIcon from "@material-ui/icons/GitHub";

export const Header = ({ open }: { open: boolean }) => {
  const classes = useHeaderStyles();

  return (
    <AppBar
      position="fixed"
      className={clsx(classes.appBar, {
        [classes.appBarShift]: open,
      })}
    >
      <Toolbar>
        <div style={{ display: "flex", marginLeft: 'auto', alignItems: 'center' }}>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ "aria-label": "search" }}
            />
          </div>
          <IconButton aria-label="show 4 new mails" color="inherit">
            <Badge badgeContent={4} color="secondary">
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <IconButton aria-label="show 4 new mails" color="inherit">
            <GitHubIcon />
          </IconButton>
          <IconButton aria-label="show 4 new mails" color="inherit">
            <AccountCircleIcon />
          </IconButton>
        </div>
      </Toolbar>
    </AppBar>
  );
};
