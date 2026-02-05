"use client";

import Image from "next/image";
import { Product } from "../../types/product";
import { toast } from "sonner";
import { addProduct } from "../../actions/product.action";
import Link from "next/link";

export default function ProductCard({ item }: { item: Product }) {
  const handleCart = async (id: string) => {
    // console.log(id);
    const toastId = toast.loading("Product is adding", {
      position: "top-right",
    });

    const productResult = await addProduct(id);
    if (productResult.success) {
      toast.success("Product added to cart", { id: toastId });
    } else {
      toast.error(productResult.message, { id: toastId });
    }
  };
  return (
    <div className="group bg-white border rounded overflow-hidden transition duration-300">
      {/* Image */}
      <div className="relative group-hover:opacity-100 bg-gray-50 p-4">
        {/* Badge */}
        {item.bedge && (
          <span className="absolute top-3 left-3 bg-red-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
            {item.bedge}
          </span>
        )}

        <Image
          src={item.image}
          alt="product"
          className="mx-auto h-40 object-contain group-hover:scale-105 transition"
          width={100}
          height={100}
        />
      </div>

      {/* Content */}
      <div className="p-4 space-y-3">
        {/* Title */}
        <h3 className="text-[16px] font-medium text-gray-800 line-clamp-2">
          {item.name}
        </h3>
        <p className="text-xs text-green-600">✔ In Stock</p>
        {/* Rating */}
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <span className="text-yellow-500">★★★★★</span>
          <span>(124 reviews)</span>
        </div>

        {/* Price */}
        <div className="flex items-center gap-2">
          <span className="text-lg font-bold text-blue-600">${item.price}</span>
          <span className="text-sm line-through text-gray-400">$200</span>
        </div>

        {/* Buttons */}
        <div className="flex gap-2 pt-2">
          <button
            onClick={() => handleCart(item.id)}
            className="flex-1 bg-blue-600 text-white text-sm py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Buy Now
          </button>
          <Link href={`/shop/${item.id}`} className="flex-1 flex items-center justify-center border rounded-lg border-gray-300 text-gray-700 text-sm hover:bg-gray-100 transition">
            <button className="">
              Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
