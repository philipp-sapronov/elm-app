import { http } from "./http";
import { Tag } from "./../../interfaces/tag.interface";

export const get = async (): Promise<Tag[]> => {
  return await http.get("http://localhost:8000/tags");
};

type OmitAddFields<T> = Omit<T, "id" | "createdAt" | "updatedAt">;
type OmitUpdateFields<T> = Omit<T, "id">;

export const add = async (tag: OmitAddFields<Tag>) => {
  return await http.post("http://localhost:8000/tags/add", tag);
};

export const update = async (tag: OmitUpdateFields<Tag>) => {
  return await http.post("http://localhost:8000/tags/update", tag);
};

export const remove = async (id: string) => {
  return await http.post("http://localhost:8000/tags/delete", { id });
};
