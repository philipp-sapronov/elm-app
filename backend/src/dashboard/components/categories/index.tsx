import React from "react";
import { Category } from "../../containers/categories";
import { Table } from "../../../theme/table";

const rows = [
  { title: "Cupcake", status: 200, id: "10.1" },
  { title: "Cupcake", status: 200, id: "10.21" },
  { title: "Cupcake", status: 200, id: "10.13" },
];

const headCells = [
  { id: "title", numeric: false, label: "Title" },
  { id: "status", numeric: true, label: "Status" },
];

export const Categories = ({ data }: { data: Category[] }) => {
  return <Table rows={rows} headCells={headCells} />;
};
