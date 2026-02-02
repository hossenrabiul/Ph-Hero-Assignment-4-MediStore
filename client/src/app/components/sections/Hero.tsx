"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-linear-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">

        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <span className="inline-block mb-4 text-sm font-semibold text-blue-600 bg-blue-100 px-4 py-1 rounded-full">
            Trusted Healthcare Platform
          </span>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Your Health, <br />
            Our <span className="text-blue-600">Top Priority</span>
          </h1>

          <p className="mt-6 text-gray-600 text-lg leading-relaxed">
            Order genuine medicines, consult certified doctors, and get fast
            delivery — all from one secure and reliable medical platform.
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-wrap gap-4">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/medicines"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold shadow hover:bg-blue-700 transition"
              >
                Buy Medicines
              </Link>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/doctors"
                className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition"
              >
                Consult Doctor
              </Link>
            </motion.div>
          </div>

          {/* Trust Badges */}
          <div className="mt-10 flex items-center gap-6 text-sm text-gray-500">
            <div>✔ Licensed Pharmacy</div>
            <div>✔ 24/7 Support</div>
            <div>✔ Secure Payments</div>
          </div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          className="relative"
        >
          <Image
            src="/Doctors-bro.png"
            alt="Medical Healthcare Illustration"
            width={520}
            height={520}
            priority
            className="w-full h-auto"
          />
        </motion.div>

      </div>
    </section>
  );
}