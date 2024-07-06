import useData from "../../hooks/useData.jsx";

const ProductCard = () => {
  const { mode } = useData();
  return (
    <div className="max-w-7xl mx-auto mt-10 px-5">
      <div>
        <h1
          className={`text-3xl font-bold ${
            mode === "dark" ? "text-white" : ""
          }`}
        >
          Our Latest Collection
        </h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 mt-10">
        <div
          className={`rounded-lg border shadow-md p-4 text-center flex flex-col items-start ${
            mode === "dark" ? "border border-white" : ""
          }`}
        >
          <img
            src="https://domf5oio6qrcr.cloudfront.net/medialibrary/7267/hb-6weekplan-0516207265025824.jpg"
            alt=""
            className="mx-auto mb-4 rounded-lg"
          />
          <h3
            className={`text-xl font-semibold mb-2 ${
              mode === "dark" ? "text-white" : ""
            }`}
          >
            LootLo
          </h3>
          <h3
            className={`text-xl font-semibold mb-2 ${
              mode === "dark" ? "text-white" : ""
            }`}
          >
            This is title
          </h3>
          <p
            className={`mb-4 ${
              mode === "dark" ? "text-white" : "text-gray-600 "
            }`}
          >
            &#8377; 500
          </p>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full">
            Add to Cart
          </button>
        </div>
        <div
          className={`rounded-lg border shadow-md p-4 text-center flex flex-col items-start ${
            mode === "dark" ? "border border-white" : ""
          }`}
        >
          <img
            src="https://domf5oio6qrcr.cloudfront.net/medialibrary/7267/hb-6weekplan-0516207265025824.jpg"
            alt=""
            className="mx-auto mb-4 rounded-lg"
          />
          <h3
            className={`text-xl font-semibold mb-2 ${
              mode === "dark" ? "text-white" : ""
            }`}
          >
            LootLo
          </h3>
          <h3
            className={`text-xl font-semibold mb-2 ${
              mode === "dark" ? "text-white" : ""
            }`}
          >
            This is title
          </h3>
          <p
            className={`mb-4 ${
              mode === "dark" ? "text-white" : "text-gray-600 "
            }`}
          >
            &#8377; 500
          </p>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full">
            Add to Cart
          </button>
        </div>
        <div
          className={`rounded-lg border shadow-md p-4 text-center flex flex-col items-start ${
            mode === "dark" ? "border border-white" : ""
          }`}
        >
          <img
            src="https://domf5oio6qrcr.cloudfront.net/medialibrary/7267/hb-6weekplan-0516207265025824.jpg"
            alt=""
            className="mx-auto mb-4 rounded-lg"
          />
          <h3
            className={`text-xl font-semibold mb-2 ${
              mode === "dark" ? "text-white" : ""
            }`}
          >
            LootLo
          </h3>
          <h3
            className={`text-xl font-semibold mb-2 ${
              mode === "dark" ? "text-white" : ""
            }`}
          >
            This is title
          </h3>
          <p
            className={`mb-4 ${
              mode === "dark" ? "text-white" : "text-gray-600 "
            }`}
          >
            &#8377; 500
          </p>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
