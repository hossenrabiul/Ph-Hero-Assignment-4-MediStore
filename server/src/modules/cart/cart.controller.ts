import type { Request, Response } from "express";
import { cartServices } from "./cart.service";

const addToCart = async (req: Request, res: Response) => {
  try {
    const customerId = req?.user?.id;
    const medicineId = req.query.medicineId;

    const result = await cartServices.addToCart(
      customerId as string,
      medicineId as string,
    );
    
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: "Failed to add Product !",
      err: error.message,
    });
  }
};
