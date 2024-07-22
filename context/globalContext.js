import React from "react";

const GlobalContext = React.createContext({
  data: null,
  update: (data) => {},
});

export default GlobalContext;
