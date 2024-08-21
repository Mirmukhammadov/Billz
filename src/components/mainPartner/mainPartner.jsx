import React from "react";

// import tip1 from "../../assets/icons/tip1.svg";
import MyButton from "../button/button.jsx";
import Tip from "../Tip/tip.jsx";

import useMediaQuery from "@mui/material/useMediaQuery";

import "./mainPartner.css";

function mainPartner({ heading, paragraph, icon }) {
  const tablet = useMediaQuery("(min-width:701px)");
  return (
    <div className="mainPartner">
      <div className="mainPartner-info">
        <img src={icon} alt="" />
        <h3>{heading}</h3>
        <p>{paragraph}</p>
      </div>
      <div className="tips-div">
        <Tip text="Вложения" number="$100" />
        <Tip text="Занятость" number="20-30 часов/месяц" />
        <Tip text="Кол-во клиентов" number="5-6 клиентов/месяц" />
      </div>

      <h3 className="mainPartner-heading">Как зарабатывает партнер?</h3>

      <div className="tips-div">
        <Tip
          text="Подключение
и обучение под ключ"
          number="$50-$100"
        />
        <Tip text="Составление списка товаров" number="$20/день" />
        <Tip text="Продажа оборудования" number="$50-$150/магазин" />
        <Tip
          text="Портфельный доход
(при 100+ клиентах)"
          number="$300-$2 000"
        />
      </div>

      <div>
        <MyButton primary={true} isOpen={tablet ? true : false}>
          So'rov qoldirish
        </MyButton>
      </div>
    </div>
  );
}

export default mainPartner;
