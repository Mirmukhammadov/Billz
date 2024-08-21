import React from "react";
import useMediaQuery from "@mui/material/useMediaQuery";

import "./infoSection.css";

function infoSection({ bigSpan, span, paragraph, heading }) {
  const tablet = useMediaQuery("(min-width:1000px)");
  const mobile = useMediaQuery("(min-width:700px)");
  return (
    <div
      className={`infoSection container ${!tablet ? "tablet" : ""} ${
        !mobile ? "mobile" : ""
      }`}
    >
      <span
        className={` infoSection__span ${
          bigSpan ? "infoSection__span-big" : ""
        }`}
      >
        {span}
      </span>
      <h1 className="infoSection__heading heading1">{heading}</h1>
      <p className="infoSection__paragraph">{paragraph}</p>
    </div>
  );
}

export default infoSection;
