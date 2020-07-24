import { useState, ChangeEvent, MouseEvent } from "react";

export const useTable = ({ rows }: { rows: any[] }) => {
  const [checkedList, setCheckedList] = useState<string[]>([]);

  const handleSort = (event: MouseEvent<unknown>, property: keyof any) => {
    //example arguments
  };

  const isChecked = (id: string) => checkedList.indexOf(id) !== -1;

  const handleSelectAll = (event: ChangeEvent<HTMLInputElement>) => {
    if (!event.target.checked) return setCheckedList([]);
    return setCheckedList(rows.map((n) => n.id));
  };

  const handleClick = (id: string) => (event: MouseEvent<unknown>) => {
    // setSelected();
  };

  const handleChangePage = (event: unknown, newPage: number) => {
    // example
  };

  const handleChangeRowsPerPage = (event: ChangeEvent<HTMLInputElement>) => {
    // example
  };

  return {
    isChecked,
    checkedList,
    handleSort,
    handleClick,
    handleSelectAll,
    handleChangePage,
    handleChangeRowsPerPage,
  };
};
