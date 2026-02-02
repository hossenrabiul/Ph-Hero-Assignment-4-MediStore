import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t mt-20">
      <div className="max-w-7xl mx-auto px-4 py-12">

        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold text-emerald-600">
              Medi<span className="text-gray-900">Shop</span>
            </h2>
            <p className="mt-4 text-sm text-gray-600 leading-relaxed">
              Your trusted online pharmacy for genuine medicines, healthcare
              products, and fast delivery. Quality and care you can rely on.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wide">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-gray-600">
              <li>
                <Link href="/" className="hover:text-emerald-600">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/shop" className="hover:text-emerald-600">
                  Shop
                </Link>
              </li>
              <li>
                <Link href="/categories" className="hover:text-emerald-600">
                  Categories
                </Link>
              </li>
              <li>
                <Link href="/offers" className="hover:text-emerald-600">
                  Offers
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Support */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wide">
              Customer Support
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-gray-600">
              <li>
                <Link href="/help" className="hover:text-emerald-600">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="hover:text-emerald-600">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-emerald-600">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="/returns" className="hover:text-emerald-600">
                  Returns & Refunds
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wide">
              Contact Us
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-gray-600">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-emerald-600" />
                +880 1234 567890
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-emerald-600" />
                support@medishop.com
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-emerald-600 mt-0.5" />
                Dhaka, Bangladesh
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="mt-10 border-t pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} MediShop. All rights reserved.
          </p>
          <p className="text-sm text-gray-500">
            Built with ❤️ for better healthcare
          </p>
        </div>
      </div>
    </footer>
  );
}