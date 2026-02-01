import type { Request, Response } from "express";
import { productService } from "./product.service";
import { createProductSchema, type Pagination } from "../../types/product";
import { prisma } from "../../lib/prisma";
import { paginationHelpers } from "../../helpers/paginationHelper";

const create = async (req: Request, res: Response) => {
  try {
    const result = createProductSchema.safeParse(req.body);
    const sellerId = req?.user?.id;
    if (!result.success) {
      return res.status(400).json({
        success: false,
        errors: result.error.message,
      });
    }

    const data = await productService.create(sellerId as string, req.body);

    res.status(203).json({
      success: true,
      message: "Product created successfully",
      data: data,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: "Failed to create Product !",
      err: error.message,
    });
  }
};

const update = async (req: Request, res: Response) => {
  try {
    const productId = req.params.id;
    const exitProduct = await prisma.medicine.findUnique({
      where: {
        id: productId as string,
      },
    });
    if (!exitProduct) {
      return res.status(400).json({
        success: false,
        message: "No product found",
      });
    }

    const data = await productService.update(productId as string, req.body);

    res.status(203).json({
      success: true,
      message: "Product updated successfully",
      data: data,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: "Failed to update Product !",
      err: error.message,
    });
  }
};

const deleteById = async (req: Request, res: Response) => {
  try {
    const productId = req.params.id;
    const exitProduct = await prisma.medicine.findUnique({
      where: {
        id: productId as string,
      },
    });
    if (!exitProduct) {
      return res.status(400).json({
        success: false,
        message: "No product found",
      });
    }

    const data = await productService.deleteById(productId as string);

    res.status(200).json({
      success: true,
      message: "Product deleted successfully",
      data: data,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: "Failed to delete Product !",
      err: error.message,
    });
  }
};

const getAll = async (req: Request, res: Response) => {
  try {
    const { search, category } = req.query;

    const searchType = typeof search === "string" ? search : undefined;
    const categoryType = typeof category === "string" ? category : undefined;

    const { take, skip, sortBy } = paginationHelpers(req.query);
    const data = await productService.getAll({
      search: searchType,
      category: categoryType,
      take,
      skip,
      sortBy,
    });

    res.status(200).json({
      success: true,
      message: "Product retrived successfully",
      data: data,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: "Failed to retrive Product !",
      err: error.message,
    });
  }
};

const getById = async (req: Request, res: Response) => {
  try {
    const productId = req.params.id;
    const exitProduct = await prisma.medicine.findUnique({
      where: {
        id: productId as string,
      },
    });
    if (!exitProduct) {
      return res.status(400).json({
        success: false,
        message: "No product found",
      });
    }

    const data = await productService.getById(productId as string);

    res.status(200).json({
      success: true,
      message: "Product retrived successfully",
      data: data,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: "Failed to retrive Product !",
      err: error.message,
    });
  }
};

export const productController = {
  create,
  update,
  deleteById,
  getAll,
  getById,
};
