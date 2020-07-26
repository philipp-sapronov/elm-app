import React, { useState } from "react";
import { useStyles } from "./styles";
import {
  Checkbox,
  TableCell,
  TableRow as MuiTableRow,
  IconButton,
  Menu,
  MenuItem,
  Typography,
} from "@material-ui/core";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
export interface Column<T extends Row> {
  fieldName: keyof T;
  render?: (row: T) => React.ReactNode;
  title: string;
  key: string;
  align?: "left" | "right";
}

export interface Row {
  id: string;
}

const MenuCell = () => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => setAnchorEl(null);

  return (
    <TableCell align="center" padding="checkbox">
      <IconButton onClick={handleClick} style={{ width: 40, height: 40 }}>
        <MoreHorizIcon />
      </IconButton>
      <Menu
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>
          <EditIcon fontSize="small" color="action" />
          <Typography style={{ marginLeft: 10, minWidth: 80 }}>Edit</Typography>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <DeleteIcon fontSize="small" color="action" />
          <Typography style={{ marginLeft: 10, minWidth: 80 }}>Delete</Typography>
        </MenuItem>
      </Menu>
    </TableCell>
  );
};

export const TableRow = <T extends Row>({
  columns,
  row,
  labelId,
  checked,
  handleClick,
  classes,
}: {
  columns: Array<Column<T>>;
  row: T;
  labelId: string;
  checked: boolean;
  handleClick: (id: string) => (e: React.ChangeEvent<HTMLInputElement>) => void;
  classes: ReturnType<typeof useStyles>;
}) => {
  return (
    <MuiTableRow
      hover
      role="checkbox"
      aria-checked={checked}
      tabIndex={-1}
      key={row.id}
      selected={checked}
      classes={{ selected: classes.rowSelected, root: classes.rowRoot }}
    >
      <TableCell padding="checkbox">
        <Checkbox
          checked={checked}
          onChange={handleClick(row.id)}
          inputProps={{ "aria-labelledby": labelId }}
          color="primary"
        />
      </TableCell>
      {columns.map((column) => {
        return (
          <TableCell key={column.key} id={labelId} scope="row" align={column.align || "left"}>
            {column.render ? column.render(row) : row[column.fieldName]}
          </TableCell>
        );
      })}
      <MenuCell />
    </MuiTableRow>
  );
};
