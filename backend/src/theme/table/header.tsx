import React from "react";

import {
  Checkbox,
  TableCell,
  TableHead as MuiTableHead,
  TableRow,
  TableSortLabel,
} from "@material-ui/core";
import { useStyles } from "./styles";

type Order = "asc" | "desc";

interface TableHeadProps {
  checkedCnt: number;
  onSort: (event: React.MouseEvent<unknown>, property: keyof any) => void;
  onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>, checked: boolean) => void;
  order: Order;
  orderBy: string;
  rowsCnt: number;
  cells: HeadCell[];
}

export interface HeadCell {
  id: string;
  label: string;
  numeric: boolean;
}

export const TableHead = (props: TableHeadProps) => {
  const classes = useStyles();

  const { onSelectAllClick, order, orderBy, checkedCnt, rowsCnt, onSort, cells } = props;

  const createSortHandler = (property: keyof any) => (event: React.MouseEvent<unknown>) => {
    onSort(event, property);
  };

  return (
    <MuiTableHead>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            indeterminate={checkedCnt > 0 && checkedCnt < rowsCnt}
            checked={rowsCnt > 0 && checkedCnt === rowsCnt}
            onChange={onSelectAllClick}
            inputProps={{ "aria-label": "select all desserts" }}
            color="primary"
          />
        </TableCell>
        {cells.map((cell) => (
          <TableCell
            key={cell.id}
            align={cell.numeric ? "right" : "left"}
            padding="default"
            sortDirection={orderBy === cell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === cell.id}
              direction={orderBy === cell.id ? order : "asc"}
              onClick={createSortHandler(cell.id)}
            >
              {cell.label}
              {orderBy === cell.id ? (
                <span className={classes.visuallyHidden}>
                  {order === "desc" ? "sorted descending" : "sorted ascending"}
                </span>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </MuiTableHead>
  );
};
