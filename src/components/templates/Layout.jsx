import React from "react";
import { NavBar } from "../organisms";

const Layout = ({ children }) => {
  return (
    <div className="bg-white dark:bg-black">
      <NavBar />
      <div className="p-10">{children}</div>
    </div>
  );
};

export default Layout;
