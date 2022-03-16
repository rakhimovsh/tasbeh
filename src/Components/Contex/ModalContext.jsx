import React from "react";

const modalContext = React.createContext();

function ModalProvider({ children }) {
  const [modalClass, setModalClass] = React.useState(false);
  return (
    <modalContext.Provider value={{ modalClass, setModalClass }}>
      {children}
    </modalContext.Provider>
  );
}

export { modalContext, ModalProvider };
