import React from "react";

const Navbar = () => {
  return (
    <nav className="Nav-Container flex items-center justify-around py-3 ">
      <div className="nav-logo">
        <img src="/images/brand_logo.png" alt="" />
      </div>
      <ul className="nav-links flex ">
        <a href="#" className="mx-3">
          <li>Home</li>
        </a>
        <a href="#" className="mx-3">
          <li>Location</li>
        </a>
        <a href="#" className="mx-3">
          <li>About</li>
        </a>
        <a href="#" className="mx-3">
          <li>Contact</li>
        </a>
      </ul>
      <div>
        <button className="login-btn bg-[#D01C28] text-white px-3 py-1 text-sm">
          Login
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
