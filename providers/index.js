"use client";
import { ThemeProvider } from "next-themes";
import { IconContext } from "react-icons";

const Providers = ({ children }) => {
  return (
    <ThemeProvider>
      <IconContext.Provider value={{ style: { verticalAlign: "middle" } }}>
        {children}
      </IconContext.Provider>
    </ThemeProvider>
  );
};

export default Providers;
