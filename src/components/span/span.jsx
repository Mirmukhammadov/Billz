import React from "react";
import "./span.css";

function Span({ icon, children }) {
  return (
    <div className="span">
      <img src={icon} alt="" className="icon" />
      <p className="span__paragraph">{children}</p>
    </div>
  );
}

export default Span;
