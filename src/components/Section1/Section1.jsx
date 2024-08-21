import Header from "../header/header";

import InfoSection from "../infoSection/infoSection.jsx";
import Image from "../image/image.jsx";
import Span from "../span/span.jsx";
import MyButton from "../button/button.jsx";

import firstImage from "../../assets/images/1.png";
import icon1 from "../../assets/icons/iconcash.svg";

import useMediaQuery from "@mui/material/useMediaQuery";

function Section1() {
  const moreThan1100 = useMediaQuery("(min-width: 1101px)");
  const moreThan700 = useMediaQuery("(min-width: 701px)");
  return (
    <div className="main ">
      <Header />
      <InfoSection
        span="Hamkorlik Dasturi"
        heading={
          <>
            BILLZ bilan <br /> <span>$10 000 gacha</span> pul ishlang
          </>
        }
        paragraph="Markaziy Osiyodagi eng yaxshi do'konlarni avtomatlashtirish dasturi bilan IT biznesingizni boshlang"
      />
      <div className={`smth`}>
        <div className={`${moreThan1100 ? "span-div" : "span-div-res"}`}>
          <Span icon={icon1}>
            <span>2-chi oydan</span> boshlab foydaga chiqish
          </Span>
          <Span icon={icon1}>
            <span>2-chi oydan</span> boshlab foydaga chiqish
          </Span>
          <Span icon={icon1}>
            <span>2-chi oydan</span> boshlab foydaga chiqish
          </Span>
          <Span icon={icon1}>
            <span>2-chi oydan</span> boshlab foydaga chiqish
          </Span>
        </div>
        <div className="image-div container">
          <Image src={firstImage} />
          <Image src={firstImage} />
          <Image src={firstImage} />
          <Image src={firstImage} />
        </div>
      </div>
      <MyButton primary={true} isOpen={moreThan700 ? true : false}>
        Konsultatsiya uchun so'rov qoldirish
      </MyButton>
    </div>
  );
}

export default Section1;
