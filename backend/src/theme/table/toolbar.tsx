import { useToolbarStyles } from "./styles";
import { IconButton, Toolbar, Tooltip, Typography } from "@material-ui/core";
import FilterListIcon from "@material-ui/icons/FilterList";
import DeleteIcon from "@material-ui/icons/Delete";
import React from "react";

type TableToolbarProps = {
  itemsCnt: number;
  checkedCnt: number;
  title: string;
};

const DefaultToolbar = ({ title, cnt }: { cnt: number; title: string }) => {
  const classes = useToolbarStyles();

  return (
    <Toolbar className={classes.root}>
      <Typography className={classes.title} variant="h6" id="tableTitle" component="div">
        {title} ({cnt})
      </Typography>
      <Tooltip title="Filter list">
        <IconButton aria-label="filter list">
          <FilterListIcon />
        </IconButton>
      </Tooltip>
    </Toolbar>
  );
};

const ActiveToolbar = ({ title, cnt }: { cnt: number; title: string }) => {
  const classes = useToolbarStyles();

  return (
    <Toolbar className={`${classes.root} ${classes.highlight}`}>
      <Typography className={classes.title} color="inherit" variant="subtitle1" component="div">
        {cnt} selected
      </Typography>
      <Tooltip title="Delete">
        <IconButton aria-label="delete">
          <DeleteIcon />
        </IconButton>
      </Tooltip>
    </Toolbar>
  );
};

export const TableToolbar = (props: TableToolbarProps) => {
  const { checkedCnt, itemsCnt, title } = props;

  return checkedCnt > 0 ? (
    <ActiveToolbar cnt={checkedCnt} title={title} />
  ) : (
    <DefaultToolbar cnt={itemsCnt} title={title} />
  );
};
