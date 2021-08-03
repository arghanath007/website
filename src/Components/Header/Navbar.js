import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";
import { ReactComponent as Logo } from "../../Assets/logo.svg";

const Navbar = () => (
  <div className="navbar">
    <Link className="logo-container" to="/">
      <Logo className="logo" />
    </Link>
    <div className="links">
      <Link className="link" to="/shop">
        Shop
      </Link>
      <Link className="link" to="/contact">
        Contact
      </Link>
    </div>
  </div>
);

export default Navbar;
