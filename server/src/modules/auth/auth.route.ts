import { Router } from "express";
import { userController } from "./auth.controller";

const route = Router();

route.get("/", userController.viewAllUsers);
route.put("/:id", userController.updateUser);

export const userRoute  = route