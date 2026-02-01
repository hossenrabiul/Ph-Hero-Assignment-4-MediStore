import { Router } from "express";
import { categoryController } from "./category.controller";


const route = Router();

route.get("/", categoryController.getAll);
route.post("/", categoryController.create);
route.put("/:id", categoryController.update);

export const categoryRoute = route;
