import React, { Component } from "react";
import { connect } from "react-redux";

import GroceryItem from "./GroceryItem";
import { addGroceryById, removeGroceryById, addMoneyById } from "../actions";

class ShoppingBag extends Component {
  render() {
    return (
      <div className="col-md-4 bg-success section">
        <h2 className="text-center">Shopping Bag</h2>
        {this.props.shoppingbag.length > 0 ? (
          <ul className="list-group">
            {this.props.shoppingbag.map((item) => (
              <GroceryItem key={item.id} grocery={item} onclick={() => {
                this.props.removeGroceryById(item.id);
                this.props.addMoneyById(item.id);
              }} />
            ))}
          </ul>        
        ) : (
          <ul className="list-group">
            <li className="list-group-item">Please add some items to the bag!</li>
          </ul>        
        )}
    </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    shoppingbag: state.shoppingbag
  }
}

export default connect(mapStateToProps, { addGroceryById, removeGroceryById, addMoneyById })(ShoppingBag);