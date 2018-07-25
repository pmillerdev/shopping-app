import React, { Component } from 'react';

import Jumbotron from "./components/Jumbotron";
import PocketMoney from "./components/PocketMoney";
import Groceries from "./components/Groceries";
import ShoppingBag from "./components/ShoppingBag";
import Stats from "./components/Stats";

class App extends Component {
  render() {
    return (
      <div className="container">
        <Jumbotron />
        <PocketMoney />
        <div className="row">
          <Groceries />
          <ShoppingBag />
          <Stats />
        </div>
      </div>
    );
  }
}

export default App;
