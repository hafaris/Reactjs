import React, { createContext, useState } from "react";

// Create a new context
export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  // State to manage theme (light/dark)
  const [theme, setTheme] = useState("light");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children} {/* This allows children components to access the theme */}
    </ThemeContext.Provider>
  );
}
