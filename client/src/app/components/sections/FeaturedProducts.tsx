"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const products = [
  {
    id: 1,
    name: "Blood Pressure Monitor",
    image: "/injection.jpg",
  },
  {
    id: 2,
    name: "Digital Thermometer",
    image: "/capsul.jpg",
  },
  {
    id: 3,
    name: "Glucometer",
    image: "/injection.jpg",
  },
  {
    id: 4,
    name: "Vitamin C Tablets",
    image: "/chest-test.jpg",
  },
];

export default function FeaturedProducts() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6">

        {/* Banner Header */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-gray-900">
            Featured Medical Products
          </h2>

          <Link
            href="/products"
            className="flex items-center gap-3 text-[16px] font-semibold text-gray-800  px-8 py-3 rounded-lg border border-gray-600 transition"
          >
           See All Products
           <span><ArrowRight className="w-5 h-5 text-gray-500"/> </span>
          </Link>
        </div>

        {/* Products Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="rounded-2xl transition"
            >
              {/* Image Wrapper */}
              <div className="relative group rounded-xl overflow-hidden h-88 flex items-center justify-center">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={700}
                  height={900}
                  className="object-contain transition-transform duration-300 group-hover:scale-105"
                />

                {/* Hover Button */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                  <Link
                    href="/products"
                    className="bg-white text-gray-900 text-sm font-semibold px-4 py-2 rounded-lg hover:bg-blue-600 hover:text-white transition"
                  >
                    View All
                  </Link>
                </div>
              </div>

              {/* Product Name */}
              <h3 className="mt-4 text-sm font-semibold text-gray-800 text-center">
                {product.name}
              </h3>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}