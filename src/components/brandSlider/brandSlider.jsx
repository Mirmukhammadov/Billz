import React from "react";

import button from "../../assets/images/brands/button.svg";
import calvin from "../../assets/images/brands/calvin.svg";
import lacoste from "../../assets/images/brands/lacoste.svg";
import levis from "../../assets/images/brands/levis.svg";
import loccitane from "../../assets/images/brands/loccitane.svg";
import marccain from "../../assets/images/brands/marccain.svg";
import tommy from "../../assets/images/brands/tommy.svg";
import vicco from "../../assets/images/brands/vicco.svg";
import yves from "../../assets/images/brands/yves.svg";

import bloom from "../../assets/images/brands/bloom.svg";
import garmin from "../../assets/images/brands/garmin.svg";
import inbazar from "../../assets/images/brands/inbazar.svg";
import marie from "../../assets/images/brands/marie.svg";
import nature from "../../assets/images/brands/nature.svg";
import pink from "../../assets/images/brands/pink.svg";
import rieker from "../../assets/images/brands/rieker.svg";

import "./brandSlider.css";

function BrandSlider() {
  return (
    <div className="brandslider">
      <marquee behavior="scroll" direction="left" scrollamount="10">
        <div className="brandslider-div">
          <img src={button} alt="Brand 1" />
          <img src={calvin} alt="Brand 2" />
          <img src={lacoste} alt="Brand 3" />
          <img src={levis} alt="Brand 4" />
          <img src={loccitane} alt="Brand 5" />
          <img src={marccain} alt="Brand 6" />
          <img src={pink} alt="Brand 7" />
          <img src={vicco} alt="Brand 8" />
          <img src={yves} alt="Brand 9" />
        </div>
      </marquee>
      <marquee behavior="scroll" direction="right" scrollamount="10">
        <div className="brandslider-div">
          <img src={bloom} alt="Brand 1" />
          <img src={garmin} alt="Brand 2" />
          <img src={inbazar} alt="Brand 3" />
          <img src={marie} alt="Brand 4" />
          <img src={nature} alt="Brand 5" />
          <img src={marccain} alt="Brand 6" />
          <img src={tommy} alt="Brand 7" />
          <img src={rieker} alt="Brand 8" />
          <img src={yves} alt="Brand 9" />
        </div>
      </marquee>
    </div>
  );
}

export default BrandSlider;
