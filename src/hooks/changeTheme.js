import { useEffect, useState } from "react";

const ChangeTheme = () => {
  const systemTheme = () => {
    const storageTheme = localStorage.getItem("theme");
    const windowMatch = window.matchMedia("(prefers-color-scheme: dark)")
      .matches
      ? "dark"
      : "light";
    return storageTheme || windowMatch;
  };

  const [theme, setTheme] = useState(systemTheme());

  useEffect(() => {
    localStorage.setItem("theme", theme);
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
