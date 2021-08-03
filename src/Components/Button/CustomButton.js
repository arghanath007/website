import React from "react";
import "./CustomButton.scss";

const CustomButton = ({ children, isGoogleSignIn, ...otherProps }) => (
  <button
    className={`${isGoogleSignIn ? "googleSignIn" : ""} customButton`}
    {...otherProps}
  >
    {children}
  </button>
);

export default CustomButton;
