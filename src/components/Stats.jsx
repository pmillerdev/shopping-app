import React, { Component } from "react";

import { connect } from "react-redux";

class Stats extends Component {
  getTotalCost = items => {
    let totalCost = 0;
    items.forEach(item => totalCost += item.cost)
    return totalCost;
  }
  
  getTotalCalories = items => {
    let totalCalories = 0;
    items.forEach(item => totalCalories += item.calories)
    return totalCalories;
  }
  
  getTotalWeight = items => {
    let totalWeight = 0;
    items.forEach(item => totalWeight += item.weight)
    return totalWeight;
  };  

  render() {
    const shopping = this.props.shoppingbag;
    return (
      <div className="col-md-3 bg-danger section">
      <h2 className="text-center">Shopping Statistics</h2>
        <ul className="list-group">
          <li className="list-group-item">Cost - £{this.getTotalCost(shopping)}</li>
          <li className="list-group-item">Calories - {this.getTotalCalories(shopping)} kcal</li>
          <li className="list-group-item">Weight - {this.getTotalWeight(shopping)} mg</li>
        </ul>        
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    shoppingbag: state.shoppingbag
  }
}

export default connect(mapStateToProps, null)(Stats);