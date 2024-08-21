import Country from "../country/country.jsx";

import Uz from "../../assets/icons/UZ.svg";
import Kz from "../../assets/icons/KZ.svg";
import Tj from "../../assets/icons/TJ.svg";
import Kg from "../../assets/icons/KG.svg";

import "./countries.css";

import useMediaQuery from "@mui/material/useMediaQuery";

export default function () {
  const matches = useMediaQuery("(min-width:1000px)");
  return (
    <div className={` countries ${!matches ? "countries-res" : ""}`}>
      <h2 className="countries_heading">
        Потенциал рынка автоматизации магазинов в странах Центральной Азии
      </h2>

      <div className="countries-div">
        <Country icon={Uz} text="$30M+" />
        <Country icon={Kz} text="$80M+" />
        <Country icon={Tj} text="$10M+" />
        <Country icon={Kg} text="$10M+" />
      </div>
    </div>
  );
}
