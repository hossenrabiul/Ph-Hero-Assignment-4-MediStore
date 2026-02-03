export function Checkbox({ label }: { label: string }) {
  return (
    <label className="flex items-center gap-3 text-sm text-gray-600 cursor-pointer group">
      <input
        type="checkbox"
        className="w-4 h-4 accent-blue-600"
      />
      <span className="group-hover:text-gray-900 transition">
        {label}
      </span>
    </label>
  );
}