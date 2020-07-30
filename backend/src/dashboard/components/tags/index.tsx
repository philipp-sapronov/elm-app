import React, { useState } from "react";
import moment from "moment";

import { Table } from "../../../theme/table";
import { useSort } from "../../../theme/table/useSort";
import { usePagination } from "../../../theme/table/usePagination";
import { StatusLabel } from "../../../enums/status.enum";
import { Tag } from "../../../interfaces/tag.interface";
import { TagTypeLabel } from "../../../enums/tagType.enum";
import { Category } from "../../../interfaces/category.interface";
import { PageDrawer } from "../../../layout/private/pageDrawer";
import { Form } from "./form";

const columns = [
  {
    fieldName: "title" as keyof Tag,
    key: "title",
    title: "Title",
  },
  {
    fieldName: "description" as keyof Category,
    key: "description",
    title: "Description",
  },
  {
    fieldName: "type" as keyof Tag,
    key: "type",
    render: (row: Tag) => TagTypeLabel[row.type],
    title: "Type",
  },
  {
    fieldName: "status" as keyof Tag,
    key: "status",
    title: "Status",
    render: (row: Tag) => (
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
    fieldName: "updatedAt" as keyof Tag,
    key: "updated",
    render: (row: Tag) => moment(row.updatedAt).format("MMMM, DD YYYY"),
    title: "Updated",
  },
];

export const Tags = ({ data }: { data: Tag[] }) => {
  const sortProps = useSort<Tag>();
  const paginationProps = usePagination({ count: data.length });

  const [open, setOpen] = useState(false);

  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);

  return (
    <>
      <Table
        rows={data}
        title="Tags"
        columns={columns}
        toolbarProps={{ onCreate: handleOpen, onEdit: handleOpen }}
        sortProps={sortProps}
        paginationProps={paginationProps}
      />
      <PageDrawer open={open}>
        <Form onClose={handleClose} title="Update Tag" />
      </PageDrawer>
    </>
  );
};
