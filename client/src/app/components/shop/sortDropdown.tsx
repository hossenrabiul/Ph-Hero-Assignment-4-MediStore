export default function SortDropdown() {
  return (
    <select className="border rounded-lg px-4 py-2 text-sm focus:outline-none">
      <option>Sort by</option>
      <option>Price: Low to High</option>
      <option>Price: High to Low</option>
      <option>Newest</option>
      <option>Best Selling</option>
    </select>
  );
}