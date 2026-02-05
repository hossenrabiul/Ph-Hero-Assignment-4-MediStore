import z, { number } from "zod";

export interface Product {
  id : string,
  name: string;
  description: string;
  stock: number;
  price: number;
  categoryId: string;
  image : string,
  bedge : string
}
export interface Pagination {
  page?: number;
  limit?: number;
  sortBy?: string;
  minPrice ?: number,
  maxPrice ?: number,
  category : string,
}

export interface Order {
  quantity: number;
  medicine: {
    price: number;
  };
}

export interface categories {
  id : string
  name : string,
  description : string,
}
export const createProductSchema = z.object({
  name: z.string().min(1, "Name is required"),
  stock: z.number().int().nonnegative("Stock must be more than 1"),
  price: z.number("Price is reqired"),
  categoryId: z.string("Category is required"),
});
