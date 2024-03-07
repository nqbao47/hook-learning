import { useState, createContext } from "react";

const ThemeContext = createContext();

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("dark");

  const handleToggle = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const value = {
    theme,
    handleToggle,
  };

  return (
    <>
      <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
    </>
  );
}

export { ThemeProvider, ThemeContext };
