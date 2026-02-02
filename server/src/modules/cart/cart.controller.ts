import type { Request, Response } from "express";
import { cartServices } from "./cart.service";

const addToCart = async (req: Request, res: Response) => {
  try {
    const customerId = req?.user?.id;
    const medicineId = req.params.id;

    const result = await cartServices.addToCart(
      customerId as string,
      medicineId as string,
    );

    res.status(203).json({
      success: true,
      message: "Product added to cart",
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: "Failed to add Product !",
      err: error.message,
    });
  }
};

const getCart = async (req: Request, res: Response) => {
  try {
    const customerId = req?.user?.id;
    console.log(customerId)
    const result = await cartServices.getCart(customerId as string);
    res.status(200).json({
      success: true,
      message: "Retrived cart product",
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: "Failed to get cart Product !",
      err: error.message,
    });
  }
};
export const cartController = {
  addToCart,
  getCart,
};
