import React from "react";
import { NavBar } from "../organisms";

const Layout = ({ children }) => {
  return (
    <>
      <NavBar />
      <div className="p-10">{children}</div>
    </>
  );
};

export default Layout;
