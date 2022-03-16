import "./Select.scss";
import React from "react";
import { Contex } from "../Contex/Select";

function Select() {
  const { selectValue, setSelectValue } = React.useContext(Contex);
  return (
    <select onChange={(evt) => setSelectValue(evt.target.value)}>
      <option value="istig`for">istig`for</option>
      <option value="salovat">salovat</option>
      <option value="hamd">hamd</option>
    </select>
  );
}

export default Select;
