import React from "react";

import InfoSection from "../infoSection/infoSection.jsx";
import Tools from "../tools/tools.jsx";
import MyButton from "../button/button.jsx";
import useMediaQuery from "@mui/material/useMediaQuery";

import "./section4.css";

function Section4() {
  const tablet = useMediaQuery("(min-width:701px)");
  return (
    <div className="section4">
      <div className="">
        <InfoSection
          bigSpan={true}
          span="#2"
          paragraph={
            <>
              BILLZ - bu <span>oddiy sozlash</span> va <span>o‘rganish</span>{" "}
              dasturi bo‘lib, do‘konni samaraliboshqarish uchun barcha zaruriy
              vositalarni o‘z ichiga oladi
            </>
          }
          heading={
            <>
              BILLZ - bu do'konni boshqarish <br /> uchun <span>oddiy</span> va
              {"    "}
              <span>qulay</span> dastur
            </>
          }
        />

        <div className="tools-div container">
          <Tools />
          <Tools />
          <Tools />
          <Tools />
          <Tools />
          <Tools />
          <Tools />
        </div>
        <div>
          <MyButton primary={true} isOpen={tablet ? true : false}>
            Konsultatsiya uchun so'rov qoldirish
          </MyButton>
        </div>
      </div>
    </div>
  );
}
export default Section4;
