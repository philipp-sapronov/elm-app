import { useState } from "react";

export enum Order {
  asc = "asc",
  desc = "desc",
}

const initialSort = <T extends object>() => ({
  order: Order.asc,
  orderBy: "title" as keyof T,
});

export const useSort = <T extends object>() => {
  const [sort, setSort] = useState(initialSort<T>());

  const handleSort = (fieldName: keyof T) => {
    setSort(({ order, orderBy }) => {
      if (orderBy !== fieldName)
        return {
          orderBy: fieldName,
          order: Order.asc,
        };

      if (order === Order.desc) return initialSort<T>();

      return {
        orderBy: fieldName,
        order: Order.desc,
      };
    });
  };

  return {
    defaultOrder: "desc" as const,
    onSort: handleSort,
    ...sort,
  };
};
