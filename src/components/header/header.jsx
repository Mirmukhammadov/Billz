import React from "react";
import Nav from "../nav/nav";
import MyButton from "../button/button";
import billzLogo from "../../assets/logos/billz-logo.svg";
import uzbIcon from "../../assets/icons/uzb-flag.svg";
import Hamburger from "../../assets/icons/hamburger.svg";
import HamburgerClose from "../../assets/icons/hamburgerClose.svg";
import "./header.css";

import useMediaQuery from "@mui/material/useMediaQuery";

function Header() {
  const tablet = useMediaQuery("(min-width:1000px)");
  const mobile = useMediaQuery("(min-width:00px)");
  const [hamburger, setHamburger] = React.useState(false);

  React.useEffect(() => {
    if (tablet === true) {
      setHamburger(false);
    }
  }, [hamburger, tablet]);

  return (
    <div
      className={`container header  ${hamburger ? "header-res" : ""} ${
        !mobile ? "header-mob" : ""
      }`}
    >
      <img src={billzLogo} alt="logo" />
      <Nav isOpen={tablet} hamburger={hamburger} />
      <div className="header__button">
        <MyButton text="Hamkor bo'lish" primary={false} isChild={true}>
          <img src={uzbIcon} alt="" />
          UZ
        </MyButton>

        <MyButton text="Hamkor bo'lish" primary={false} isOpen={tablet}>
          Hamkor bo'lish
        </MyButton>
        <MyButton
          text="Hamkor bo'lish"
          primary={false}
          isOpen={!tablet}
          onClick={() => setHamburger((prev) => (prev = !prev))}
        >
          <img src={`${!hamburger ? Hamburger : HamburgerClose}`} alt="" />
        </MyButton>
      </div>
    </div>
  );
}

export default Header;
