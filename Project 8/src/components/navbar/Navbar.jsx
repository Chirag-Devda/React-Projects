import { Link } from "react-router-dom";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";
import { FaBars } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";

import useData from "../../hooks/useData";

const Navbar = () => {
  const { mode, toggleMode } = useData();
  return (
    <nav
      style={{
        backgroundColor: mode === "dark" ? "#282c34" : "",
        color: mode === "dark" ? "white" : "",
      }}
      className="sticky top-0 z-10 w-screen"
    >
      <div className="mx-auto flex h-[72px] max-w-[1280px] items-center justify-between px-3">
        <div className="flex items-center gap-6">
          <FaBars size={25} className="block cursor-pointer pt-1 sm:hidden" />
          <h1 className="cursor-pointer text-[25px] font-bold">LootLo</h1>
        </div>
        <ul className="flex w-fit items-center justify-between space-x-10">
          <li className="hidden hover:cursor-pointer md:block">All Products</li>
          <li className="hidden hover:cursor-pointer md:block">Order</li>
          <li className="hidden hover:cursor-pointer md:block">Admin</li>
          <li className="hidden hover:cursor-pointer md:block">Logout</li>
          <li onClick={toggleMode} className="cursor-pointer">
            {mode === "light" ? (
              <MdOutlineLightMode size={33} md:size={25} />
            ) : (
              <MdOutlineDarkMode size={33} md:size={25} />
            )}
          </li>
          <Link to="/cart">
            <div className="relative">
              <FiShoppingCart className="cursor-pointer" size={25} />
              <div className="absolute -right-2 -top-4 w-5 rounded-full  text-center text-[12px]">
                0
              </div>
            </div>
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
