import React from "react";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import Sidenav from "../sidenav/SideNav";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <Sidenav />
      <div className="content">{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
