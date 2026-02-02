"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const bestSellers = [
  {
    id: 1,
    name: "Digital Blood Pressure Monitor",
    image: "/transparent.png",
    price: 2499,
    oldPrice: 2999,
    badge: "40% Off",
  },
  {
    id: 2,
    name: "Accu-Check Glucometer",
    image: "/capsul.jpg",
    price: 1899,
    oldPrice: 2299,
    badge: "Best Seller",
  },
  {
    id: 3,
    name: "Infrared Thermometer",
    image: "/transparent.png",
    price: 1599,
    oldPrice: 1999,
    badge: "Hot Deal",
  },
  {
    id: 4,
    name: "Multivitamin Capsules",
    image: "/injection.jpg",
    price: 699,
    oldPrice: 899,
    badge: "New",
  },
  {
    id: 3,
    name: "Infrared Thermometer",
    image: "/transparent.png",
    price: 1599,
    oldPrice: 1999,
    badge: "Hot Deal",
  },
  {
    id: 4,
    name: "Multivitamin Capsules",
    image: "/injection.jpg",
    price: 699,
    oldPrice: 899,
    badge: "New",
  },
  {
    id: 1,
    name: "Digital Blood Pressure Monitor",
    image: "/transparent.png",
    price: 2499,
    oldPrice: 2999,
    badge: "40% Off",
  },
  {
    id: 2,
    name: "Accu-Check Glucometer",
    image: "/capsul.jpg",
    price: 1899,
    oldPrice: 2299,
    badge: "Best Seller",
  },
];

export default function BestSellers() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Title */}
        <h2 className="text-2xl font-bold text-gray-900 mb-8">
          Best Seller Products
        </h2>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
          {bestSellers.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group border border-gray-100 hover:border-blue-200 transition relative"
            >
              {/* Image */}
              <div className="relative h-88 bg-gray-50 overflow-hidden">
                <span
                  className={`absolute top-5 left-6 z-10 text-xs font-bold px-3 py-1 rounded
      ${
        product.badge === "Best Seller"
          ? "bg-green-600 text-white"
          : product.badge === "New"
            ? "bg-blue-600 text-white"
            : "bg-red-600 text-white"
      }
    `}
                >
                  {product.badge}
                </span>
                <Image
                  src={product.image}
                  alt={product.name}
                  //   width={500}
                  //   height={900}
                  fill
                  className="object-contain transition-transform duration-300 group-hover:scale-105"
                />

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition flex flex-col items-center justify-center gap-3">
                  <Link
                    href={`/products/${product.id}`}
                    className="bg-white text-gray-900 text-sm font-semibold px-5 py-2 rounded-lg hover:bg-blue-600 hover:text-white transition"
                  >
                    View Details
                  </Link>

                  <Link
                    href="/products"
                    className="text-white text-sm underline hover:text-blue-300"
                  >
                    View All Products
                  </Link>
                </div>
              </div>

              {/* Content (NO extra padding container) */}
              <div className="px-4 py-4">
                <h3 className="text-sm font-semibold text-gray-800 leading-snug">
                  {product.name}
                </h3>

                {/* Prices */}
                <div className="mt-2 flex items-center gap-2">
                  <span className="text-lg font-bold text-red-600">
                    ${product.price}
                  </span>
                  <span className="text-sm text-gray-400 line-through">
                    ${product.oldPrice}
                  </span>
                </div>

                {/* Add to Cart */}
                <button className="mt-4 text-gray-900 border  py-4 px-6 text-sm font-semibold hover:bg-gray-950 hover:text-white hover:border-none transition duration-700">
                  Add to Cart
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
