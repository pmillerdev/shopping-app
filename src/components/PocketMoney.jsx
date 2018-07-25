import React, { Component }  from "react";

import { connect } from "react-redux";

class PocketMoney extends Component {
  render() {
    return(
      <div>
        <h2 className="row text-center">You have <span className="label label-success">£{this.props.money}</span> to spend on groceries today.</h2>
        <hr />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    money: state.pocketmoney
  }
};


export default connect(mapStateToProps, null)(PocketMoney);