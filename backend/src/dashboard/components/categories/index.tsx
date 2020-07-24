import React from "react";
import { Category } from "../../containers/categories";
import { Table } from "../../../theme/table";

type Row = {
  title: string;
  status: number;
  id: string;
  amount: string;
};

const rows = [
  { title: "Cupcake", status: 200, id: "10.1", amount: "123" },
  { title: "Cupcake", status: 200, id: "10.21", amount: "123" },
  { title: "Cupcake", status: 200, id: "10.13", amount: "123" },
];

const headCells = [
  { id: "title", numeric: false, label: "Title" },
  { id: "status", numeric: true, label: "Status" },
];

const columns = [
  { fieldName: "amount" as keyof Row, numeric: true },
  { fieldName: "status" as keyof Row },
  { fieldName: "title" as keyof Row, render: (row: any) => <div>{row.title}</div> },
];

export const Categories = ({ data }: { data: Category[] }) => {
  return <Table rows={rows} headCells={headCells} columns={columns} />;
};
