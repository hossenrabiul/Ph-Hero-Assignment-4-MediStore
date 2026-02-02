import express, { type Request, type Response } from "express";
import cors from "cors";
import { toNodeHandler } from "better-auth/node";
import { auth } from "./lib/auth";
import { categoryRoute } from "./modules/category/category.route";
import { productRoute } from "./modules/product/product.route";
import { cartRoute } from "./modules/cart/cart.route";
import { userRoute } from "./modules/auth/auth.route";

export const app = express();
app.use(express.json());
app.use(
  cors({
    origin: process.env.API_URL,
    credentials: true,
  }),
);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello from the MediStore ...");
});

app.all("/api/v1/auth/*splat", toNodeHandler(auth));

app.use("/api/v1/", userRoute);

app.use("/api/v1/category", categoryRoute);

app.use("/api/v1/product", productRoute);

app.use("/api/v1/product/cart", cartRoute);
