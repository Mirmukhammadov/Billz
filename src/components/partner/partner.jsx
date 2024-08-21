import React from "react";

import star from "../../assets/icons/star.svg";

import "./partner.css";

function Partner({ children }) {
  return (
    <div className="partner">
      <img src={star} alt="" />
      <p>{children}</p>
    </div>
  );
}

export default Partner;
