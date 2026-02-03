export default function Pagination() {
  return (
    <div className="flex gap-2">
      {[1,2,3,4].map(page => (
        <button
          key={page}
          className="w-9 h-9 border rounded-lg text-sm hover:bg-blue-600 hover:text-white"
        >
          {page}
        </button>
      ))}
    </div>
  );
}