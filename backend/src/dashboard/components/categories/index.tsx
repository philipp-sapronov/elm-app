import React from "react";
import moment from "moment";

import { useHistory } from "react-router-dom";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";

import { CategoryForm } from "../../containers/categoryForm";
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

  const { push } = useHistory();

  const handleClickAdd = () => push("/categories/add");
  const handleClickUpdate = () => push(`/categories/slug`);

  const getRowActions = (row: Category) => {
    return [
      { onClick: () => push(`categories/${row.title}`), icon: EditIcon, label: "Edit" },
      { onClick: () => console.log("delete", row.title), icon: DeleteIcon, label: "Delete" },
    ];
  };
  return (
    <>
      <Table
        rows={data}
        title="Categories"
        columns={columns}
        sortProps={sortProps}
        getRowActions={getRowActions}
        toolbarProps={{ onCreate: handleClickAdd, onEdit: handleClickUpdate }}
        paginationProps={paginationProps}
      />
      <CategoryForm />
    </>
  );
};
