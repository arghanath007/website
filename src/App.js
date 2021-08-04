import React, { Component } from "react";
import { Switch, Route } from "react-router";
import ShopPage from "./Components/Shop/ShopPage";
import HomePage from "./Pages/HomePage/HomePage";

import "./App.css";
import Navbar from "./Components/Header/Navbar";
import SignIn from "./Components/SignInANDSignUp/SignInANDSignUpPage";

import { auth, createUserProfile } from "./Firebase/firebaseUtilities";

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentUser: "null",
    };
  }

  unSubscribeFromAuth = null;

  componentDidMount() {
    this.unSubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfile(userAuth);
        userRef.onSnapshot((snapShot) => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data(),
            },
          });
          console.log(this.state);
        });
      } else {
        this.setState({
          currentUser: userAuth,
        });
      }
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
