import { useToolbarStyles } from "./styles";
import { Button, IconButton, Toolbar, Tooltip, Typography } from "@material-ui/core";
import FilterListIcon from "@material-ui/icons/FilterList";
import DeleteIcon from "@material-ui/icons/Delete";
import React from "react";

import AddIcon from "@material-ui/icons/Add";
import SaveIcon from "@material-ui/icons/Save";

export type ToolbarProps = {
  onCreate: () => void;
  onEdit?: () => void;
};

export type Props = {
  itemsCnt: number;
  checkedCnt: number;
  title: string;
} & ToolbarProps;

const DefaultToolbar = ({
  title,
  cnt,
  onCreate,
}: { cnt: number; title: string } & ToolbarProps) => {
  const classes = useToolbarStyles();

  return (
    <Toolbar className={classes.root}>
      <Typography className={classes.title} variant="h6" id="tableTitle" component="div">
        {title} ({cnt})
      </Typography>
      <div style={{ display: "flex", alignItems: "center" }}>
        <Tooltip title="Filter list">
          <IconButton style={{ marginRight: 10 }} aria-label="filter list">
            <FilterListIcon />
          </IconButton>
        </Tooltip>
        <Button
          onClick={onCreate}
          color="primary"
          variant="outlined"
          style={{ lineHeight: 2 }}
          startIcon={<AddIcon />}
        >
          new
        </Button>
      </div>
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

export const TableToolbar = (props: Props) => {
  const { checkedCnt, itemsCnt, title, onCreate } = props;

  return checkedCnt > 0 ? (
    <ActiveToolbar cnt={checkedCnt} title={title} />
  ) : (
    <DefaultToolbar cnt={itemsCnt} title={title} onCreate={onCreate} />
  );
};
