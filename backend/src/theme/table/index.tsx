import React from "react";
import { Table as MuiTable, TableBody, TableContainer, Paper } from "@material-ui/core";
import { useStyles } from "./styles";
import { TableToolbar, ToolbarProps } from "./toolbar";
import { SortProps, TableHead } from "./header";
import { useTable } from "./useTable";
import { Row, Column, TableRow } from "./row";
import { PaginationProps, TablePagination } from "./pagination";

export function Table<T extends Row>(props: {
  rows: T[];
  columns: Array<Column<T>>;
  paginationProps: PaginationProps;
  sortProps: SortProps<T>;
  toolbarProps: ToolbarProps;
}) {
  const classes = useStyles();

  const { paginationProps, sortProps, rows, columns, toolbarProps } = props;

  const { checkedList, isChecked, handleClick, handleCheckAll } = useTable({ rows });

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <TableToolbar
          checkedCnt={checkedList.length}
          itemsCnt={rows.length}
          title={"Articles"}
          {...toolbarProps}
        />
        <TableContainer>
          <MuiTable
            className={classes.table}
            aria-labelledby="tableTitle"
            size="medium"
            aria-label="enhanced table"
          >
            <TableHead
              checkedCnt={checkedList.length}
              columns={columns}
              onCheck={handleCheckAll}
              rowsCnt={rows.length}
              sortProps={sortProps}
            />
            <TableBody>
              {rows.map((row, idx) => {
                const checked = isChecked(row.id);
                const labelId = `table-checkbox-${idx}`;

                return (
                  <TableRow<T>
                    key={row.id}
                    classes={classes}
                    row={row}
                    columns={columns}
                    labelId={labelId}
                    checked={checked}
                    handleClick={handleClick}
                  />
                );
              })}
            </TableBody>
          </MuiTable>
        </TableContainer>
        <TablePagination {...paginationProps} />
      </Paper>
    </div>
  );
}
