"use client";

const getGridColumns = (columns) => {
  const columnMap = {
    "col-1": "grid-cols-1",
    "col-2": "grid-cols-1 md:grid-cols-2",
    "col-3": "grid-cols-1 md:grid-cols-3",
    "col-4": "grid-cols-1 md:grid-cols-4",
    "col-5": "grid-cols-1 md:grid-cols-5",
    "col-6": "grid-cols-1 md:grid-cols-6",
  };
  return columnMap[columns] || "grid-cols-1 md:grid-cols-3";
};

export default function CardList({ data }) {
  const gridClass = getGridColumns(data?.columns);

  console.log(">>>CardList ", data);

  return (
    <div className={`grid ${gridClass} gap-6`}>
      {data?.map((card, index) => (
        <div
          key={index}
          className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition"
        >
          {/* Card Image */}
          {card?.media?.url && (
            <div className="w-full overflow-hidden">
              <img
                src={`${process.env.NEXT_PUBLIC_API_URL}${card?.media?.url}`}
                alt={card?.media?.alternativeText || card?.primaryText}
                className="w-full h-full object-cover"
              />
            </div>
          )}

          {/* Card Content */}
          <div className="p-6">
            {card?.primaryText && (
              <h3 className="text-xl font-semibold mb-2">
                {card?.primaryText}
              </h3>
            )}
            {card?.subText && <p className="text-gray-600">{card?.subText}</p>}
          </div>
        </div>
      ))}
    </div>
  );
}
