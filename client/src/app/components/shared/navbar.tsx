"use client";

import { motion } from "framer-motion";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl font-bold text-blue-600">
              Medi<span className="text-green-500">Care</span>
            </span>
          </Link>

          {/* Nav Links */}
          <nav className="hidden md:flex items-center gap-8">
            {["Home", "Medicines", "Doctors", "About", "Contact"].map(
              (item, index) => (
                <motion.div
                  key={item}
                  whileHover={{ y: -2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Link
                    href={`/${item.toLowerCase()}`}
                    className="text-gray-700 hover:text-blue-600 font-medium"
                  >
                    {item}
                  </Link>
                </motion.div>
              ),
            )}
          </nav>

         
          {/* Actions */}
          <div className="flex items-center gap-4">
             <Link href="/cart" className="relative">
            <ShoppingCart className="h-5 w-5" />
            <span className="absolute -top-2 -right-2 bg-emerald-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
              2
            </span>
          </Link>
            <Link
              href="/login"
              className="text-gray-700 hover:text-blue-600 font-medium"
            >
              Login
            </Link>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/register"
                className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold shadow hover:bg-blue-700 transition"
              >
                Register
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
