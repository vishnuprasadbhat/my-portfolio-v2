import "../styles/globals.css";
import { ThemeProvider } from "next-themes";
import { IconContext } from "react-icons";

const App = ({ Component, pageProps }) => {
  return (
    <ThemeProvider>
      <IconContext.Provider value={{ style: { verticalAlign: "middle" } }}>
        <Component {...pageProps} />
      </IconContext.Provider>
    </ThemeProvider>
  );
};

export default App;
