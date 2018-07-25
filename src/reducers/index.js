import grocery from "./grocery_reducer";
import shoppingBag from "./shoppingBag_reducer";
import pocketMoney from "./money_reducer";

import { combineReducers } from "redux";

const rootReducer = combineReducers({
  grocery,
  shoppingBag,
  pocketMoney
});

export default rootReducer;