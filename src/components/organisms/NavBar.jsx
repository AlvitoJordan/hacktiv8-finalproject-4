import React from "react";
import { DarkLogo, WebLogo } from "../../assets";
import { Search } from "../molecules";
import { FaMoon, FaSun } from "react-icons/fa";
import { IconButton } from "../atoms";
import { ChangeTheme } from "../../hooks";

const NavBar = () => {
  const { theme, themeToggle } = ChangeTheme();

  return (
    <div className=" bg-white dark:bg-transparent flex flex-row w-full justify-between items-center py-3 px-5 shadow-lg dark:shadow-none">
      <div className="flex flex-row gap-10">
        <div className="hidden lg:block">
          {theme === "dark" ? <DarkLogo /> : <WebLogo />}
        </div>
        <Search />
      </div>
      {theme === "dark" ? (
        <IconButton type="light" onClick={themeToggle}>
          <FaSun size="25px" />
        </IconButton>
      ) : (
        <IconButton type="dark" onClick={themeToggle}>
          <FaMoon size="25px" />
        </IconButton>
      )}
    </div>
  );
};

export default NavBar;
