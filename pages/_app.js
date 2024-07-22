import "../styles/globals.css";
import { useState } from "react";
import { ThemeProvider } from "next-themes";
import { IconContext } from "react-icons";
import GlobalContext from "../context/globalContext";

const App = ({ data, Component, pageProps }) => {
  const [globalState, setGlobalState] = useState({
    data: data,
    update,
  });

  function update(data) {
    setGlobalState(Object.assign({}, globalState, data));
  }

  return (
    <ThemeProvider>
      <IconContext.Provider value={{ style: { verticalAlign: "middle" } }}>
        <GlobalContext.Provider value={globalState}>
          <Component {...pageProps} />
        </GlobalContext.Provider>
      </IconContext.Provider>
    </ThemeProvider>
  );
};

export default App;
