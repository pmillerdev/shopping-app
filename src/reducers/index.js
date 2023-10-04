import groceries from "./groceries";
import shoppingbag from "./shoppingbag";
import pocketmoney from "./pocketmoney";

import { combineReducers } from "redux";

const rootReducer = combineReducers({
  groceries,
  shoppingbag,
  pocketmoney,
});

export default rootReducer;
