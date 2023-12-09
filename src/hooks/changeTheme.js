import { useEffect, useState } from "react";

const ChangeTheme = () => {
  const systemTheme = () => {
    const windowMatch = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    return windowMatch;
  };

  const isDarkTheme = systemTheme();
  const [theme, setTheme] = useState(isDarkTheme ? "dark" : "light");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const themeToggle = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return { theme, themeToggle };
};

export default ChangeTheme;
