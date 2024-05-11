import React from "react";
import { useRef, useState, useEffect } from "react";

const Manager = () => {
  const ref = useRef();
  const [form, setform] = useState({ site: "", username: "", password: "" });
  const [passwordsArray, setpasswordsArray] = useState([]);

  useEffect(() => {
    let passwords = localStorage.getItem("passwordsArray");
    if (passwords) {
      setpasswordsArray(JSON.parse(passwords));
    }
  }, []);

  const showPassword = () => {
    alert("Show Password");
    ref.current.alt = "Show";
    console.log(ref.current.src);
    if (ref.current.src === "http://localhost:5173/hide_12682128.png") {
      ref.current.src = "eye_14266075.png";
    } else {
      ref.current.src = "hide_12682128.png";
      ref.current.alt = "Hide";
    }
  };

  const handleChange = (e) => {
    setform({ ...form, [e.target.name]: e.target.value });
  };

  const savepassword = () => {
    setpasswordsArray([...passwordsArray, form]);
    localStorage.setItem(
      "passwordsArray",
      JSON.stringify([...passwordsArray, form]),
    );
  };

  return (
    <main>
      <div className="absolute inset-0 -z-10 h-full  items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
      <div className="myContainer">
        <h1 className="text-center text-4xl">
          <span className="text-[#e77300]">&lt;</span>
          <span className="text-[#e77300]">Lock</span>
          <span className="text-[#16de00]">Vault&gt;</span>
        </h1>
        <p className="text-center text-white">Your Own Password Manager</p>

        <div className="flex w-full flex-col items-center gap-8 py-8 text-white">
          <input
            placeholder="Enter your Url"
            className=" w-full rounded-full px-4 text-black placeholder:text-black"
            type="text"
            onChange={handleChange}
            value={form.site}
            name="site"
          />
          <div className="flex w-full gap-5">
            <input
              placeholder="Enter Username"
              className="w-full rounded-full px-4 text-black placeholder:text-black"
              type="text"
              onChange={handleChange}
              value={form.username}
              name="username"
            />
            <div className="relative">
              <input
                placeholder="Enter Password"
                className="w-full rounded-full px-4 text-black placeholder:text-black"
                type="text"
                onChange={handleChange}
                value={form.password}
                name="password"
              />
              <div className="absolute right-[3px] top-0 cursor-pointer p-0.5">
                <img
                  ref={ref}
                  width={21}
                  src="hide_12682128.png"
                  alt="Hide"
                  onClick={showPassword}
                />
              </div>
            </div>
          </div>

          <button
            className="0077b6 flex w-fit items-center gap-4 rounded-full border border-blue-950  bg-[#f76623] px-4 py-2"
            onClick={savepassword}
          >
            <lord-icon
              src="https://cdn.lordicon.com/jgnvfzqg.json"
              trigger="hover"
            ></lord-icon>
            Add Password
          </button>
        </div>
        <h1 className="mb-3 text-3xl text-white">Your Passwords</h1>
        <div className="tablecontainer">
          {passwordsArray.length === 0 && (
            <div className="text-center text-2xl text-white ">
              No Passwords to show
            </div>
          )}
          {passwordsArray.length != 0 && (
            <table className="w-full table-auto overflow-hidden rounded-lg">
              <thead className="bg-[#e77300]">
                <tr className="w-13  text-center">
                  <th className="py-3">Sites</th>
                  <th className="py-3">Username</th>
                  <th className="py-3">Passwords</th>
                </tr>
              </thead>
              <tbody className="bg-[#16de00] text-white">
                {passwordsArray.map((item) => (
                  <tr key={item.site} className="text-center">
                    <td className="py-3">
                      <a href={item.site} target="_blank">
                        {item.site}
                      </a>
                    </td>
                    <td className="py-3">{item.username}</td>
                    <td className="py-3">{item.password}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </main>
  );
};

export default Manager;
