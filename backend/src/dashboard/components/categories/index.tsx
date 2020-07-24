import React, { useState } from "react";
import { Category } from "../../containers/categories";
import { Table } from "../../../theme/table";

type Row = {
  amount: string;
  date: string;
  id: string;
  status: number;
  title: string;
  url: string;
};

const rowsPerPageOptions = [10, 20];
const rowsPerPage = 10;

const rows = [
  { title: "First", status: 200, id: "111", amount: 1, url: "/link", date: "20 august" },
  { title: "Second", status: 200, id: "222", amount: 22, url: "/link", date: "20 august" },
  { title: "Third", status: 200, id: "333", amount: 14, url: "/link", date: "20 august" },
  { title: "Fourth", status: 200, id: "444", amount: 0, url: "/link", date: "20 august" },
];

const columns = [
  { fieldName: "title" as keyof Row, key: "title", title: "Title" },
  { fieldName: "amount" as keyof Row, align: "right" as const, key: "amount", title: "Amount" },
  { fieldName: "status" as keyof Row, align: "right" as const, key: "status", title: "Status" },
  { fieldName: "date" as keyof Row, align: "right" as const, key: "date", title: "Updated" },
  {
    fieldName: "url" as keyof Row,
    align: "right" as const,
    render: (row: any) => (
      <div>
        {"</>"} {row.title}
      </div>
    ),
    key: "url",
    title: "Link",
  },
];

export enum Order {
  asc = "asc",
  desc = "desc",
}

const initialSort = {
  order: Order.asc,
  orderBy: "title" as keyof Row,
};

const initialPagination = {
  page: 0,
  rowsPerPage,
};

export const Categories = ({ data }: { data: Category[] }) => {
  const [pagination, setPagination] = useState(initialPagination);
  const [sort, setSort] = useState(initialSort);

  const handleSort = (fieldName: keyof Row) => {
    setSort(({ order, orderBy }) => {
      if (orderBy !== fieldName)
        return {
          orderBy: fieldName,
          order: Order.asc,
        };

      if (order === Order.desc) return initialSort;

      return {
        orderBy: fieldName,
        order: Order.desc,
      };
    });
  };

  const handleChangePage = (page: number) => {
    setPagination((prev) => ({ ...prev, page }));
  };

  const handleChangeRowsPerPage = (rowsPerPage: number) => {
    setPagination((prev) => ({ ...prev, rowsPerPage }));
  };

  return (
    <Table
      rows={rows}
      columns={columns}
      sortProps={{
        defaultOrder: "desc" as const,
        onSort: handleSort,
        ...sort,
      }}
      paginationProps={{
        count: rows.length,
        rowsPerPageOptions,
        onChangePage: handleChangePage,
        onChangeRowsPerPage: handleChangeRowsPerPage,
        ...pagination,
      }}
    />
  );
};
