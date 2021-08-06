import React, { Component } from "react";
import { Switch, Route, Redirect } from "react-router";
import ShopPage from "./Components/Shop/ShopPage";
import HomePage from "./Pages/HomePage/HomePage";
import CheckOutPage from "./Pages/Checkout/Checkout";

import { connect } from "react-redux";
import { setCurrentUser } from "./Redux/User/UserActions";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "./Redux/User/UserSelector";

import "./App.css";
import Navbar from "./Components/Header/Navbar";
import SignInAndSingUp from "./Components/SignInANDSignUp/SignInANDSignUpPage";

import { auth, createUserProfile } from "./Firebase/firebaseUtilities";

class App extends Component {
  unSubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unSubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfile(userAuth);
        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      } else {
        setCurrentUser(userAuth);
      }
    });
  }

  componentWillUnmount() {
    this.unSubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route exact path="/checkout" component={CheckOutPage} />
          <Route
            exact
            path="/signin"
            render={() =>
              this.props.currentUser ? <Redirect to="/" /> : <SignInAndSingUp />
            }
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
