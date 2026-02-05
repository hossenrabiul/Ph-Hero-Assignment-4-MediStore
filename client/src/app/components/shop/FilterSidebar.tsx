"use client";
import { useSearchParams, useRouter } from "next/navigation";
import { FilterSection } from "./FilterSection";
import { useState } from "react";
import { categories } from "../../types/product";

export default function FilterSidebar({
  categories,
}: {
  categories: categories[];
}) {
  // console.log(categories);

  const [selected, setSelected] = useState("");
  const router = useRouter();
  const searchParams = useSearchParams();
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(0);

  const handleSelect = (value: string) => {
    setSelected((prev) => (prev === value ? "" : value));
  };

  const handleCategory = (category: string) => {
    // console.log(category);
    const params = new URLSearchParams(searchParams.toString());
    params.set("category", category);
    router.push(`/shop?${params.toString()}`);
  };
  const handleBrand = (brand: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("brand", brand);
    router.push(`/shop?${params.toString()}`);
  };
  const handleClear = () => {
    const params = new URLSearchParams(searchParams.toString());
    router.push("/shop");
  };
  // if (Number(maxPrice) > 0) {
  //   const params = new URLSearchParams(searchParams.toString());
  //   params.set("minPrice", minPrice.toString());
  //   params.set("maxPrice", maxPrice.toString());

  //   router.push(`/shop?${params.toString()}`);
  // }

  return (
    <div className="sticky top-24">
      <div className="bg-white border p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold">Filters</h3>
          <button
            onClick={handleClear}
            className="text-sm text-blue-600 hover:underline"
          >
            Clear All
          </button>
        </div>

        {/* Category */}
        <FilterSection title="Category">
          {categories?.map((item, idx) => (
            <label key={idx} className="flex items-center gap-2">
              <input
                onClick={() => handleCategory(item.name)}
                type="checkbox"
                name="category"
                id=""
                onChange={() => handleSelect(item.name)}
                checked={selected === item.name}
              />
              <span className="text-sm text-gray-600">{item.name}</span>
            </label>
          ))}
          {/* 
          <label className="flex items-center gap-2">
            <input
              onClick={() => handleCategory("medicine")}
              type="checkbox"
              name="category"
              id=""
            />
            <span className="text-sm text-gray-600">Medicine</span>
          </label>
          <label className="flex items-center gap-2">
            <input
              onClick={() => handleCategory("medical-devices")}
              type="checkbox"
              // name="category"
              id=""
            />
            <span className="text-sm text-gray-600">Medical Devices</span>
          </label> */}
        </FilterSection>

        {/* Price */}
        <FilterSection title="Price Range">
          <input type="range" className="w-full accent-blue-600 mb-3" />
          <div className="flex gap-3">
            <input
              type="number"
              placeholder="Min"
              className="w-1/2 border rounded-lg px-3 py-2 text-sm"
              value={minPrice}
              onChange={(e) => setMinPrice(Number(e.target.value))}
            />
            <input
              type="number"
              placeholder="Max"
              className="w-1/2 border rounded-lg px-3 py-2 text-sm"
              value={maxPrice}
              onChange={(e) => setMaxPrice(Number(e.target.value))}
            />
          </div>
        </FilterSection>

        {/* Brand */}
        <FilterSection title="Brand">
          <label className="flex items-center gap-3">
            <input
              onClick={() => handleBrand("unesco")}
              type="radio"
              name=""
              id=""
            />
            <span>Unesco</span>
          </label>
        </FilterSection>

        {/* Rating */}
        <FilterSection title="Customer Rating">
          {[5, 4, 3].map((r) => (
            <label
              key={r}
              className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer"
            >
              <input type="checkbox" className="accent-blue-600" />
              {"⭐".repeat(r)} <span className="text-gray-500">& up</span>
            </label>
          ))}
        </FilterSection>
      </div>
    </div>
  );
}
