import { categories, Product } from "../../types/product";
import FilterSidebar from "../shop/FilterSidebar";
import Pagination from "../shop/pagination";
import ProductCard from "../shop/ProductCard";
import SortDropdown from "../shop/sortDropdown";

export default function ShopPage({
  categories,
  data,
  products,
  count,
  page,
  skip,
  limit,
}: {
  categories : categories[]
  data : null | any,
  products: Product[];
  count: number;
  page: number;
  skip: number;
  limit : number,
}) {
  const first = limit * (page - 1) || 0
  const second = Math.min(limit * page, count) || 0
  // console.log(data)
  return (
    <section className="container mx-auto px-4 py-10">
      <div className="grid grid-cols-12 gap-6">
        {/* Sidebar */}
        <aside className="col-span-12 md:col-span-3">
          <FilterSidebar categories={categories}/>
        </aside>

        {/* Products */}
        <div className="col-span-12 md:col-span-9">
          {/* Sort Bar */}
          <div className="flex items-center justify-between mb-6">
            <p className="text-gray-600 text-sm">
              Showing {first}–{second} of {count || 0} products
            </p>
            <SortDropdown />
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {/* {[...Array(12)].map((i) => (
              <ProductCard key={i} />
            ))} */}
            {products?.map((item: Product, i: number) => (
              <ProductCard key={i} item={item} />
            ))}
          </div>

          {/* Pagination */}
          <div className="mt-10 flex justify-center">
            <Pagination />
          </div>
        </div>
      </div>
    </section>
  );
}
