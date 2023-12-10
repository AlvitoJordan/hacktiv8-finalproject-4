import React from "react";
import { NavBar } from "../organisms";
import { Footer } from "../molecules";

const Layout = ({ children }) => {
  return (
    <div className=" bg-white dark:bg-gradient-to-t dark:from-black dark:from-80%  dark:to-darkRed min-h-screen">
      <NavBar />
      <main className="p-10">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
