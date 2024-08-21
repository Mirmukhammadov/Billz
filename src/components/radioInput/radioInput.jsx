import React from "react";
import "./radioInput.css";

function radioInput() {
  return (
    <div className="radioInput">
      <p>Hozirda biznesingiz bormi?</p>
      <div>
        <input type="radio" id="male" name="gender" value="male" />
        <label htmlFor="male">Ha</label>
        <input type="radio" id="female" name="gender" value="female" />
        <label htmlFor="female">Yoq</label>
      </div>
    </div>
  );
}

export default radioInput;
