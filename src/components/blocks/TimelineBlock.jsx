export default function TimelineBlock({ data }) {
  return (
    <div className="my-6">
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
