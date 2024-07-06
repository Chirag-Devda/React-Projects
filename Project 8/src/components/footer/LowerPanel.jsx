import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

import useData from "../../hooks/useData";
import { Link } from "react-router-dom";

const LowerPanel = () => {
  const icons = [
    <FaFacebookF />,
    <FaTwitter />,
    <FaInstagram />,
    <FaLinkedinIn />,
  ];
  const { mode } = useData();
  return (
    <div
      className="bg-gray-200"
      style={{
        backgroundColor: mode === "dark" ? "rgb(55 57 61)" : "",
        color: mode === "dark" ? "white" : "",
      }}
    >
      <div className="container px-5 py-3 mx-auto flex items-center sm:flex-row flex-col">
        <Link to={"/"} className="flex">
          <div className="flex ">
            <h1
              className=" text-2xl font-bold text-black  px-2 py-1 rounded"
              style={{ color: mode === "dark" ? "white" : "" }}
            >
              LootLo
            </h1>
          </div>
        </Link>
        <p
          className="text-sm text-gray-500 sm:ml-6 sm:mt-0 mt-4"
          style={{ color: mode === "dark" ? "white" : "" }}
        >
          © 2023 LootLo —
          <a
            href="https://twitter.com/knyttneve"
            rel="noopener noreferrer"
            className="text-gray-600 ml-1"
            target="_blank"
            style={{ color: mode === "dark" ? "white" : "" }}
          >
            www.lootlo.com
          </a>
        </p>
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
          {icons.map((icon, index) => (
            <a key={index} href="#" className="ml-3 text-gray-500">
              {icon}
            </a>
          ))}
        </span>
      </div>
    </div>
  );
};

export default LowerPanel;
