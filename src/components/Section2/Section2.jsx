import InfoSection from "../infoSection/infoSection.jsx";
import Countries from "../countries/countries.jsx";

import MyButton from "../button/button.jsx";

import useMediaQuery from "@mui/material/useMediaQuery";

import "./Section2.css";

export default function Section2() {
  const matches = useMediaQuery("(min-width:1000px)");
  const tablet = useMediaQuery("(min-width:701px)");
  return (
    <div className="container section2">
      <InfoSection
        heading={
          <>
            Avtomatlashtirish - Markaziy Osiyodagi <br />{" "}
            <span>tez o'sayotgan </span> biznes segmenti
          </>
        }
        paragraph={
          <>
            Chakana sotuvchilarning <span>70% dan ortig'i</span> xisoblarni
            daftarlarda, Excel yoki eski dasturlarorqali olib boradi va{" "}
            <span>faol ravishda avtomatlashtirishga o'tmoqda</span>
          </>
        }
      />

      <Countries />

      <div>
        <MyButton primary={true} isOpen={tablet ? true : false}>
          Konsultatsiya uchun so'rov qoldirish
        </MyButton>
      </div>
    </div>
  );
}
