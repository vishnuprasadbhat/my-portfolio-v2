"use client";
import React, { useEffect, useState } from "react";
import AnimatedCursor from "react-animated-cursor";
import { useTheme } from "next-themes";

const Cursor = () => {
  const theme = useTheme();
  const [mount, setMount] = useState();

  const getCusomColor = () => {
    if (theme.theme === "dark") {
      return "255, 255, 255";
    } else if (theme.theme === "light") {
      return "0, 0, 0";
    }
  };

  useEffect(() => {
    setMount(true);
  }, []);
  return (
    <>
      {mount && (
        <AnimatedCursor
          color={getCusomColor()}
          innerScale={0.7}
          outerScale={3}
        />
      )}
    </>
  );
};

export default Cursor;
