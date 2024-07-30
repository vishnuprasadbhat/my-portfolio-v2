"use client";
import { ThemeProvider } from "next-themes";
import { IconContext } from "react-icons";

const Providers = ({ children }) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark">
      <IconContext.Provider value={{ style: { verticalAlign: "middle" } }}>
        {children}
      </IconContext.Provider>
    </ThemeProvider>
  );
};

export default Providers;
