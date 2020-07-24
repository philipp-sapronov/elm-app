import { useState, ChangeEvent, MouseEvent } from "react";
import { compose } from "redux";

const equal = <A extends unknown>(a: A) => <B extends unknown>(b: B) => a === b;
const not = (a: boolean) => !a;

export const useTable = ({ rows }: { rows: any[] }) => {
  const [checkedList, setCheckedList] = useState<string[]>([]);

  const isChecked = (id: string) => checkedList.indexOf(id) !== -1;

  const handleCheckAll = (event: ChangeEvent<HTMLInputElement>) => {
    return !event.target.checked ? setCheckedList([]) : setCheckedList(rows.map((row) => row.id));
  };

  const handleClick = (id: string) => (_: MouseEvent<unknown>) => {
    setCheckedList((prevList) => {
      return prevList.includes(id) ? prevList.filter(compose(not, equal(id))) : [...prevList, id];
    });
  };

  return {
    isChecked,
    checkedList,
    handleClick,
    handleCheckAll,
  };
};
