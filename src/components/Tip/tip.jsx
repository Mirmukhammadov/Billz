import React from "react";
import "./tip.css";

function Tip({ text, number }) {
  return (
    <div className="tip">
      <span></span>
      <div>
        <p className="tip__paragraph">{text}</p>
        <p className="tip-number">{number}</p>
      </div>
      {/* <span></span> */}
    </div>
  );
}

export default Tip;
