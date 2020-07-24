import { TablePagination as MuiTablePagination } from "@material-ui/core";
import React from "react";

export type PaginationProps = {
  count: number;
  onChangePage: (value: number) => void;
  onChangeRowsPerPage: (value: number) => void;
  rowsPerPageOptions: number[];
  rowsPerPage: number;
  page: number;
};

export const TablePagination = (props: PaginationProps) => {
  const { onChangePage, onChangeRowsPerPage, rowsPerPageOptions, rowsPerPage, count, page } = props;
  const handleChangePage = (_: unknown, newPage: number) => {
    onChangePage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChangeRowsPerPage(parseInt(event.target.value, 10));
  };

  return (
    <MuiTablePagination
      rowsPerPageOptions={rowsPerPageOptions}
      component="div"
      count={count}
      rowsPerPage={rowsPerPage}
      page={page}
      onChangePage={handleChangePage}
      onChangeRowsPerPage={handleChangeRowsPerPage}
    />
  );
};
