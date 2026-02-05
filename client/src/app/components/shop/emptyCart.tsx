"use client";

import Link from "next/link";
import { ShoppingCart } from "lucide-react";

export default function EmptyCart() {
  return (
    <section className="min-h-[70vh] flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center bg-white rounded-2xl shadow-sm p-10">

        {/* Icon */}
        <div className="mx-auto w-16 h-16 flex items-center justify-center rounded-full bg-gray-100 text-gray-400">
          <ShoppingCart size={28} />
        </div>

        {/* Text */}        <h1 className="text-2xl font-semibold mt-6">
          Your cart is empty
        </h1>

        <p className="text-gray-500 mt-3">
          Looks like you haven’t added anything to your cart yet.
          Start exploring our products and find something you love.
        </p>

        {/* Action */}
        <Link
          href="/shop"
          className="inline-block mt-6 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl transition"
        >
          Continue Shopping
        </Link>

        {/* Secondary hint */}
        <p className="text-sm text-gray-400 mt-4">
          Free delivery on selected items
        </p>
      </div>
    </section>
  );
}
