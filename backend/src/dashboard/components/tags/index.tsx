import React, { useState } from "react";
import moment from "moment";

import { Table } from "../../../theme/table";
import { useSort } from "../../../theme/table/useSort";
import { usePagination } from "../../../theme/table/usePagination";
import { StatusLabel } from "../../../enums/status.enum";
import { Tag } from "../../../interfaces/tag.interface";
import { TagTypeLabel } from "../../../enums/tagType.enum";

const columns = [
  {
    fieldName: "title" as keyof Tag,
    key: "title",
    title: "Title",
  },
  {
    align: "right" as const,
    fieldName: "type" as keyof Tag,
    key: "type",
    render: (row: Tag) => TagTypeLabel[row.type],
    title: "Type",
  },
  {
    align: "right" as const,
    fieldName: "status" as keyof Tag,
    key: "status",
    render: (row: Tag) => StatusLabel[row.status],
    title: "Status",
  },
  {
    align: "right" as const,
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
    <Table
      rows={data}
      columns={columns}
      toolbarProps={{ onCreate: handleOpen, onEdit: handleOpen }}
      sortProps={sortProps}
      paginationProps={paginationProps}
    />
  );
};
