import React from "react";
import style from "../ConatctFrom/Form.module.css";
import Button from "../Buttons/Button";
import { MdOutlineMessage } from "react-icons/md";
import { IoCallSharp } from "react-icons/io5";

const Form = () => {
  return (
    <section className={`${style.container}`}>
      <div className={style.contactOptionsBtn}>
        <Button
          text="VIA SUPPORT CHAT"
          icon={<MdOutlineMessage fontSize={"24px"} />}
        />
        <Button text="VIA CALL" icon={<IoCallSharp fontSize={"24px"} />} />
      </div>
      <Button
        isoutline={true}
        text="VIA EMAIL FORM"
        icon={<IoCallSharp fontSize={"24px"} />}
      />

      {/* <form action="">
        <div className="form-controler">
          <label htmlFor="Name">Name</label>
          <input type="text" name="Name" />
        </div>
      </form> */}
    </section>
  );
};

export default Form;
