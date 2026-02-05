"use client";

import { ShoppingCart } from "lucide-react";
import { toast } from "sonner";
import { addProduct } from "../../actions/product.action";

export default function AddToCartButton({id} : {id : string}) {
  const handleCart = async (id: string) => {
    // console.log(id);
    const toastId = toast.loading("Product is adding", {
      position: "top-right",
    });

    const productResult = await addProduct(id);
    if (productResult.success) {
      toast.success("Product added to cart", { id: toastId });
    } else {
      toast.error(productResult.message, { id: toastId });
    }
  };

  return (
    <button
      onClick={() => handleCart(id)}
      className="mt-6 flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl transition"
    >
      <ShoppingCart size={18} />
      Add to Cart
    </button>
  );
}
