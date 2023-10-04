import React, { Component } from "react";
import { connect } from "react-redux";

import GroceryItem from "./GroceryItem";
import { addGroceryById, removeMoneyById } from "../actions";

class Groceries extends Component {
  render() {
    return (
      <div className="col-md-4 bg-info">
        <h2 className="text-center">Grocery Items</h2>
        <ul className="list-group groceries-group">
          {this.props.groceries.map((item) => (
            <GroceryItem
              key={item.id}
              grocery={item}
              onclick={() => {
                this.props.addGroceryById(item.id);
                this.props.removeMoneyById(item.id);
              }}
            />
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    groceries: state.groceries,
  };
};

export default connect(mapStateToProps, { addGroceryById, removeMoneyById })(
  Groceries
);
