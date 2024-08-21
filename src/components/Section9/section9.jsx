import MainPartner from "../mainPartner/mainPartner.jsx";
import "./section9.css";

import tip1 from "../../assets/icons/tip1.svg";
import tip2 from "../../assets/icons/tip2.svg";

function Section9() {
  return (
    <div className="section9">
      <h2 className="section9-heading">
        <span>Hamkorlik</span> turlari
      </h2>
      <div>
        <MainPartner
          heading="Xizmat hamkori"
          paragraph="Ulash va mijozlarga xizmat ko'rsatish bilan shug'ullanadi"
          icon={tip1}
        />
        <MainPartner
          heading="Savdo hamkori"
          paragraph="Sotish va mijozlarga xizmat ko'rsatish bilan shug'ullanadi"
          icon={tip2}
        />
      </div>
    </div>
  );
}

export default Section9;
