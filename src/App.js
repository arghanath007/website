import React from "react";
import { Switch, Route } from "react-router";
import ShopPage from "./Components/Shop/ShopPage";
import HomePage from "./Pages/HomePage/HomePage";

import "./App.css";
import Navbar from "./Components/Header/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
