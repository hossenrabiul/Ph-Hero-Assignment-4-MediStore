"use client";
import { useRouter, useSearchParams } from "next/navigation";
import React from "react";

export default function SortDropdown() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const handleSort = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (!e.target.value) {
      return;
    }
    const params = new URLSearchParams(searchParams.toString());
    const value  = e.target.value
    params.set("sortBy", value.toString());
    router.push(`/shop?${params.toString()}`);
  };

  return (
    <select
      onChange={handleSort}
      className="border rounded-lg px-4 py-2 text-sm focus:outline-none"
    >
      <option value={""} disabled>
        Sort by
      </option>
      <option value={"price-asc"}>Price: Low to High</option>
      <option value={"price-dsc"}>Price: High to Low</option>
      <option value={"newest"}>Newest</option>
      <option value={"best-selling"}>Best Selling</option>
    </select>
  );
}
