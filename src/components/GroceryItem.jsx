import React from "react";
import PropTypes from "prop-types";

const GroceryItem = ({ grocery, onclick }) => (
  <li className="list-group-item" onClick={onclick}>
    <b>{grocery.name}</b> -{" "}
    <span className="label label-info">£ {grocery.cost}</span> -{" "}
    <span className="label label-warning">{grocery.calories} kcal</span> -{" "}
    <span className="label label-primary">{grocery.weight} mg</span>
  </li>
);

GroceryItem.propTypes = {
  grocery: PropTypes.object.isRequired,
  onclick: PropTypes.func,
};

export default GroceryItem;
