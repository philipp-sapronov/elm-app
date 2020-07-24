import React from "react";
import { useStyles } from "./styles";
import { Checkbox, TableCell, TableRow as MuiTableRow } from "@material-ui/core";

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
  handleClick: (id: string) => (e: React.MouseEvent) => void;
  classes: ReturnType<typeof useStyles>;
}) => {
  return (
    <MuiTableRow
      hover
      onClick={handleClick(row.id)}
      role="checkbox"
      aria-checked={checked}
      tabIndex={-1}
      key={row.id}
      selected={checked}
      classes={{ selected: classes.rowSelected, root: classes.rowRoot }}
    >
      <TableCell padding="checkbox">
        <Checkbox checked={checked} inputProps={{ "aria-labelledby": labelId }} color="primary" />
      </TableCell>
      {columns.map((column) => {
        return (
          <TableCell id={labelId} scope="row" align={column.align || "left"}>
            {column.render ? column.render(row) : row[column.fieldName]}
          </TableCell>
        );
      })}
    </MuiTableRow>
  );
};
