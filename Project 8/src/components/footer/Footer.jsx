import { Link } from "react-router-dom";

import useData from "../../hooks/useData.jsx";
import LowerPanel from "./LowerPanel.jsx";
import { FooterLinks } from "../../constants";

const Footer = () => {
  const { mode } = useData();
  return (
    <footer
      className="text-gray-600 body-font bg-gray-300 mt-10"
      style={{
        backgroundColor: mode === "dark" ? "rgb(46 49 55)" : "",
        color: mode === "dark" ? "white" : "",
      }}
    >
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap md:text-left text-center order-first">
          {FooterLinks.map((item, i) => (
            <div key={i} className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2
                className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3"
                style={{ color: mode === "dark" ? "white" : "" }}
              >
                {item.title}
              </h2>
              <nav className="list-none mb-10">
                {item.list.map((list, i) => (
                  <li key={i}>
                    <Link
                      to={list.path}
                      className="text-gray-600 hover:text-gray-800"
                      style={{ color: mode === "dark" ? "white" : "" }}
                    >
                      {list.text}
                    </Link>
                  </li>
                ))}
              </nav>
            </div>
          ))}
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <img src="https://ecommerce-sk.vercel.app/pay.png" alt="" />
          </div>
        </div>
      </div>
      <LowerPanel />
    </footer>
  );
};

export default Footer;
