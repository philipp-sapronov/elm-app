import React, { useState } from "react";

import { IconButton, Menu } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/MoreHoriz";

import { MenuItem, Typography } from "@material-ui/core";
import { RowAction } from "./row";

type Props = {
  children: RowAction[];
};

export const ActionColumn = ({ children }: Props) => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => setAnchorEl(null);

  return (
    <>
      <IconButton onClick={handleClick} style={{ width: 40, height: 40 }}>
        <MenuIcon />
      </IconButton>
      <Menu anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
        {children.map(({ onClick, icon: Icon, label }) => {
          return (
            <MenuItem key={label} onClick={onClick}>
              <Icon fontSize="small" color="action" />
              <Typography style={{ marginLeft: 10, minWidth: 80 }}>{label}</Typography>
            </MenuItem>
          );
        })}
      </Menu>
    </>
  );
};
