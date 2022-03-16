import React from "react";

const Contex = React.createContext();

function ProviderSelect({ children }) {
  const [selectValue, setSelectValue] = React.useState("istig`for");
  return (
    <Contex.Provider value={{ selectValue, setSelectValue }}>
      {children}
    </Contex.Provider>
  );
}

export { Contex, ProviderSelect };
