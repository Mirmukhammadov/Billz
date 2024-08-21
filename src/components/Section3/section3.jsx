import React from "react";

import InfoSection from "../infoSection/infoSection.jsx";
import AboutBIllz from "../aboutBillz/aboutBillz.jsx";
import MyButton from "../button/button.jsx";

import app from "../../assets/images/app.png";
import countries from "../../assets/images/countries.png";
import logos from "../../assets/images/logos.png";
import iconL from "../../assets/icons/Vector-left.svg";
import iconR from "../../assets/icons/Vector-right.svg";

import useMediaQuery from "@mui/material/useMediaQuery";
import "./section3.css";

function Section3() {
  const tablet = useMediaQuery("(min-width:1001px)");
  const tablet700 = useMediaQuery("(min-width: 701px)");
  return (
    <>
      <InfoSection
        bigSpan={true}
        span="#1"
        heading={
          <>
            BILLZ - Markaziy Osiyodagi{" "}
            <span>
              eng tez <br /> rivojlanayotgan
            </span>{" "}
            startaplardan biri
          </>
        }
        paragraph={
          <>
            BILLZ{" "}
            <span>moda do'konini avtomatlashtirish segmentida etakchi</span>{" "}
            hisoblanadi, shuningdek Toshkentdagi aksariyat savdo markazlarida
            eng mashhur avtomatlashtirish dasturi
          </>
        }
      />

      <div
        className={`aboutbillz-div  ${tablet ? "" : "aboutbillz-div-tablet"}`}
      >
        <AboutBIllz
          iconL={iconL}
          iconR={iconR}
          heading={
            <>
              Moda do'konlari uchun <span>#1</span> magazin   
            </>
          }
        />
        <AboutBIllz
          iconL={iconL}
          iconR={iconR}
          heading={
            <>
              22 savdo markazlarida <span>#1</span> dastur
            </>
          }
        />
        <AboutBIllz img={logos} span="2500" heading="dan ortiq do'konlar" />
        <AboutBIllz
          img={countries}
          span="5 mamlakatlar"
          heading="BILLZ dasturidan faol foydalanmoqda"
        />

        <AboutBIllz
          img={app}
          span="$500M+"
          heading="yiliga tranzaksiyalar miqdori  "
        />
        <AboutBIllz
          img={app}
          span="10M+"
          heading="yiliga tranzaksiyalar qayta ishlanadi"
        />
      </div>
      <MyButton primary={true} isOpen={tablet700 ? true : false}>
        Konsultatsiya uchun so'rov qoldirish
      </MyButton>
    </>
  );
}

export default Section3;
