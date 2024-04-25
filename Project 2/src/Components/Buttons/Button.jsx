import React from "react";
import style from "../Buttons/Button.module.css";
const Button = ({ text, icon, isoutline }) => {
  return (
    <div className={`${style.btnContainer}`}>
      <button className={isoutline ? style.isoutline : style.primaryBtn}>
        {icon}
        {text}
      </button>
    </div>
  );
};
export default Button;
