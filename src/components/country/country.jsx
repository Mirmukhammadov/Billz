import "./country.css";

function Country({ icon, text }) {
  return (
    <div className="country">
      <img src={icon} alt="" width={60} height={48} />
      <div className="country__info">
        <span className="country__span">{text}</span>
        <span className="info__span">yiliga</span>
      </div>
    </div>
  );
}

export default Country;
