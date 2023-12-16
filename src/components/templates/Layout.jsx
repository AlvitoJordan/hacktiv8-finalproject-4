import React from "react";
import { NavBar } from "../organisms";
import { Footer } from "../molecules";
import Search from "../../requirement/Search";
import { useNavigate } from "react-router-dom";
import { DropdownHooks, SearchingHooks } from "../../hooks";

const Layout = ({ children }) => {
  const { setSearchValue } = SearchingHooks("");
  const { setSelected } = DropdownHooks();
  const navigate = useNavigate();
  const handleSearch = (searchValue, selected) => {
    setSearchValue(searchValue);
    setSelected(selected);
    navigate("/", { state: { searchValue, selected } });
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
