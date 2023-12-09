import React from "react";
import { WebLogo } from "../../assets";
import { Search } from "../molecules";
import ChangeTheme from "../../hooks/changeTheme";

const NavBar = () => {
  const { theme, themeToggle } = ChangeTheme();

  return (
    <div className="bg-white dark:bg-gray-900 flex flex-row w-full justify-between items-center py-3 px-5 shadow-lg">
      <WebLogo />
      <Search />
      {theme === "dark" ? (
        <button className="text-yellow-500" onClick={themeToggle}>
          Light Mode
        </button>
      ) : (
        <button className="text-yellow-500" onClick={themeToggle}>
          Dark Mode
        </button>
      )}
    </div>
  );
};

export default NavBar;
