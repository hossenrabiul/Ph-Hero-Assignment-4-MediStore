import Image from "next/image";
import { Product } from "../../types/product";

export default function ProductCard({ item } : {item : Product}) {
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
          <button className="flex-1 bg-blue-600 text-white text-sm py-2 rounded-lg hover:bg-blue-700 transition">
            Buy Now
          </button>
          <button className="flex-1 border border-gray-300 text-gray-700 text-sm py-2 rounded-lg hover:bg-gray-100 transition">
            Details
          </button>
        </div>
      </div>
    </div>
  );
}
