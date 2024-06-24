import React from "react";
import { useRef, useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { v4 as uuidv4 } from "uuid";
import "/src/index.css";

const Manager = () => {
  const ref = useRef();
  const passwordRef = useRef();
  const [form, setform] = useState({ site: "", username: "", password: "" });
  const [passwordsArray, setpasswordsArray] = useState([]);

  useEffect(() => {
    let passwords = localStorage.getItem("passwordsArray");
    if (passwords) {
      setpasswordsArray(JSON.parse(passwords));
    }
  }, []);

  const savepassword = () => {
    if (form.site && form.username && form.password) {
      setpasswordsArray([...passwordsArray, { ...form, id: uuidv4() }]);
      localStorage.setItem(
        "passwordsArray",
        JSON.stringify([...passwordsArray, form]),
      );
      setform({ site: "", username: "", password: "" });
      toast.success("Password saved", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    } else {
      toast.error("Password not saved", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  };

  const Edit = (i, id) => {
    let currentObject = passwordsArray[i];
    setform(currentObject);
    let filter = passwordsArray.filter((item) => {
      return item.id != id;
    });
    setpasswordsArray(filter);
  };

  const CopyText = (text) => {
    toast.success("Copy to Clipboard", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
    navigator.clipboard.writeText(text);
  };

  const Delete = (id) => {
    let confirmed = confirm("Do you realy want to delete this password");
    if (confirmed) {
      toast.success("Password Deleted", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      let filter = passwordsArray.filter((item) => {
        return item.id !== id;
      });
      setpasswordsArray(filter);
      localStorage.setItem("passwordsArray", JSON.stringify(filter));
    }
  };

  const showPassword = () => {
    ref.current.alt = "Show";
    console.log(ref.current.src);
    if (ref.current.src === "http://localhost:5173/icons/hide_12682128.png") {
      ref.current.src = "icons/eye_14266075.png";
      passwordRef.current.type = "text";
    } else {
      ref.current.src = "icons/hide_12682128.png";
      passwordRef.current.type = "password";
      ref.current.alt = "Hide";
    }
  };

  const handleChange = (e) => {
    setform({ ...form, [e.target.name]: e.target.value });
  };
  return (
    <main className="bg max-h-ful: min-h-[83.3vh]">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      ></ToastContainer>

      <div className="lg:myContainer">
        <h1 className="text-center text-4xl">
          <span className="text-[#e77300]">&lt;</span>
          <span className="text-[#e77300]">Lock</span>
          <span className="text-[#16de00]">Vault&gt;</span>
        </h1>
        <p className="text-center text-white">Your Own Password Manager</p>

        <div className="flex w-full flex-col items-center gap-5  py-8 text-white md:gap-8">
          <input
            autoComplete="on"
            placeholder="Enter your Url"
            className=" w-full rounded-full px-4 text-black placeholder:text-black"
            type="text"
            onChange={handleChange}
            required
            value={form.site}
            name="site"
          />
          <div className="flex w-full flex-col  gap-5 md:flex-row">
            <input
              placeholder="Enter Username"
              className="w-full rounded-full px-4 text-black placeholder:text-black"
              type="text"
              onChange={handleChange}
              required
              value={form.username}
              name="username"
              autoComplete="on"
            />
            <div className="relative">
              <input
                placeholder="Enter Password"
                className="eye w-full appearance-none rounded-full px-4 text-black placeholder:text-black"
                type="password"
                onChange={handleChange}
                required
                value={form.password}
                ref={passwordRef}
                name="password"
                autoComplete="on"
              />
              <div className="absolute right-[3px] top-0 cursor-pointer p-0.5">
                <img
                  ref={ref}
                  width={21}
                  src="icons/hide_12682128.png"
                  alt="Hide"
                  onClick={showPassword}
                />
              </div>
            </div>
          </div>

          <button
            className="0077b6 flex w-fit items-center gap-2 rounded-full border border-blue-950  bg-[#f76623] px-4 py-2"
            onClick={savepassword}
          >
            <lord-icon
              src="https://cdn.lordicon.com/jgnvfzqg.json"
              trigger="hover"
            ></lord-icon>
            Save
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
                  <th className="py-3">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-[#16de00] text-white">
                {passwordsArray.map((item, i) => (
                  <tr key={i} className="text-center">
                    <td className="max-w-[100px] py-3">
                      <div className="relative flex items-center justify-center gap-3">
                        <span className="max-w-[70%] overflow-hidden text-ellipsis pl-4 text-[11px] md:text-xl">
                          <a href={item.site} target="_blank">
                            {item.site}
                          </a>
                        </span>
                        <div
                          className="absolute right-1 cursor-pointer"
                          onClick={() => CopyText(item.site)}
                        >
                          <img width={18} src="icons/copy.svg" alt="copy" />
                        </div>
                      </div>
                    </td>
                    <td className="max-w-[100px]  py-3">
                      <div className="relative flex items-center justify-center gap-3">
                        <span className="max-w-[60%] overflow-hidden text-ellipsis pl-4 text-[11px] md:text-xl">
                          {item.username}
                        </span>
                        <div
                          className="absolute right-1 cursor-pointer"
                          onClick={() => CopyText(item.username)}
                        >
                          <img width={18} src="icons/copy.svg" alt="copy" />
                        </div>
                      </div>
                    </td>
                    <td className="max-w-[100px]  py-3">
                      <div className="relative flex items-center justify-center gap-3">
                        <span className="max-w-[60%] overflow-hidden text-ellipsis pl-4 text-[11px] md:text-xl">
                          {item.password}
                        </span>
                        <div
                          className="absolute right-1  cursor-pointer "
                          onClick={() => CopyText(item.password)}
                        >
                          <img width={18} src="icons/copy.svg" alt="copy" />
                        </div>
                      </div>
                    </td>
                    <td className=" gap-3 py-3">
                      <div className="flex items-center justify-center gap-4">
                        <div
                          className="cursor-pointer"
                          onClick={() => {
                            Edit(i, item.id);
                          }}
                        >
                          <img width={18} src="icons/Edit.svg" alt="copy" />
                        </div>
                        <div
                          className="cursor-pointer"
                          onClick={() => {
                            Delete(item.id);
                          }}
                        >
                          <img width={18} src="icons/trash.svg" alt="copy" />
                        </div>
                      </div>
                    </td>
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
