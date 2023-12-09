import React from "react";
import { DarkLogo, WebLogo } from "../../assets";
import { Search } from "../molecules";
import ChangeTheme from "../../hooks/changeTheme";
import { FaMoon, FaSun } from "react-icons/fa";
import { IconButton } from "../atoms";

const NavBar = () => {
  const { theme, themeToggle } = ChangeTheme();

  return (
    <div className="fixed z-10 bg-white dark:bg-gray-800 flex flex-row w-full justify-between items-center py-3 px-5 shadow-lg">
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
