export function FilterSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mb-6">
      <h4 className="text-sm font-semibold mb-3 text-gray-800">
        {title}
      </h4>
      <div className="space-y-2">{children}</div>
    </div>
  );
}