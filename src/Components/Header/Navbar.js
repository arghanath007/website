import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import "./Navbar.scss";
import { ReactComponent as Logo } from "../../Assets/logo.svg";
import { auth } from "../../Firebase/firebaseUtilities";

const Navbar = ({ currentUser }) => (
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
    </div>
  </div>
);

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
});

export default connect(mapStateToProps)(Navbar);
