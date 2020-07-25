import React, { useState } from "react";
import moment from "moment";

import { Table } from "../../../theme/table";
import { useSort } from "../../../theme/table/useSort";
import { usePagination } from "../../../theme/table/usePagination";
import { Category } from "../../../interfaces/category.interface";
import { StatusLabel } from "../../../enums/status.enum";

const columns = [
  {
    fieldName: "title" as keyof Category,
    key: "title",
    title: "Title",
  },
  {
    align: "right" as const,
    fieldName: "status" as keyof Category,
    key: "status",
    render: (row: Category) => StatusLabel[row.status],
    title: "Status",
  },
  {
    align: "right" as const,
    fieldName: "updatedAt" as keyof Category,
    key: "updated",
    render: (row: Category) => moment(row.updatedAt).format("MMMM, DD YYYY"),
    title: "Updated",
  },
];

export const Categories = ({ data }: { data: Category[] }) => {
  const sortProps = useSort<Category>();
  const paginationProps = usePagination({ count: data.length });
  const [open, setOpen] = useState(false);

  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);
  return (
    <Table
      rows={data}
      columns={columns}
      sortProps={sortProps}
      toolbarProps={{ onCreate: handleOpen, onEdit: handleOpen }}
      paginationProps={paginationProps}
    />
  );
};