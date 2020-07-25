import React, { useState } from "react";
import { Table } from "../../../theme/table";
import { useSort } from "../../../theme/table/useSort";
import { usePagination } from "../../../theme/table/usePagination";
import { Article } from "../../../interfaces/post.interface";
import { StatusLabel } from "../../../enums/status.enum";
import moment from "moment";
import { PageDrawer } from "../../../layout/private/pageDrawer";
import { Form } from "./form";

const columns = [
  { fieldName: "title" as keyof Article, key: "title", title: "Title" },
  {
    fieldName: "slug" as keyof Article,
    align: "right" as const,
    key: "url",
    title: "Slug",
  },
  {
    fieldName: "status" as keyof Article,
    align: "right" as const,
    key: "status",
    title: "Status",
    render: (row: Article) => StatusLabel[row.status],
  },
  {
    fieldName: "updatedAt" as keyof Article,
    align: "right" as const,
    key: "date",
    title: "Updated",
    render: (row: Article) => moment(row.updatedAt).format("MMMM, DD YYYY"),
  },
];

export const Categories = ({ data }: { data: Article[] }) => {
  const [open, setOpen] = useState(false);
  const sortProps = useSort<Article>();
  const paginationProps = usePagination({ count: data.length });

  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);
  return (
    <>
      <Table
        rows={data}
        columns={columns}
        sortProps={sortProps}
        paginationProps={paginationProps}
        toolbarProps={{
          onCreate: handleOpen,
          onEdit: handleOpen,
        }}
      />
      <PageDrawer open={open}>
        <Form onClose={handleClose} />
      </PageDrawer>
    </>
  );
};
