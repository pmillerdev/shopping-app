import React, { Component } from 'react';
import Grocery from "./components/Grocery";
import ShoppingBag from "./components/ShoppingBag";
import Stats from "./components/Stats";
import PocketMoney from "./components/PocketMoney";

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="jumbotron text-center">
            <h1 className="display-4">Shopping Cart</h1>
            <p className="lead">Click on the grocery items to move them in to your shopping bag</p>
          </div>
        </div>
        <PocketMoney />
        <div className="row">
          <Grocery />
          <ShoppingBag />
          <Stats />
        </div>
      </div>
    );
  }
}

export default App;
