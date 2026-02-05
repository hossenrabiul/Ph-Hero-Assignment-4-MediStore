import React from "react";
import ShopPage from "../../components/pages/shop";
import { ProductService } from "../../services/product.service";
import { Pagination } from "../../types/product";

const page = async ({
  searchParams,
}: {
  searchParams: Promise<Pagination>;
}) => {
  const { page, category, limit, minPrice, maxPrice, sortBy } = await searchParams;

  const data = await ProductService.getProducts({
    category,
    minPrice,
    maxPrice,
    page,
    limit,
    sortBy,
  });
  const categories = await ProductService.getCategories()

  return (
    <div>
      <ShopPage categories={categories} data={data} products={data?.result} count={data?.count} page={data?.page} skip={data?.skip} limit={data?.limit} />
    </div>
  );
};

export default page;
