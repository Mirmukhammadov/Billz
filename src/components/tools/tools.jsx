import React from "react";
import tovar from "../../assets/icons/tovar.svg";

import "./tools.css";
function Tools() {
  return (
    <div className="tools">
      <img src={tovar} alt="" />
      <p>Tovarlarni boshqarish</p>
    </div>
  );
}

export default Tools;
