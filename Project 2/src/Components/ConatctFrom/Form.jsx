import React from "react";
import style from "../ConatctFrom/Form.module.css";
import Button from "../Buttons/Button";
import { MdOutlineMessage } from "react-icons/md";
import { IoCallSharp } from "react-icons/io5";
import { useForm } from "react-hook-form";

const Form = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    let r = await fetch("http://localhost:3000/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify(data),
    });
    console.log(data);
  };

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
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={style.Form_Inputs}>
            <div className={style.input_Container}>
              <label htmlFor="Name">
                <span>Name</span>
              </label>
              <input
                type="text"
                name="Name"
                {...register("Username", {
                  required: { value: true, message: "This feild is required" },
                  pattern: {
                    value: /^@[A-Za-z0-9_-]+\d{4,}$/,
                    message: "“Enter a username like @example1234.” ",
                  },
                })}
              />
              {errors.Username && (
                <span className="red flex justify-start py-2">
                  {errors.Username.message}
                </span>
              )}
            </div>
            <div className={style.input_Container}>
              <label htmlFor="Email">
                <span>E-mail</span>
              </label>
              <input
                type="Email"
                name="Email"
                {...register("Email", {
                  required: { value: true, message: "This feild is required" },
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: "! Please enter valid Email",
                  },
                })}
              />
              {errors.Email && (
                <span className="red flex justify-start py-2">
                  {errors.Email.message}
                </span>
              )}
            </div>
            <div className={style.input_Container}>
              <label htmlFor="TEXT">
                <span>TEXT</span>
              </label>
              <textarea name="TEXT" rows={6} {...register("Text")}></textarea>
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
