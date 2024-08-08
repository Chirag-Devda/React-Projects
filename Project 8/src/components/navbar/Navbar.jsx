import { Link } from "react-router-dom";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";
import { FaBars } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";

import useData from "../../hooks/useData";
import { useSelector } from "react-redux";

const Navbar = () => {
  const { mode, toggleMode, openDrawer } = useData();

  const cartItems = useSelector((state) => state.cart);

  const user = JSON.parse(localStorage.getItem("user"));

  const logout = () => {
    localStorage.clear("user");
    window.location.href = "/login";
  };

  return (
    <nav
      style={{
        backgroundColor: mode === "dark" ? "#282c34" : "white",
        color: mode === "dark" ? "white" : "",
      }}
      className="sticky top-0 z-10 w-screen"
    >
      <div className="mx-auto flex h-[72px] max-w-[1280px] items-center justify-between px-5">
        <div className="flex items-center gap-6">
          <FaBars
            onClick={openDrawer}
            size={25}
            className="block cursor-pointer pt-1 md:hidden"
          />
          <Link to="/">
            {" "}
            <h1 className="cursor-pointer text-[25px] font-bold">LootLo</h1>
          </Link>
        </div>
        <ul className="flex w-fit items-center justify-between space-x-10">
          <li className="hidden hover:cursor-pointer md:block">All Products</li>
          <li className="hidden hover:cursor-pointer md:block">
            <Link to="/order">Order</Link>
          </li>
          {user?.user.email === "chiragdevda999@gmail.com" ? (
            <li className="hidden hover:cursor-pointer md:block">
              <Link to="/dashboard">Admin</Link>
            </li>
          ) : (
            <></>
          )}
          {user ? (
            <li
              onClick={logout}
              className="hidden hover:cursor-pointer md:block"
            >
              Logout
            </li>
          ) : (
            <li className="hidden hover:cursor-pointer md:block">
              <Link to="/login">Login</Link>
            </li>
          )}
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
                {cartItems.length}
              </div>
            </div>
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
