import type { Request, Response } from "express";
import { userServices } from "./auth.service";

const viewAllUsers = async (req: Request, res: Response) => {
  try {
    const data = await userServices.viewAllUsers();
    res.status(203).json({
      success: true,
      message: "Users retrived successfully",
      data: data,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: "Failed to retrive user !",
      err: error.message,
    });
  }
};

const updateUser = async (req: Request, res: Response) => {
  try {
    const userId = req.params.id;
    const data = await userServices.updateUser(userId as string, req.body);
    res.status(203).json({
      success: true,
      message: "User updated successfully",
      data: data,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: "Failed to update user !",
      err: error.message,
    });
  }
};

export const userController = {
  viewAllUsers,
  updateUser,
};
