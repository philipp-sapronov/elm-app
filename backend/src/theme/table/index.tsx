import React from "react";
import {
  Table as MuiTable,
  TableBody,
  TableContainer,
  TablePagination,
  Paper,
} from "@material-ui/core";
import { useStyles } from "./styles";
import { TableToolbar } from "./toolbar";
import { TableHead } from "./header";
import { useTable } from "./useTable";
import { Row, Column, TableRow } from "./row";

export function Table<T extends Row>({ rows, columns }: { rows: T[]; columns: Array<Column<T>> }) {
  const classes = useStyles();

  const {
    checkedList,
    isChecked,
    handleSort,
    handleClick,
    handleSelectAll,
    handleChangePage,
    handleChangeRowsPerPage,
  } = useTable({ rows });

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <TableToolbar checkedCnt={checkedList.length} itemsCnt={rows.length} title={"Articles"} />
        <TableContainer>
          <MuiTable
            className={classes.table}
            aria-labelledby="tableTitle"
            size="medium"
            aria-label="enhanced table"
          >
            <TableHead
              checkedCnt={checkedList.length}
              order={"desc"}
              orderBy={"name"}
              onSelectAllClick={handleSelectAll}
              onSort={handleSort}
              rowsCnt={rows.length}
              columns={columns}
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
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rows.length}
          rowsPerPage={10}
          page={1}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </Paper>
    </div>
  );
}
