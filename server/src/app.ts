import express, { type Request, type Response } from "express";
import cors from "cors";
import { toNodeHandler } from "better-auth/node";
import { auth } from "./lib/auth";
import { categoryRoute } from "./modules/category/category.route";
import { productRoute } from "./modules/product/product.route";
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

app.all("/api/auth/*splat", toNodeHandler(auth));

app.use("/api/v1/category", categoryRoute);

app.use("/api/v1/product", productRoute);
