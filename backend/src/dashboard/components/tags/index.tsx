import React from "react";
import moment from "moment";
import { useHistory } from "react-router-dom";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import { Table } from "../../../theme/table";
import { useSort } from "../../../theme/table/useSort";
import { usePagination } from "../../../theme/table/usePagination";
import { StatusLabel } from "../../../enums/status.enum";
import { Tag } from "../../../interfaces/tag.interface";
import { TagTypeLabel } from "../../../enums/tagType.enum";
import { Category } from "../../../interfaces/category.interface";
import { TagForm } from "../../containers/tagsForm";
import { useDispatch } from "react-redux";
import * as thunks from "../../thunks/tags";

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

export const Tags = ({ data }: { data: Tag[]; loading: boolean; error: string | null }) => {
  const sortProps = useSort<Tag>();
  // todo: move dispatch to container and pass via props
  const dispatch = useDispatch();

  const paginationProps = usePagination({ count: data.length });
  const { push } = useHistory();

  const handleClickAdd = () => push("/tags/add");
  const handleClickUpdate = () => push(`/tags/slug`);

  const getRowActions = (row: Tag) => {
    return [
      { onClick: () => push(`tags/${row.title}`), icon: EditIcon, label: "Edit" },
      { onClick: () => dispatch(thunks.remove(row._id)), icon: DeleteIcon, label: "Delete" },
    ];
  };

  return (
    <>
      <Table
        rows={data}
        title="Tags"
        columns={columns}
        toolbarProps={{ onCreate: handleClickAdd, onEdit: handleClickUpdate }}
        sortProps={sortProps}
        paginationProps={paginationProps}
        getRowActions={getRowActions}
      />
      <TagForm />
    </>
  );
};
