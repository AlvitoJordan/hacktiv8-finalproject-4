import React from "react";
import { NavBar } from "../organisms";
import Footer from "../organisms/Footer";

const Layout = ({ children }) => {
  return (
    <div className="bg-white dark:bg-gradient-to-b dark:from-gray-800 dark:to-gray-950 min-h-screen">
      <NavBar />
      <div className="py-7"></div>
      <div className="p-10">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
