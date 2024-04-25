import React from "react";
import style from "../Navbar/Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={`container`}>
      <div className={style.logo}>
        <img src="Images/3-removebg-preview.png" alt="" />
      </div>
      <ul>
        <a href="#">
          <li>Home</li>
        </a>
        <a href="#">
          <li>About</li>
        </a>
        <a href="#">
          <li>Contact</li>
        </a>
      </ul>
    </nav>
  );
};

export default Navbar;
