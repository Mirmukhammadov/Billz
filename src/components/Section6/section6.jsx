import React from "react";
import InfoSection from "../infoSection/infoSection.jsx";
import MyButton from "../button/button.jsx";
import Image from "../image/image.jsx";
import firstImage from "../../assets/images/1.png";
import secondImage from "../../assets/images/section6-2.png";
import thirdImage from "../../assets/images/section6-3.png";
import fourthImage from "../../assets/images/section6-4.png";

import useMediaQuery from "@mui/material/useMediaQuery";

import "./section6.css";

function Section6() {
  const tablet = useMediaQuery("(min-width:701px)");
  return (
    <>
      <div className="section6">
        <InfoSection
          bigSpan={true}
          span="#4"
          heading={
            <>
              Biz har kuni{" "}
              <span>
                100 dan ortiq ulanish uchun <br /> so'rovlar
              </span>{" "}
              qabul qilamiz
            </>
          }
          paragraph={
            <>
              Har kuni <span>O'zbekistonning barcha viloyatlaridan</span> 100
              dan ortiq do'konlar <br /> BILLZ-ga ulanish uchun so'rov
              qoldirishadi
            </>
          }
        />
        <div className="image-div">
          <Image src={firstImage} width="244" height="296" />
          <Image src={secondImage} width="244" height="296" />
          <Image src={thirdImage} width="244" height="296" />
          <Image src={fourthImage} width="244" height="296" />
        </div>
        <div>
          <MyButton primary={true} isOpen={tablet ? true : false}>
            Konsultatsiya uchun so'rov qoldirish
          </MyButton>
        </div>
      </div>
    </>
  );
}

export default Section6;
