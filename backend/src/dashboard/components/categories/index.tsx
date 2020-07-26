import React, { useState } from "react";
import moment from "moment";

import { Table } from "../../../theme/table";
import { useSort } from "../../../theme/table/useSort";
import { usePagination } from "../../../theme/table/usePagination";
import { Category } from "../../../interfaces/category.interface";
import { StatusLabel } from "../../../enums/status.enum";
import { Article } from "../../../interfaces/post.interface";

const columns = [
  {
    fieldName: "title" as keyof Category,
    key: "title",
    title: "Title",
  },
  {
    fieldName: "description" as keyof Category,
    key: "description",
    title: "Description",
  },
  {
    fieldName: "status" as keyof Category,
    key: "status",
    title: "Status",
    render: (row: Category) => (
      <div style={{ display: "inline-flex", alignItems: "center" }}>
        <div
          style={{
            width: 8,
            height: 8,
            backgroundColor: "green",
            marginRight: 8,
            borderRadius: 8,
          }}
        />
        <span>{StatusLabel[row.status]}</span>
      </div>
    ),
  },
  {
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
      title="Categories"
      columns={columns}
      sortProps={sortProps}
      toolbarProps={{ onCreate: handleOpen, onEdit: handleOpen }}
      paginationProps={paginationProps}
    />
  );
};
