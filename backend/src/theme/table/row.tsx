import React from "react";
import { useStyles } from "./styles";
import { Checkbox, TableCell, TableRow as MuiTableRow } from "@material-ui/core";
import { ActionColumn } from "./actions";
import ThumbUpIcon from "@material-ui/icons/ThumbUpOutlined";

export interface Column<T extends Row> {
  fieldName: keyof T;
  render?: (row: T) => React.ReactNode;
  title: string;
  key: string;
  align?: "left" | "center" | "right";
}

export type RowAction = { icon: typeof ThumbUpIcon; label: string; onClick: () => void };
export type GetRowActions<T> = (row: T) => Array<RowAction>;

export interface Row {
  _id: string;
}

export const TableRow = <T extends Row>({
  columns,
  row,
  labelId,
  checked,
  handleClick,
  classes,
  getActions,
}: {
  columns: Array<Column<T>>;
  row: T;
  labelId: string;
  checked: boolean;
  handleClick: (id: string) => (e: React.ChangeEvent<HTMLInputElement>) => void;
  getActions?: GetRowActions<T>;
  classes: ReturnType<typeof useStyles>;
}) => {
  return (
    <MuiTableRow
      hover
      role="checkbox"
      aria-checked={checked}
      tabIndex={-1}
      key={row._id}
      selected={checked}
      classes={{ selected: classes.rowSelected, root: classes.rowRoot }}
    >
      <TableCell padding="checkbox">
        <Checkbox
          checked={checked}
          onChange={handleClick(row._id)}
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
      {getActions !== undefined ? (
        <TableCell key="actions" id={labelId} scope="row" align="center">
          <ActionColumn>{getActions(row) as RowAction[]}</ActionColumn>
        </TableCell>
      ) : null}
    </MuiTableRow>
  );
};
