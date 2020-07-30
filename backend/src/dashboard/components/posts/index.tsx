import React from "react";
import moment from "moment";
import { useHistory } from "react-router-dom";
import CommentsIcon from "@material-ui/icons/ModeCommentOutlined";
import ThumbUpIcon from "@material-ui/icons/ThumbUpOutlined";

import { Table } from "../../../theme/table";
import { useSort } from "../../../theme/table/useSort";
import { usePagination } from "../../../theme/table/usePagination";
import { Article } from "../../../interfaces/post.interface";
import { StatusLabel } from "../../../enums/status.enum";
import { PostsForm } from "../../containers/postsForm";

import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import VisibilityIcon from "@material-ui/icons/Visibility";

const columns = [
  { fieldName: "title" as keyof Article, key: "title", title: "Title" },
  {
    fieldName: "slug" as keyof Article,
    key: "url",
    title: "Slug",
  },
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
  const sortProps = useSort<Article>();
  const { push } = useHistory();

  const paginationProps = usePagination({ count: data.length });

  const handleClickAdd = () => push("/posts/add");
  const handleClickUpdate = () => push(`/posts/slug`);

  const getRowActions = (row: Article) => [
    { onClick: () => push(`posts/${row.slug}`), icon: EditIcon, label: "Edit" },
    { onClick: () => console.log("delete", row.slug), icon: DeleteIcon, label: "Delete" },
    {
      onClick: () => window.open(`https://www.google.com/${row.slug}`),
      icon: VisibilityIcon,
      label: "Visit",
    },
  ];

  return (
    <>
      <Table
        rows={data}
        title="Posts"
        columns={columns}
        sortProps={sortProps}
        paginationProps={paginationProps}
        getRowActions={getRowActions}
        toolbarProps={{
          onCreate: handleClickAdd,
          onEdit: handleClickUpdate,
        }}
      />
      <PostsForm />
    </>
  );
};
