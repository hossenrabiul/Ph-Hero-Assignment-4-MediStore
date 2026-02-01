import type { Request, Response } from "express";
import { categoryService } from "./category.service";


const create = async (req: Request, res: Response) => {
  try {
    const { name, description } = req.body;
    const data = await categoryService.create(name, description);

    res.status(203).json({
      success: true,
      message: "Category created successfully",
      data: data,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: "Failed to create Category !",
      err: error.message,
    });
  }
};

const update = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const data = await categoryService.update(id as string, req.body);

    res.status(203).json({
      success: true,
      message: "Category updated successfully",
      data: data,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: "Failed to update Category !",
      err: error.message,
    });
  }
};
const getAll = async (req: Request, res: Response) => {
  try {
    const data = await categoryService.getAll();

    res.status(203).json({
      success: true,
      message: "Category retrived successfully",
      data: data,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: "Failed to retrive Category !",
      err: error.message,
    });
  }
};
export const categoryController = {
  create,
  update,
  getAll,
};
