import React from "react";

const Footer = () => {
  return (
    <footer className="fixed bottom-0 min-h-[68px] w-full bg-black py-2">
      <div className="myContainer flex flex-col items-center gap-2">
        <div className="logo text-xl">
          <span className="text-[#e77300]">&lt;</span>
          <span className="text-[#e77300]">Lock</span>
          <span className="text-[#16de00]">Vault&gt;</span>
        </div>
        <div className="message flex items-center gap-2 text-white">
          Code with
          <span className="relative top-[1px]">
            <img width={19} src="icons/heart.svg" alt="Heart" />
          </span>
          by Chirag Devda
        </div>
      </div>
    </footer>
  );
};

export default Footer;
