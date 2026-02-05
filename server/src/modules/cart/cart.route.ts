import { Router } from "express";
import { cartController } from "./cart.controller";
import { auth } from "../../middleware/auth";

const route = Router();

route.get("/",auth(),  cartController.getCart);

route.post("/:id", auth(), cartController.addToCart);

export const cartRoute = route;
