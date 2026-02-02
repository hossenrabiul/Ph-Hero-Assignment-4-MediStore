"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function OfferBanner() {
  return (
    <section
      className="relative bg-fixed bg-center bg-cover"
      style={{
        backgroundImage: "url('/banner-medical.jpg')",
        minHeight: "600px",
      }}
    >
      {/* Overlay for contrast */}
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative max-w-6xl mx-auto px-6 py-32 flex flex-col md:flex-row items-start">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="text-xl font-semibold text-yellow-400 uppercase mb-3 block">
            Limited Time Offer
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-5">
            Get 40% OFF on Selected Medicines
          </h2>

          <p className="text-white text-lg md:text-xl max-w-md mb-7">
            Don’t miss our exclusive health & wellness deals. Valid while stocks
            last!
          </p>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 md:mt-0"
          >
            <Link
              href="/products"
              className="bg-yellow-400 text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition"
            >
              Shop Now
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
