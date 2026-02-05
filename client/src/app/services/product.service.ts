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

      const products = await fetch(url, {
        headers: {
          cookie: storeCookie.toString(),
        },
      });

      const result = await products.json();
      if (!result.success) {
        return { data: null };
      }
      return result.data;
    } catch (error: any) {
      return error.message;
    }
  },

  getProductById: async function (id: string) {
    try {
      const cookie = await cookies();
      const backend_api = process.env.BACKEND_API;
      const res = await fetch(`${backend_api}/api/v1/product/${id}`, {
        headers: {
          cookie: cookie.toString(),
        },
      });
      const data = await res.json();
      return data;
    } catch (error: any) {
      return {
        data: null,
        error: { message: "something went wrong", err: error?.message },
      };
    }
  },
  getCategories: async function () {
    try {
      const backend_api = process.env.BACKEND_API;
      const categories = await fetch(`${backend_api}/api/v1/category`);
      const data = await categories.json();
      if (data.success) {
        return data.data;
      }
      return { data: null };
      // console.log(await categories.json());
    } catch (error: any) {
      return error.message;
    }
  },

  addProductToCart: async function (id: string) {
    // console.log(id);
    try {
      const cookie = await cookies();
      const backend_url = process.env.BACKEND_API;

      const result = await fetch(`${backend_url}/api/v1/product/cart/${id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          cookie: cookie.toString(),
        },
      });
      const data = await result.json();
      return data;
    } catch (error: any) {
      console.log("Error : ", error.message);
    }
  },

  getCart: async function () {
    try {
      const cookie = await cookies();
 
      const backend_url = process.env.BACKEND_API;
 
      const result = await fetch(`${backend_url}/api/v1/cart`, {
        headers: {
          cookie: cookie.toString(),
        },
      });
      const data = await result.json();
      return data
    } catch (error: any) {
      return error.message;
    }
  },
};
