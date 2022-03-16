import "./Button";
import React from "react";
import { Context } from "../Contex/Contex";
import { modalContext } from "../Contex/ModalContext";
import { Button as Btn } from "@mui/material";
import { Contex as istigforContext } from "../Contex/IstigforContex";
import { Contex as SelectContex } from "../Contex/Select";
import { Context as SalovatContext } from "../Contex/SalovatContext";
import { Context as HamdContext } from "../Contex/HamdContext";
function Button() {
  const { count, setCount } = React.useContext(Context);
  const { modalClass, setModalClass } = React.useContext(modalContext);
  const { istigfor, setIstigfor } = React.useContext(istigforContext);
  const { selectValue, setSelectValue } = React.useContext(SelectContex);
  const { salovat, setSalovat } = React.useContext(SalovatContext);
  const { hamd, setHamd } = React.useContext(HamdContext);

  React.useEffect(() => {
    if (count > 33) {
      setCount(0);
      setModalClass(true);
      if (selectValue == "istig`for") {
        window.localStorage.setItem("istigfor", istigfor + 1);
        setIstigfor(istigfor - 0 + 1);
      } else if (selectValue == "salovat") {
        window.localStorage.setItem("salovat", salovat - 0 + 1);
        setSalovat(salovat - 0 + 1);
      } else if (selectValue === "hamd") {
        window.localStorage.setItem("hamd", hamd - 0 + 1);
        setHamd(hamd - 0 + 1);
      }
    }
  });
  return (
    <Btn variant="contained" onClick={() => setCount(count + 1)}>
      Count {count}
    </Btn>
  );
}

export default Button;
