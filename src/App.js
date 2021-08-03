import React, { Component } from "react";
import { Switch, Route } from "react-router";
import ShopPage from "./Components/Shop/ShopPage";
import HomePage from "./Pages/HomePage/HomePage";

import "./App.css";
import Navbar from "./Components/Header/Navbar";
import SignIn from "./Components/SignInANDSignUp/SignInANDSignUpPage";

import { auth } from "./Firebase/firebaseUtilities";

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentUser: "null",
    };
  }

  unSubscribeFromAuth = null;

  componentDidMount() {
    this.unSubscribeFromAuth = auth.onAuthStateChanged((user) => {
      this.setState({ currentUser: user });

      console.log(user);
    });
  }

  componentWillUnmount() {
    this.unSubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Navbar currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop" component={ShopPage} />
          <Route exact path="/signin" component={SignIn} />
        </Switch>
      </div>
    );
  }
}

export default App;
