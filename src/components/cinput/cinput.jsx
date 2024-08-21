import React from "react";
import "./cinput.css";
function Cinput({ type, placeholder, label, id }) {
  return (
    <div className="input-div">
      <label htmlFor={id}>{label}</label>
      <input type={type} placeholder={placeholder} id={id} />
    </div>
  );
}

export default Cinput;
