import React from "react";
import Cinput from "../cinput/cinput.jsx";
import RadioInput from "../radioInput/radioInput.jsx";

import MyButton from "../button/button.jsx";
import arrowRight from "../../assets/icons/arrow-right.svg";

import useMediaQuery from "@mui/material/useMediaQuery";

import "./forma.css";
function Forma({ style, toggle }) {
  const tablet = useMediaQuery("(min-width:701px)");
  return (
    <div
      className={`forma ${!tablet ? "forma-none" : " "} ${
        toggle ? "form-show" : ""
      }`}
    >
      <div className="container forma-div">
        <h2 className="forma__heading">
          Konsultatsiya uchun ariza qoldiringva bizning mutaxassislarimiz{" "}
          <span>bepul ma'lumot</span> berishadi
        </h2>
        <div className="">
          <div className="forma__input-div">
            <Cinput
              type="text"
              placeholder="Masalan, Ilon Mask"
              label="Sizning ismingiz va familiyangiz"
              id="name"
            />
            <Cinput
              type="number"
              placeholder="(ХХ) ХХХ ХХ ХХ"
              label="Telefon raqamingiz"
              id="name"
            />
          </div>

          <div className="forma__input-div">
            <Cinput
              type="text"
              placeholder="Nima uchun hamkor bo'lishni xohlayotganingizni tushuntiring"
              label="Nega hamkor bo'lishni xohlaysiz?"
              id="name"
            />
          </div>

          <div className="forma__input-div">
            {/* <Cinput
            type="text"
            placeholder="Masalan, Ilon Mask"
            label="Sizning ismingiz va familiyangiz"
            id="name"
          /> */}
            <RadioInput />
            <Cinput
              type="text"
              placeholder="Tajribani tasvirlab bering"
              label="Chakana savdoda qanday tajribangiz bor?"
              id="name"
            />
          </div>

          <div className="forma__input-div">
            <Cinput
              type="number"
              placeholder="Miqdorni kiriting"
              label="Sizning investitsiya  mablag'ingiz"
              id="name"
            />
            <Cinput
              type="number"
              placeholder="Vaqtni kiriting"
              label="Qancha vaqt ajratishga tayyorsiz?"
              id="name"
            />
          </div>
        </div>

        <div className="form-button">
          <MyButton primary={true} isOpen={true} isChild={true}>
            So'rov qoldirish
            <img src={arrowRight} alt="" />
          </MyButton>
        </div>
      </div>
    </div>
  );
}

export default Forma;
