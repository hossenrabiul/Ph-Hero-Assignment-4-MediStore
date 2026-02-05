"use client";
import { useRouter, useSearchParams } from "next/navigation";

export default function Pagination() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const pageNavigate = (page: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", page.toString());
    router.push(`/shop?${params}`);
  };
  
  return (
    <div className="flex gap-2">
      {[1, 2, 3, 4].map((page) => (
        <button
          key={page}
          onClick={() => pageNavigate(page)}
          className="w-9 h-9 border rounded-lg text-sm hover:bg-blue-600 hover:text-white"
        >
          {page}
        </button>
      ))}
    </div>
  );
}
