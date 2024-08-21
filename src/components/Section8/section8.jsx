import React from "react";

import Partner from "../partner/partner.jsx";
import MyButton from "../button/button.jsx";
import Image from "../image/image.jsx";

import partnerImage from "../../assets/images/partner-image.png";
import "./section8.css";

import useMediaQuery from "@mui/material/useMediaQuery";
function Section8() {
  const tablet = useMediaQuery("(min-width:701px)");
  return (
    <div className="section8">
      <div className="container">
        <div className="section8-info">
          <h2>
            Hamkorlik dasturining <br /> <span>afzalliklari</span>
          </h2>
          <div className="section8-info-button">
            <MyButton primary={true} isOpen={tablet ? true : false}>
              So'rov qoldirish
            </MyButton>
          </div>
        </div>
        <div className="section-partner">
          <div className="section-partner-div">
            <Partner>
              Avtomatlashtirish sohasidagi <br />{" "}
              <span>eng yaxshi mahsulot</span>
            </Partner>
            <Partner>
              Avtomatlashtirish sohasidagi <br />{" "}
              <span>eng yaxshi mahsulot</span>
            </Partner>
            <Partner>
              Avtomatlashtirish sohasidagi <br />{" "}
              <span>eng yaxshi mahsulot</span>
            </Partner>

            <Partner>
              Avtomatlashtirish sohasidagi <br />{" "}
              <span>eng yaxshi mahsulot</span>
            </Partner>
            <Partner>
              Avtomatlashtirish sohasidagi <br />{" "}
              <span>eng yaxshi mahsulot</span>
            </Partner>
            <Partner>
              Avtomatlashtirish sohasidagi <br />{" "}
              <span>eng yaxshi mahsulot</span>
            </Partner>
          </div>
          <div className="section-partner-image">
            <img
              src={partnerImage}
              width={360}
              height={464}
              className="partner-image"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section8;
