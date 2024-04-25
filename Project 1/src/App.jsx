import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./Componets/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <div className="main-container xl:max-w-7xl m-auto flex items-center justify-center ">
        <div className="left flex flex-col md:gap-9">
          <h1 className="text-[108px] font-extrabold leading-[102px]">
            YOUR FEET DESERVE THE BEST
          </h1>
          <p className="w-[50%] text-sm font-normal">
            YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
            SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
            SHOES.
          </p>

          <div className="btns flex gap-7">
            <button className="border-1 border-solid py-2 px-7 bg-[#D01C28] text-white text-xm font-medium">
              Shop Now
            </button>
            <button className="border-[3px] border-slate-600 border-solid py-2 px-7">
              Category
            </button>
          </div>

          <div className="AvailableOn flex flex-col gap-4">
            <p className="ml-1 text-sm text-slate-600">Also Available on</p>
            <div className="sites flex gap-3">
              <img className="h-6" src="images/flipkart.png" alt="" />
              <img className="h-6" src="images/amazon.png" alt="" />
            </div>
          </div>
        </div>
        <img className="brand-shoe" src="images/shoe_image.png" alt="" />
      </div>
    </>
  );
}

export default App;
