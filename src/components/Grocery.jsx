import React, { Component } from "react";
import { connect } from "react-redux";

import { addGroceryById, removeMoneyById } from "../actions";

class Grocery extends Component {
  render() {
    return (
      <div className="col-md-4 bg-info section">
      <h2 className="text-center">Grocery Items</h2>
        <ul className="list-group">
          {this.props.grocery.map((item) => (
            <li className="list-group-item" key={item.id}
              onClick={() => {
                this.props.addGroceryById(item.id);
                this.props.removeMoneyById(item.id);
              }}
            >
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
    grocery: state.grocery
  }
}


export default connect(mapStateToProps, { addGroceryById, removeMoneyById })(Grocery);