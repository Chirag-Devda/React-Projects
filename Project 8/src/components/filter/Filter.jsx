import { FaMagnifyingGlass } from "react-icons/fa6";
import useData from "../../hooks/useData";

const Filter = () => {
  const {
    mode,
    searchKey,
    setSearchKey,
    filterType,
    setFilterType,
    filterPrice,
    setFilterPrice,
    product,
  } = useData();

  const uniqueCategories = [...new Set(product.map((item) => item.category))];
  const uniquePrice = [...new Set(product.map((item) => item.price))];

  // Reset Filter
  const resetFilter = () => {
    setFilterPrice("");
    setFilterType("");
  };

  return (
    <div>
      <div
        className={`max-w-7xl mx-auto mt-5 shadow-lg rounded-lg p-6 flex flex-col gap-5 ${
          mode === "dark" ? "bg-[#282c34] text-white" : "bg-blue-gray-100"
        }`}
      >
        <div className="w-full relative">
          <input
            className={`w-full px-10 py-2 rounded-lg outline-none ${
              mode === "dark" ? "bg-[#282c34] outline-white" : ""
            }`}
            type="search"
            value={searchKey}
            onChange={(e) => setSearchKey(e.target.value)}
            placeholder="Search here"
          />
          <FaMagnifyingGlass className="absolute inset-2" size={20} />
        </div>
        <div className="flex justify-between font-bold text-[17px]">
          <p className="text-[18px] ">Filter</p>
          <p
            onClick={resetFilter}
            className={`cursor-pointer rounded-lg p-2 text-[18px] ${
              mode === "dark"
                ? "hover:scale-[1.2] hover:bg-blue-gray-300 hover:duration-500"
                : "hover:scale-[1.2] hover:bg-white  hover:duration-500"
            }`}
          >
            Reset Filter
          </p>
        </div>
        <div className="flex gap-7">
          <select
            name="items"
            id="item"
            value={filterType}
            onChange={(e) => setFilterType(e.target.value)}
            className={`w-56 py-2 px-3 rounded-lg border border-gray-300  shadow-sm outline-none cursor-pointer  ${
              mode === "dark" ? "bg-[#282c34]" : "bg-white"
            }`}
          >
            {uniqueCategories.map((category, index) => {
              return (
                <option key={index} className="text-[18px]" value={category}>
                  {category}
                </option>
              );
            })}
          </select>
          <select
            name="price"
            id="price"
            value={filterPrice}
            onChange={(e) => setFilterPrice(e.target.value)}
            className={`w-56 py-2 px-3 rounded-lg border border-gray-300  shadow-sm outline-none  cursor-pointer ${
              mode === "dark" ? "bg-[#282c34]" : "bg-white"
            }`}
          >
            {uniquePrice.map((price, index) => {
              return (
                <option key={index} className="text-[18px]" value={price}>
                  {price}
                </option>
              );
            })}
          </select>
        </div>
      </div>
    </div>
  );
};

export default Filter;
