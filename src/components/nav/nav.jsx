// import React from "react";
// import "./nav.css";

// function Nav({ isOpen, hamburger }) {
//   return (
//     <div className={`nav ${hamburger ? "show" : "hide"}`}>
//       <ul className="nav__list">
//         <li className="nav__item">
//           <a className="nav__button">Bozor salohiyati</a>
//         </li>
//         <li className="nav__item">
//           <a className="nav__button">Nima uchun BILLZ?</a>
//         </li>
//         <li className="nav__item">
//           <a className="nav__button">Hamkorlik turlari</a>
//         </li>
//       </ul>
//     </div>
//   );
// }

// export default Nav;

import React from "react";
import "./nav.css";

function Nav({ isOpen, hamburger }) {
  return (
    <div
      className={`nav ${isOpen ? "" : "row"} ${hamburger ? "show" : "hide"}`}
    >
      <ul className="nav__list">
        <li className="nav__item">
          <a className="nav__button">Bozor salohiyati</a>
        </li>
        <li className="nav__item">
          <a className="nav__button">Nima uchun BILLZ?</a>
        </li>
        <li className="nav__item">
          <a className="nav__button">Hamkorlik turlari</a>
        </li>
      </ul>
    </div>
  );
}

export default Nav;
