import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./Componets/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <div className="max-w-5xl relative top-8 min-h-[80vh] max-h-full  m-auto flex">
        <div className="left  flex flex-col justify-around">
          <h1 className="text-7xl font-black">YOUR FEET DESERVE THE BEST</h1>
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
        <div className="right flex flex-col items-center justify-center relative right-20">
          <img
            className="w-[780px] h-[450px]"
            src="images/shoe_image.png"
            alt=""
          />
        </div>
      </div>
    </>
  );
}

export default App;
