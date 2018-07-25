import React, { Component } from "react";

import { connect } from "react-redux";

import { addGroceryById, removeGroceryById, addMoneyById } from "../actions";

class ShoppingBag extends Component {

  displayShoppingBag = () => {
    return this.props.shoppingbag.length > 0 ? (
      <ul className="list-group">
        {this.props.shoppingbag.map((item) => (
            <li className="list-group-item" key={item.id} 
            onClick={() => {
              this.props.removeGroceryById(item.id);
              this.props.addMoneyById(item.id);
            }} >
              <b>{item.name}</b> - <span className="label label-info">£ {item.cost}</span> - <span className="label label-warning">{item.calories} kcal</span> - <span className="label label-primary">{item.weight} mg</span>             
            </li>
        ))}
      </ul>        
    ) : (
      <ul className="list-group">
        <li className="list-group-item">Please add some items to the bag!</li>
      </ul>        
    )
  }
  render() {
    return (
      <div className="col-md-4 bg-success section">
      <h2 className="text-center">Shopping Bag</h2>
          {this.displayShoppingBag()}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    shoppingbag: state.shoppingbag
  }
}

export default connect(mapStateToProps,{ addGroceryById, removeGroceryById, addMoneyById })(ShoppingBag);