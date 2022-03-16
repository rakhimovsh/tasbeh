import React, { createContext } from "react";

const Context = React.createContext(0);

function Provider({ children }) {
  const [count, setCount] = React.useState(0);
  return (
    <Context.Provider value={{ count, setCount }}>{children}</Context.Provider>
  );
}

export { Context, Provider };
