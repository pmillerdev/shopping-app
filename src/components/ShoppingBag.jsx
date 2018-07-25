import React, { Component } from "react";

import { connect } from "react-redux";

import { addGroceryById, removeGroceryById } from "../actions";

class ShoppingBag extends Component {
  render() {
    return (
      <div className="col-md-4">
      <h2 className="text-center">Shopping Bag</h2>
        <ul className="list-group">
          {this.props.shopping.map((item) => (
              <li className="list-group-item" key={item.id} onClick={() => this.props.removeGroceryById(item.id)}>
                <b>{item.name}</b> - <span className="label label-info">£ {item.cost}</span> - <span className="label label-warning">{item.calories} kcal</span> - <span className="label label-primary">{item.weight} mg</span>             
              </li>
          ))}
        </ul>        
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    shopping: state.shoppingBag
  }
}

export default connect(mapStateToProps,{ addGroceryById, removeGroceryById })(ShoppingBag);