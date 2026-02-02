"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const offers = [
  {
    id: 1,
    offer: "Up to 30% OFF",
    title: "Diabetes Care",
    image: "/diabities.jpg",
    link: "/category/diabetes",
    bg: "from-blue-50 to-blue-100",
  },
  {
    id: 2,
    offer: "Flat 20% OFF",
    title: "Heart & BP Medicines",
    image: "/pain.jpg",
    link: "/category/heart",
    bg: "from-green-50 to-green-100",
  },
  {
    id: 3,
    offer: "Special Offer",
    title: "Vitamins & Supplements",
    image: "/vitamins.jpg",
    link: "/category/vitamins",
    bg: "from-purple-50 to-purple-100",
  },
];

export default function FeaturedOffers() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-6">
          {offers.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative overflow-hidden rounded-2xl bg-linear-to-br ${item.bg} p-6 flex items-center justify-between`}
            >
              {/* Left Content */}
              <div className="max-w-[60%]">
                <span className="text-sm font-semibold text-blue-600">
                  {item.offer}
                </span>

                <h3 className="mt-2 text-xl font-bold text-gray-900">
                  {item.title}
                </h3>

                <Link
                  href={item.link}
                  className="inline-block mt-4 text-sm font-semibold text-white bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700 transition"
                >
                  Shop Now
                </Link>
              </div>

              {/* Right Image */}
              <div className="absolute right-4 bottom-4">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={120}
                  height={120}
                  className="object-contain rounded"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}