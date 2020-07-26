import React from "react";
import {
  ButtonBase,
  Checkbox,
  TableCell,
  TableHead as MuiTableHead,
  TableRow,
} from "@material-ui/core";

import { Column, Row } from "./row";

const SortIcon = ({
  state = [0, 0],
  color = "black",
  size = 18,
}: {
  state: [number, number];
  color?: string;
  size?: number;
}) => {
  const [up, down] = state;
  return (
    <svg
      width={size - 10}
      height={size}
      viewBox="0 0 34 43"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M17 0L33.4545 15.75H0.545517L17 0Z" fill={color} style={{ opacity: up ? 1 : 0.4 }} />
      <path
        d="M17 43L0.545518 27.25L33.4545 27.25L17 43Z"
        fill={color}
        style={{ opacity: down ? 1 : 0.4 }}
      />
    </svg>
  );
};

type Order = "asc" | "desc";

interface TableHeadProps<T extends Row> {
  checkedCnt: number;
  onCheck: (event: React.ChangeEvent<HTMLInputElement>, checked: boolean) => void;
  rowsCnt: number;
  columns: Array<Column<T>>;
  sortProps: SortProps<T>;
}

export type SortProps<T> = {
  orderBy: keyof T;
  order: Order;
  defaultOrder: Order;
  onSort: (property: keyof T) => void;
};

export const TableHead = <T extends Row>(props: TableHeadProps<T>) => {
  const { onCheck, sortProps, checkedCnt, rowsCnt, columns } = props;
  const { order, onSort, orderBy } = sortProps;

  const handleSort = (value: keyof T) => () => {
    onSort(value);
  };

  return (
    <MuiTableHead>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            indeterminate={checkedCnt > 0 && checkedCnt < rowsCnt}
            checked={rowsCnt > 0 && checkedCnt === rowsCnt}
            onChange={onCheck}
            inputProps={{ "aria-label": "select all desserts" }}
            color="primary"
          />
        </TableCell>
        {columns.map((column) => {
          const activeSort = column.fieldName === orderBy;
          const sortButtonState = [
            Number(activeSort && order === "asc"),
            Number(activeSort && order === "desc"),
          ] as [number, number];

          return (
            <TableCell key={column.key} align={column.align || "left"}>
              <ButtonBase
                disableRipple
                disableTouchRipple
                style={{ fontSize: 14, fontWeight: 600 }}
                onClick={handleSort(column.fieldName)}
              >
                <span style={{ paddingRight: 5 }}>
                  <SortIcon state={sortButtonState} />
                </span>
                {column.title}
              </ButtonBase>
            </TableCell>
          );
        })}
        <TableCell style={{ fontSize: 14, fontWeight: 600 }} key="actions" align={"right"}>
          <ButtonBase disableRipple disableTouchRipple style={{ fontSize: 14, fontWeight: 600 }}>
            Actions
          </ButtonBase>
        </TableCell>
      </TableRow>
    </MuiTableHead>
  );
};
