import { FaMagnifyingGlass } from "react-icons/fa6";
import useData from "../../hooks/useData";

const Filter = () => {
  const { mode } = useData();
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
            placeholder="Search here"
          />
          <FaMagnifyingGlass className="absolute inset-2" size={20} />
        </div>
        <div className="flex justify-between font-bold text-[17px]">
          <p className="text-[18px] ">Filter</p>
          <p
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
            className={`w-56 py-2 px-3 rounded-lg border border-gray-300  shadow-sm outline-none cursor-pointer  ${
              mode === "dark" ? "bg-[#282c34]" : "bg-white"
            }`}
          >
            <option className="text-[18px]" value="Jacket">
              Jacket
            </option>
            <option className="text-[18px]" value="Shirt">
              Shirt
            </option>
            <option className="text-[18px]" value="Jeans">
              Jeans
            </option>
          </select>
          <select
            name="Price"
            id="Price"
            className={`w-56 py-2 px-3 rounded-lg border border-gray-300  shadow-sm outline-none  cursor-pointer ${
              mode === "dark" ? "bg-[#282c34]" : "bg-white"
            }`}
          >
            <option className="text-[18px]" value="Jacket">
              100
            </option>
            <option className="text-[18px]" value="Shirt">
              400
            </option>
            <option className="text-[18px]" value="Jeans">
              700
            </option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Filter;
