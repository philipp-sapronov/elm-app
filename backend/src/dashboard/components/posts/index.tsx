import React, { useState } from "react";
import { Table } from "../../../theme/table";
import { useSort } from "../../../theme/table/useSort";
import { usePagination } from "../../../theme/table/usePagination";
import { Article } from "../../../interfaces/post.interface";
import { StatusLabel } from "../../../enums/status.enum";
import moment from "moment";
import { PageDrawer } from "../../../layout/private/pageDrawer";
import { Form } from "./form";
import CommentsIcon from "@material-ui/icons/ModeCommentOutlined";
import ThumbUpIcon from '@material-ui/icons/ThumbUpOutlined';
// todo add rating start or likes count, comments count
// todo add published date instead of updated
// todo add preview button to form
// todo add post date input
// todo add plus button to header
// todo add description to tag/category
// todo add posts count to category
// ! todo Excerpt instead of preview
// todo allow comments/likes
// todo add undo btn
// todo visibility public/private
// todo add comments page

// todo signup signin
// todo move search to current page table toolbar
const columns = [
  { fieldName: "title" as keyof Article, key: "title", title: "Title" },
  {
    fieldName: "slug" as keyof Article,
    key: "url",
    title: "Slug",
  },
  //

  {
    fieldName: "slug" as keyof Article,
    key: "url",
    title: "Likes",
    render: () => (
      <div style={{ display: "inline-flex", alignItems: "center" }}>
        <ThumbUpIcon />
        <span style={{ marginLeft: 5 }}>0</span>
      </div>
    ),
  },
  {
    fieldName: "slug" as keyof Article,
    key: "url",
    title: "Feedback",
    render: () => (
      <div style={{ display: "inline-flex", alignItems: "center" }}>
        <CommentsIcon />
        <span style={{ marginLeft: 5 }}>0</span>
      </div>
    ),
  },

  //
  {
    fieldName: "status" as keyof Article,
    key: "status",
    title: "Status",
    render: (row: Article) => (
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
    fieldName: "postedAt" as keyof Article,
    key: "date",
    title: "Published",
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
        title="Posts"
        columns={columns}
        sortProps={sortProps}
        paginationProps={paginationProps}
        toolbarProps={{
          onCreate: handleOpen,
          onEdit: handleOpen,
        }}
      />
      <PageDrawer open={open}>
        <Form onClose={handleClose} title="Update Post" />
      </PageDrawer>
    </>
  );
};
