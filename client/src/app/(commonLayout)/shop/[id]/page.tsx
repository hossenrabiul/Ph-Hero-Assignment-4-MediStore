
import AddToCartButton from "@/src/app/components/product/AddToCartButton";
import { ProductService } from "@/src/app/services/product.service";
import { ShieldCheck, ShoppingCart, Truck } from "lucide-react";
import Image from "next/image";
import { toast } from "sonner";

const ProductDetails = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;
  const product = await ProductService.getProductById(id);
  const {
    name,
    description,
    price,
    image,
    stock,
    bedge,
    expireDate,
    createdAt,
  } = product.data;

  return (
    <section className="max-w-7xl mx-auto px-4 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Product Image */}
        <div className="relative bg-white rounded-2xl shadow-sm p-6">
          {bedge && (
            <span className="absolute top-4 left-4 bg-red-600 text-white text-xs px-3 py-1 rounded-full">
              {bedge}
            </span>
          )}

          <Image
            src={image}
            alt={name}
            width={500}
            height={500}
            className="w-full h-auto object-contain rounded-xl"
          />
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-semibold text-gray-900">{name}</h1>
            <p className="text-gray-500 mt-2">{description}</p>
          </div>

          {/* Price & Stock */}
          <div className="flex items-center gap-4">
            <span className="text-3xl font-bold text-green-600">$ {price}</span>

            {stock > 0 ? (
              <span className="text-sm bg-green-100 text-green-700 px-3 py-1 rounded-full">
                In Stock
              </span>
            ) : (
              <span className="text-sm bg-red-100 text-red-700 px-3 py-1 rounded-full">
                Out of Stock
              </span>
            )}
          </div>

          {/* Quantity */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Quantity
            </label>
            <input
              type="number"
              min={1}
              max={stock}
              defaultValue={1}
              className="w-24 border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4">
            <AddToCartButton id={id}/>

            <button className="border border-green-600 text-green-600 hover:bg-green-50 px-4 py- rounded-xl transition">
              Buy Now
            </button>
          </div>

          {/* Trust Info */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t">
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <ShieldCheck size={18} />
              100% Authentic
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Truck size={18} />
              Fast Delivery
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <ShieldCheck size={18} />
              Secure Payment
            </div>
          </div>
        </div>
      </div>

      {/* Description & Additional Info */}
      <div className="mt-16 bg-white rounded-2xl shadow-sm p-8">
        <h2 className="text-xl font-semibold mb-4">Product Description</h2>
        <p className="text-gray-600 leading-relaxed">
          {description}. This product is carefully manufactured and
          quality-tested to ensure safety and effectiveness. Suitable for
          regular use and trusted by customers.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8 text-sm">
          <div>
            <p className="text-gray-500">Expiry Date</p>
            <p className="font-medium">{expireDate || "Not Available"}</p>
          </div>

          <div>
            <p className="text-gray-500">Added On</p>
            <p className="font-medium">{new Date(createdAt).toDateString()}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
