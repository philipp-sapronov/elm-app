import { useToolbarStyles } from "./styles";
import {
  Button,
  ButtonBase,
  IconButton,
  InputBase,
  Toolbar,
  Tooltip,
  Typography,
} from "@material-ui/core";
import FilterListIcon from "@material-ui/icons/FilterList";
import DeleteIcon from "@material-ui/icons/Delete";
import React from "react";

import AddIcon from "@material-ui/icons/Add";
import SaveIcon from "@material-ui/icons/Save";
import SearchIcon from "@material-ui/icons/Search";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";

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
      <div className={classes.titleWrapper}>
        <Typography className={classes.title} variant="h6" id="tableTitle" component="p">
          {title}
        </Typography>
        <Typography className={classes.itemsCount}>
          {cnt} {cnt === 1 ? "item" : "items"}
        </Typography>
      </div>
      <ButtonBase
        onClick={onCreate}
        color="inherit"
        classes={{ root: classes.addButton }}
        aria-label="close drawer"
      >
        <AddIcon />
      </ButtonBase>
      <div className={classes.rightPanel}>
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
        <Tooltip title="Filter list">
          <IconButton style={{ marginRight: 10 }} aria-label="filter list">
            <FilterListIcon />
          </IconButton>
        </Tooltip>
      </div>
    </Toolbar>
  );
};

const ActiveToolbar = ({ title, cnt }: { cnt: number; title: string }) => {
  const classes = useToolbarStyles();

  return (
    <Toolbar className={`${classes.root} ${classes.highlight}`}>
      <Typography
        className={classes.titleSelected}
        color="inherit"
        variant="subtitle1"
        component="div"
      >
        {cnt} selected
      </Typography>
      <Button classes={{ label: classes.buttonLabel }} color="primary" startIcon={<DeleteIcon />}>
        move to trash
      </Button>
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
