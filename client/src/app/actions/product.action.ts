"use server"
import { ProductService } from "../services/product.service";

export const addProduct = async(id : string) => {
    const result = await ProductService.addProductToCart(id);
    return result
};


