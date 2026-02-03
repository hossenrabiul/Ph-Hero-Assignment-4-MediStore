import { cookies } from "next/headers";
import { Pagination } from "../types/product";

export const ProductService = {
  getProducts: async function (params?: Pagination) {
    try {
      const storeCookie = await cookies();
      const backend_api = process.env.BACKEND_API;
      const url = new URL(`${backend_api}/api/v1/product`);
      if (params) {
        Object.entries(params).forEach(([key, value]) => {
          if (value != undefined && value != null) {
            url.searchParams.set(key, value);
          }
        });
      }
      console.log(url)
      const products = await fetch(url, {
        headers: {
          cookie: storeCookie.toString(),
        },
      });

      const { data } = await products.json();
      return data;
    } catch (error: any) {
      return error.message;
    }
  },
};
