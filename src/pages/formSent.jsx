import React from "react";

import "./formSent.css";
import MyButton from "../components/button/button.jsx";

import logo from "../assets/logos/billz-logo.svg";
import formSent from "../assets/images/form-sent.svg";

function FormSent() {
  return (
    <div className="form-sent">
      <div>
        <img src={logo} alt="" />
      </div>

      <div className="form-sent-info">
        <div>
          <img src={formSent} alt="" />
        </div>
        <h2>Ilova muvaffaqiyatli yuborildi!</h2>
        <p>Menejerlarimiz tez orada siz bilan bog'lanadi!</p>
      </div>

      <div className="">
        <MyButton
          primary={true}
          isOpen={true}
          onClick={() => window.location.reload()}
        >
          Saytga qaytish
        </MyButton>
      </div>
    </div>
  );
}

export default FormSent;
