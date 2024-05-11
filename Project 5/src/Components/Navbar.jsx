import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-[#000000] py-3 text-white">
      <div className="myContainer flex items-center justify-between">
        <div className="logo text-xl">
          <span className="text-[#e77300]">&lt;</span>
          <span className="text-[#e77300]">Lock</span>
          <span className="text-[#16de00]">Vault&gt;</span>
        </div>
        <ul className="flex gap-4">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
