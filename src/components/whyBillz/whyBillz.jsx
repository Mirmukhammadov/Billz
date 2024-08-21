import React from "react";
import Marquee from "react-marquee-slider";
import "./whyBillz.css";

import useMediaQuery from "@mui/material/useMediaQuery";

function WhyBillz() {
  const tablet = useMediaQuery("(min-width:1000px)");
  const mobile = useMediaQuery("(min-width:700px)");
  return (
    <div className="marquee-container">
      <Marquee velocity={30} resetAfterTries={200} direction="ltr" loop={0}>
        <div className="marquee-item">
          <h1
            className={`${
              tablet ? "marquee-heading" : "marquee-heading-tablet"
            } ${mobile ? "" : "marquee-heading-mobile"}`}
          >
            Nima uchun <span>BILLZ bilan hamkorlikni</span> tanlash kerak? •
          </h1>
        </div>
        <div className="marquee-item">
          <h1
            className={`${
              tablet ? "marquee-heading" : "marquee-heading-tablet"
            } ${mobile ? "" : "marquee-heading-mobile"}`}
          >
            Nima uchun <span>BILLZ bilan hamkorlikni</span> tanlash kerak? •
          </h1>
        </div>
      </Marquee>
    </div>
  );
}

export default WhyBillz;
