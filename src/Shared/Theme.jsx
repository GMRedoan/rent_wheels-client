import { useState, useEffect } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

const Theme = () => {
  const getInitialTheme = () => {
    const saved = localStorage.getItem("theme");
    if (saved === "light" || saved === "dark") return saved;
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    return prefersDark ? "dark" : "light";
  };

  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === "light" ? "dark" : "light"));
  };

  return (
<button
  onClick={toggleTheme}
  className="flex items-center justify-center cursor-pointer"
  aria-label="Toggle Theme"
>
  <p>Light</p>
  <input
    type="checkbox"
    className="toggle border-white bg-primary checked:border-black checked:bg-white checked:text-black mx-2"
    checked={theme === "dark"}
    readOnly
  />
  <p>Dark</p>
</button>
  );
};

export default Theme;
