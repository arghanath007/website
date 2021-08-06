import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import "./Navbar.scss";
import { ReactComponent as Logo } from "../../Assets/logo.svg";
import { auth } from "../../Firebase/firebaseUtilities";
import CartIcon from "../CartIcon/CardIcon";
import CartDropDown from "../CartDropDown/CartDropDown";

const Navbar = ({ currentUser, hidden }) => (
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
      {currentUser ? (
        <div className="link" onClick={() => auth.signOut()}>
          SIGN OUT
        </div>
      ) : (
        <Link className="link" to="/signin">
          SIGN IN
        </Link>
      )}
      <CartIcon />
    </div>
    {hidden ? null : <CartDropDown />}
  </div>
);

const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({
  currentUser,
  hidden,
});

export default connect(mapStateToProps)(Navbar);
