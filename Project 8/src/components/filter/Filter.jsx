import { FaMagnifyingGlass } from "react-icons/fa6";
import useData from "../../hooks/useData";

const Filter = () => {
  const { mode } = useData();
  return (
    <div>
      <div
        className={`max-w-7xl mx-auto mt-5  rounded-lg p-6 flex flex-col gap-5 ${
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
          <p>Filter</p>
          <p>Reset Filter</p>
        </div>
        <div className="flex gap-7">
          <select
            name="items"
            id="item"
            className={`w-56 py-2 px-3 rounded-lg border border-gray-300 bg-white shadow-sm outline-none ${
              mode === "dark" ? "bg-[#282c34]" : ""
            }`}
          >
            <option value="Jacket">Jacket</option>
            <option value="Shirt">Shirt</option>
            <option value="Jeans">Jeans</option>
          </select>
          <select
            name="Price"
            id="Price"
            className={`w-56 py-2 px-3 rounded-lg border border-gray-300 bg-white shadow-sm outline-none ${
              mode === "dark" ? "bg-[#282c34]" : ""
            }`}
          >
            <option className="" value="Jacket">
              100
            </option>
            <option className="" value="Shirt">
              400
            </option>
            <option className="" value="Jeans">
              700
            </option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Filter;
