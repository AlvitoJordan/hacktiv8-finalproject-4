import React from "react";
import { NavBar } from "../organisms";
import { Footer } from "../molecules";
import Search from "../../requirement/Search";

const Layout = ({ children }) => {
  const handleSearch = (searchValue) => {
    console.log("Search Value:", searchValue);
  };
  return (
    <div className=" bg-white dark:bg-gradient-to-t dark:from-black dark:from-80%  dark:to-darkRed min-h-screen">
      <NavBar>
        <Search onSearch={handleSearch} />
      </NavBar>
      <main className="p-10 ">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
