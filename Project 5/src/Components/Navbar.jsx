import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-[#000000] py-3  text-white">
      <div className="md:myContainer flex items-center justify-around md:justify-between">
        <div className="logo text-xl">
          <span className="text-[#e77300]">&lt;</span>
          <span className="text-[#e77300]">Lock</span>
          <span className="text-[#16de00]">Vault&gt;</span>
        </div>

        <button
          className="right-4 flex items-center  justify-start 
         rounded-full border bg-[#6633ee] py-[4px] pr-[15px]"
        >
          <div>
            <img
              className="invert"
              width={55}
              src="icons/github-logo.png"
              alt="Github-Logo"
            />
          </div>
          <span className="text-brown-500 text-[19px] font-semibold">
            Github
          </span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
