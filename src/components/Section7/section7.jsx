import React from "react";
import InfoSection from "../infoSection/infoSection.jsx";

import MyButton from "../button/button.jsx";
import euronews from "../../assets/images/magazines/euronews.svg";
import aifc from "../../assets/images/magazines/aifc.svg";
import vcru from "../../assets/images/magazines/vcru.svg";
import uza from "../../assets/images/magazines/uza.svg";
import we from "../../assets/images/magazines/we.svg";
import spot from "../../assets/images/magazines/spot.svg";
import itpark from "../../assets/images/magazines/itpark.svg";

import financeasia from "../../assets/images/magazines/financeasia.svg";
import kursiv from "../../assets/images/magazines/kursiv.svg";
import techniasia from "../../assets/images/magazines/techniasia.svg";
import technodeglobal from "../../assets/images/magazines/technodeglobal.svg";
import venture from "../../assets/images/magazines/venture.svg";

import useMediaQuery from "@mui/material/useMediaQuery";
import "./section7.css";

function Section7() {
  const tablet = useMediaQuery("(min-width:1001px)");
  return (
    <div className="section7">
      <InfoSection
        bigSpan={true}
        span="#5"
        heading={
          <>
            Mahalliy va xorijiy nashrlar <br />{" "}
            <span>BILLZ haqida yozmoqda</span>
          </>
        }
        paragraph={
          <>
            Yirik mahalliy va xalqaro nashrlar <br />
            <span>kompaniyamiz haqida maqolalar yozgan</span>
          </>
        }
      />

      <div className="magazine">
        <marquee
          behavior="scroll"
          direction="left"
          scrollamount={tablet ? 0 : 5}
        >
          <div className="magazine-div">
            <img src={euronews} alt="" />
            <img src={uza} alt="" />
            <img src={aifc} alt="" />
            <img src={vcru} alt="" />
            <img src={we} alt="" />
            <img src={spot} alt="" />
            <img src={itpark} alt="" />
          </div>
        </marquee>
        <marquee
          behavior="scroll"
          direction="left"
          scrollamount={tablet ? 0 : 5}
        >
          <div className="magazine-div">
            <img src={technodeglobal} alt="" />
            <img src={venture} alt="" />
            <img src={financeasia} alt="" />
            <img src={kursiv} alt="" />
            <img src={techniasia} alt="" />
          </div>
        </marquee>
      </div>

      <MyButton primary={true} isOpen={true}>
        Konsultatsiya uchun so'rov qoldirish
      </MyButton>
    </div>
  );
}

export default Section7;
