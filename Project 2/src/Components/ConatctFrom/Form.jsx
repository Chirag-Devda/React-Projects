import React from "react";
import style from "../ConatctFrom/Form.module.css";
import Button from "../Buttons/Button";
import { MdOutlineMessage } from "react-icons/md";
import { IoCallSharp } from "react-icons/io5";

const Form = () => {
  return (
    <section className={`${style.container}`}>
      <div className={style.Details_container}>
        <div className={style.call_Chat_Btns}>
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
        <form action="">
          <div className={style.Form_Inputs}>
            <div className={style.input_Container}>
              <label htmlFor="Name">
                <span>Name</span>
              </label>
              <input type="text" name="Name" />
            </div>
            <div className={style.input_Container}>
              <label htmlFor="Email">
                <span>E-mail</span>
              </label>
              <input type="Email" name="Email" />
            </div>
            <div className={style.input_Container}>
              <label htmlFor="TEXT">
                <span>TEXT</span>
              </label>
              <textarea name="TEXT" rows={6}></textarea>
            </div>
          </div>
          <div className={style.Submit_Container}>
            <Button text="Submit" />
          </div>
        </form>
      </div>
      <div className={style.img_Container}>
        <div className={style.Img1}>
          <img src="Images/Service 24_7-pana 1.svg" alt="Conatct image" />
        </div>
      </div>
    </section>
  );
};

export default Form;
