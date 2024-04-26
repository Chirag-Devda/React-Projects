import React from "react";
import style from "../Buttons/Button.module.css";
const Button = ({ text, icon, isoutline }) => {
  return (
    <button className={isoutline ? style.isoutline : style.primaryBtn}>
      {icon}
      {text}
    </button>
  );
};
export default Button;
