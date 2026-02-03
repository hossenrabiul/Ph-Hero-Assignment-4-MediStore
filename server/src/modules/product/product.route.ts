import { Router } from "express";
import { productController } from "./product.controller";
import { auth } from "../../middleware/auth";
import { userRole } from "../../constants/userRole";

const route = Router();

route.get("/",auth(), productController.getAll);
route.get("/:id", productController.getById);
route.post("/", auth(), productController.create);
route.put("/:id", productController.update);
route.delete("/:id", productController.deleteById);

export const productRoute = route;
