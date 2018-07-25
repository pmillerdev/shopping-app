import React, { Component } from "react";

import { connect } from "react-redux";

class Stats extends Component {
  render() {
    return (
      <div className="col-md-4">
      <h2 className="text-center">Shopping Statistics</h2>
        <ul className="list-group">
          <li className="list-group-item">Cost - £</li>
          <li className="list-group-item">Calories - kcal</li>
          <li className="list-group-item">Weight - mg</li>
        </ul>        
      </div>
    )
  }
}

/*
const getTotalCost = items => {
}
*/

const mapStateToProps = state => {
  return {
    shoppingBag: state.shoppingBag
  }
}

export default connect(mapStateToProps, null)(Stats);