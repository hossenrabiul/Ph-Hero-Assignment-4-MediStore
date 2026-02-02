import z, { number } from "zod";

export interface Product {
  name: string;
  description?: string;
  stock: number;
  price: number;
  categoryId: string;
}
export interface Pagination {
  page?: number;
  limit?: number;
  sortBy?: string;
}

export interface Order {
  quantity: number;
  medicine: {
    price: number;
  };
}
export const createProductSchema = z.object({
  name: z.string().min(1, "Name is required"),
  stock: z.number().int().nonnegative("Stock must be more than 1"),
  price: z.number("Price is reqired"),
  categoryId: z.string("Category is required"),
});
