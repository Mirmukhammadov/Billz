import React from "react";
import "./aboutBillz.css";
// import app from "../../assets/images/app.png";

function AboutBillz({ iconL, iconR, img, heading, span }) {
  return (
    <div className="aboutBillz">
      <img className="aboutBillz-icon" src={iconL} alt="" />
      <div className="aboutBillz-info">
        <span>{span}</span>
        <h2
          className={` ${
            img ? "aboutBillz-heading-img" : "aboutBillz-heading"
          }`}
        >
          {heading}
        </h2>
      </div>
      <img className={img ? "aboutBillz-img" : ""} src={img} alt="" />
      <img
        className="aboutBillz-icon"
        src={iconR}
        alt=""
        style={{ paddingRight: iconR ? "16px" : "" }}
      />
    </div>
  );
}

export default AboutBillz;
