import "./Modal.scss";
import { modalContext } from "../Contex/ModalContext";
import React from "react";
import { Contex as selectContext } from "../Contex/Select";
import { Contex as istigforContext } from "../Contex/IstigforContex";
import { Context as SalovatContext } from "../Contex/SalovatContext";
import { Context as HamdContext } from "../Contex/HamdContext";

function Modal() {
  const { modalClass, setModalClass } = React.useContext(modalContext);
  const { selectValue } = React.useContext(selectContext);
  const { istigfor, setIstigfor } = React.useContext(istigforContext);
  const { salovat, setSalovat } = React.useContext(SalovatContext);
  const { hamd, setHamd } = React.useContext(HamdContext);
  let num = 0;
  if (selectValue === "istig`for") {
    num = istigfor;
  } else if (selectValue === "salovat") {
    num = salovat;
  } else if (selectValue === "hamd") {
    num = hamd;
  }
  return (
    <>
      <div id="myModal" className={`modal ${modalClass ? "open" : ""}`}>
        <div className="modal-content">
          <span className="close" onClick={() => setModalClass(false)}>
            &times;
          </span>
          <p>
            {selectValue}: {num}
          </p>
        </div>
      </div>
    </>
  );
}

export default Modal;
