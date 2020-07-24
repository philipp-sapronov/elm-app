import React from "react";

import {
  Checkbox,
  TableCell,
  TableHead as MuiTableHead,
  TableRow,
  TableSortLabel,
} from "@material-ui/core";
import { useStyles } from "./styles";
import { Column, Row } from "./row";

type Order = "asc" | "desc";

interface TableHeadProps<T extends Row> {
  checkedCnt: number;
  onSort: (event: React.MouseEvent<unknown>, property: keyof any) => void;
  onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>, checked: boolean) => void;
  order: Order;
  orderBy: string;
  rowsCnt: number;
  columns: Array<Column<T>>;
}

export const TableHead = <T extends Row>(props: TableHeadProps<T>) => {
  const classes = useStyles();

  const { onSelectAllClick, order, orderBy, checkedCnt, rowsCnt, onSort, columns } = props;

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
        {columns.map((column) => (
          <TableCell
            key={column.key}
            align={column.align || "left"}
            padding="default"
            sortDirection={orderBy === column.fieldName ? order : false}
          >
            <TableSortLabel
              active={orderBy === column.fieldName}
              direction={orderBy === column.fieldName ? order : "asc"}
              onClick={createSortHandler(column.fieldName)}
            >
              {column.title}
              {orderBy === column.fieldName ? (
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
