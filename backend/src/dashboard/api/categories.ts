import { http } from "./http";
import { Category } from "./../../interfaces/category.interface";

export const get = async (): Promise<Category[]> => {
  return await http.get("http://localhost:8000/categories");
};

type OmitAddFields<T> = Omit<T, "id" | "createdAt" | "updatedAt">;
type OmitUpdateFields<T> = Omit<T, "id">;

export const add = async (category: OmitAddFields<Category>) => {
  return await http.post("http://localhost:8000/categories/add", category);
};

export const update = async (category: OmitUpdateFields<Category>) => {
  return await http.post("http://localhost:8000/categories/update", category);
};

export const remove = async (id: string) => {
  return await http.post("http://localhost:8000/categories/delete", { id });
};
