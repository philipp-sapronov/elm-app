import { useState } from "react";

const rowsPerPageOptions = [10, 20];
const rowsPerPage = 10;

const initialPagination = {
  page: 0,
  rowsPerPage,
};

export const usePagination = ({ count }: { count: number }) => {
  const [pagination, setPagination] = useState(initialPagination);

  const handleChangePage = (page: number) => {
    setPagination((prev) => ({ ...prev, page }));
  };

  const handleChangeRowsPerPage = (rowsPerPage: number) => {
    setPagination((prev) => ({ ...prev, rowsPerPage }));
  };

  return {
    count,
    rowsPerPageOptions,
    onChangePage: handleChangePage,
    onChangeRowsPerPage: handleChangeRowsPerPage,
    ...pagination,
  };
};
