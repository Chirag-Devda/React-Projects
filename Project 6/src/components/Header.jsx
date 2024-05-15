import React from "react";
import { MdOutlineSearch } from "react-icons/md";
// 
// colors: {
//       Gray: "#5A5959",
//       rad: "#D01C28",
//       yellow: "#FFEAAE",
//       purple: "#5F00D9",
//     },
const Header = () => {
  return (
    <div className=" bg-[#5A5959]">
          <div className="myContainer  flex
      flex-col">
        <div className=" justify-center items-center h-[60px] bg-[#d2e449e3] flex rounded-[10px]">
          <div>
            <img width={51} src="images\MongoDB-Logo.png" alt="" />
          </div>
          <div className="font-bold text-[20px] ">MoongoDB Contact app</div>
              </div>
              <div className="search flex items-center justify-center gap-3">
                  <div className="relative py-[20px] ">
                      <span className="absolute top-7 left-3"><MdOutlineSearch fontSize={25} color="white"/></span>
                      <input className="border border-inherit placeholder:text-white text-white outline-none rounded-lg w-[280px] h-[40px] pl-12 bg-[#0000]" placeholder="Search contact" type="search" />
                  </div>
                 <div className="cursor-pointer bg-[#e4ff19e3] flex items-center justify-center rounded-[50%] h-10 w-10"><span className="font-bold relative bottom-1 text-[35px]">+</span></div>
              </div>
      </div>
    </div>
  );
};

export default Header;
