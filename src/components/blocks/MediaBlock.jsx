export default function MediaBlock({ data }) {
  if (!data.file) return null;

  return (
    <div className="my-6">
      <img
        src={`${process.env.NEXT_PUBLIC_API_URL}${data.file.url}`}
        alt={data.file.alternativeText || ""}
        className="w-full rounded"
      />
    </div>
  );
}