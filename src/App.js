import React, { Component } from "react";
import { Switch, Route } from "react-router";
import ShopPage from "./Components/Shop/ShopPage";
import HomePage from "./Pages/HomePage/HomePage";

import { connect } from "react-redux";
import { setCurrentUser } from "./Redux/User/UserActions";

import "./App.css";
import Navbar from "./Components/Header/Navbar";
import SignIn from "./Components/SignInANDSignUp/SignInANDSignUpPage";

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
          <Route exact path="/shop" component={ShopPage} />
          <Route exact path="/signin" component={SignIn} />
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(null, mapDispatchToProps)(App);
