import React from "react";
import "./button.css";
import useMediaQuery from "@mui/material/useMediaQuery";

function MyButton({ children, primary, isChild, isOpen, onClick }) {
  const mobile = useMediaQuery("min-width: 700px");
  return (
    <>
      <button
        onClick={onClick}
        className={`${primary ? "primary" : "secondary"} ${
          isChild ? "isChild" : ""
        } ${isOpen ? "show" : "hide"} `}
      >
        {children}
      </button>
    </>
  );
}

export default MyButton;
