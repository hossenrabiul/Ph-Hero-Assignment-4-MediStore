import React from "react";
import ShopPage from "../../components/pages/shop";
import { ProductService } from "../../services/product.service";

const page = async ({
  searchParams,
}: {
  searchParams: Promise<{ page ?: string, limit ?: number, category : string}>;
}) => {
  const { page, category, limit } = await searchParams;
  
  const products = await ProductService.getProducts({category : category})

  return (
    <div>
      <ShopPage products={products}/>
    </div>
  );
};

export default page;
