import { Article } from "./../../interfaces/post.interface";
import { http } from "./http";

export const get = async (): Promise<Article[]> => {
  return await http.get("http://localhost:8000/posts");
};

type OmitAddFields<T> = Omit<T, "id" | "createdAt" | "updatedAt">;
type OmitUpdateFields<T> = Omit<T, "id">;

export const add = async (article: OmitAddFields<Article>) => {
  return await http.post("http://localhost:8000/posts/add", article);
};

export const update = async (article: OmitUpdateFields<Article>) => {
  return await http.post("http://localhost:8000/posts/update", article);
};

export const remove = async (id: string) => {
  return await http.post("http://localhost:8000/posts/delete", { id });
};
