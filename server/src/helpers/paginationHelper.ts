import type { Pagination } from "../types/product";

export const paginationHelpers = (options: Pagination) => {
  const limit: number = Number(options.limit) || 5;
  const page: number = Number(options.page) || 1;
  const sortBy : string =  options.sortBy || "category"
  const minPrice : number = Number(options.minPrice) || 0;
  const maxPrice : number = Number(options.maxPrice) || 0;

  const skip = limit * (page - 1);
  const take = limit;

  return { skip, take, sortBy, minPrice, maxPrice };
};
