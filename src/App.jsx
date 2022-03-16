import Select from "./Components/Select/Select";
import React from "react";
import "./App.scss";
import Button from "./Components/Button/Button";
import Modal from "./Components/Modal/Modal";
import { Provider } from "./Components/Contex/Contex";
import { ProviderSelect } from "./Components/Contex/Select";
import { ModalProvider } from "./Components/Contex/ModalContext";
import { Provider as IstigforProvider } from "./Components/Contex/IstigforContex";
import { Provider as SalovatProvider } from "./Components/Contex/SalovatContext";
import { Provider as HamdProvider } from "./Components/Contex/HamdContext";

function App() {
  const [text, setText] = React.useState("");
  const [hackText, setHackText] = React.useState(false);

  React.useEffect(() => {
    if (text === "hack") {
      setHackText(true);
    }
  }, [text]);

  return (
    <div className="container">
      <ModalProvider>
        <IstigforProvider>
          <SalovatProvider>
            <ProviderSelect>
              <HamdProvider>
                <Provider>
                  <Select />
                  <Button />
                  <Modal />
                </Provider>
              </HamdProvider>
            </ProviderSelect>
          </SalovatProvider>
        </IstigforProvider>
      </ModalProvider>
    </div>
  );
}

export default App;
