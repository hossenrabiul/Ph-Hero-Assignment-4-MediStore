import type { Pagination } from "../types/product";

export const paginationHelpers = (options: Pagination) => {
  const limit: number = Number(options.limit) || 5;
  const page: number = Number(options.page) || 1;
  const sortBy : string =  options.sortBy || "category"

  const skip = limit * (page - 1);
  const take = limit;

  return { skip, take, sortBy };
};
