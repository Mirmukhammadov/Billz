import React from "react";

import "./main.css";

import Section1 from "../components/Section1/Section1.jsx";
import Section2 from "../components/Section2/Section2.jsx";
import Section3 from "../components/Section3/section3.jsx";
import Section4 from "../components/Section4/section4.jsx";
import Section5 from "../components/Section5/section5.jsx";
import Section6 from "../components/Section6/section6.jsx";
import Section7 from "../components/Section7/section7.jsx";
import Section8 from "../components/Section8/section8.jsx";
import Section9 from "../components/Section9/section9.jsx";
import WhyBillz from "../components/whyBillz/whyBillz.jsx";
import BrandSlider from "../components/brandSlider/brandSlider.jsx";
import Forma from "../components/forma/forma.jsx";
import Partner from "../components/partner/partner.jsx";
import MyButton from "../components/button/button.jsx";

import useMediaQuery from "@mui/material/useMediaQuery";

function Main() {
  // const moreThan1100 = useMediaQuery("(min-width: 1101px)");
  const moreThan700 = useMediaQuery("(min-width: 701px)");
  const [toggle, setToggle] = React.useState(false);

  React.useEffect(() => {
    console.log(toggle);
  }, [toggle]);
  return (
    <div className="main ">
      <div className="main-div" style={{ display: toggle ? "none" : "" }}>
        <Section1 /> {/* nice*/}
        <Section2 /> {/*   nice*/}
        <WhyBillz /> {/* nice*/}
        <Section3 /> {/*   nice*/}
        <Section4 />
        <Section5 />
        <Section6 />
        <Section7 />
        <Section8 />
        <Section9 />
      </div>

      <div
        className="main-button"
        style={{ display: !toggle ? "flex" : "none" }}
      >
        <MyButton
          primary={true}
          isOpen={moreThan700 ? false : true}
          onClick={() => setToggle((prev) => !prev)}
        >
          So'rov qoldirish
        </MyButton>
      </div>

      <Forma toggle={toggle} />
    </div>
  );
}

export default Main;
