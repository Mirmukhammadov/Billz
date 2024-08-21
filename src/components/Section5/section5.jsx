import React from "react";
import InfoSection from "../infoSection/infoSection.jsx";
import BrandSlider from "../brandSlider/brandSlider.jsx";
import MyButton from "../button/button.jsx";
import "./section5.css";

import useMediaQuery from "@mui/material/useMediaQuery";

function Section5() {
  const tablet = useMediaQuery("(min-width:701px)");
  return (
    <>
      <InfoSection
        bigSpan={true}
        span="#3"
        heading={
          <>
            Eng katta <span>mahalliy</span> va <span>xalqaro</span> brendlar{" "}
            <br /> biz bilan ishlaydi
          </>
        }
        paragraph={
          <>
            <span>2500 dan ortiq do‘konlar</span> allaqachon BILLZ dan
            foydalanmoqda! Ular orasida hamma sevgan mahalliy brendlar ham,
            dunyoga mashhur xalqaro brendlar ham bor
          </>
        }
      />

      <BrandSlider />

      <MyButton primary={true} isOpen={tablet ? true : false}>
        Konsultatsiya uchun so'rov qoldirish
      </MyButton>
    </>
  );
}

export default Section5;
