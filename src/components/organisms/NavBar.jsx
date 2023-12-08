import React from "react";
import { WebLogo } from "../../assets";
import { Search } from "../molecules";

const NavBar = () => {
  return (
    <div className="bg-white flex flex-row w-full justify-between items-center py-3 px-5 shadow-lg">
      <WebLogo />
      <Search />
    </div>
  );
};

export default NavBar;
