import Image from "next/image";
import { Trash2, ShieldCheck } from "lucide-react";
import { ProductService } from "../../services/product.service";
import EmptyCart from "../../components/shop/emptyCart";

export default async function CartPage() {
  const cartData = await ProductService.getCart();
  if (!cartData.success) {
    return <EmptyCart />;
  }
  const { orterItem, totalAmount, status } = cartData?.data;

  return (
    <section className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-semibold mb-8">Shopping Cart</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Cart Items */}
        <div className="lg:col-span-2 space-y-6">
          {orterItem?.map((item) => (
            <div
              key={item.medicine.id}
              className="flex gap-6 bg-white rounded-2xl shadow-sm p-6"
            >
              {/* Image */}
              <div className="w-28 h-28 relative rounded-xl overflow-hidden border">
                <Image
                  src={item.medicine.image}
                  alt={item.medicine.name}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Info */}
              <div className="flex-1">
                <h3 className="font-medium text-lg">{item.medicine.name}</h3>

                <p className="text-gray-500 text-sm mt-1">
                  ৳ {item.medicine.price} each
                </p>

                {/* Quantity */}
                <div className="flex items-center gap-4 mt-4">
                  <input
                    type="number"
                    min={1}
                    value={item.quantity}
                    className="w-20 border rounded-lg px-3 py-2"
                    readOnly
                  />

                  <button className="flex items-center gap-1 text-red-500 hover:text-red-600 text-sm">
                    <Trash2 size={16} />
                    Remove
                  </button>
                </div>
              </div>

              {/* Item Total */}
              <div className="font-semibold text-right">
                ৳ {Number(item.medicine.price) * 2}
              </div>
            </div>
          ))}
        </div>

        {/* Order Summary */}
        <div className="bg-white rounded-2xl shadow-sm p-6 h-fit">
          <h2 className="text-xl font-semibold mb-6">Order Summary</h2>

          <div className="space-y-4 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-500">Order Status</span>
              <span className="font-medium text-orange-500">{status}</span>
            </div>

            <div className="flex justify-between">
              <span className="text-gray-500">Items</span>
              <span className="font-medium">{orterItem.length}</span>
            </div>

            <div className="border-t pt-4 flex justify-between text-base font-semibold">
              <span>Total</span>
              <span className="text-green-600">৳ {totalAmount}</span>
            </div>
          </div>

          {/* Checkout Button */}
          <button className="w-full mt-6 bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl transition">
            Proceed to Checkout
          </button>

          {/* Trust */}
          <div className="flex items-center gap-2 text-sm text-gray-500 mt-4 justify-center">
            <ShieldCheck size={16} />
            Secure Checkout
          </div>
        </div>
      </div>
    </section>
  );
}
