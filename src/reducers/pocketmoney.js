import { ADD_MONEY, REMOVE_MONEY } from "../actions";
import { addToList } from "./helpers.js";

const pocketmoney = (state = 50, action) => {
  switch (action.type) {
    case ADD_MONEY:
      let item = addToList(action.id);
      let pocketMoney = state + item.cost;
      return pocketMoney;
    case REMOVE_MONEY:
      item = addToList(action.id);
      pocketMoney = state - item.cost;
      return pocketMoney;
    default:
      return state;
  }
};

export default pocketmoney;
