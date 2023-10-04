import { ADD_GROCERY, REMOVE_GROCERY } from "../actions";
import { addToList } from "./helpers.js";

const shoppingbag = (state = [], action) => {
  switch (action.type) {
    case ADD_GROCERY:
      let shoppingbag = [...state, addToList(action.id)];
      return shoppingbag;
    case REMOVE_GROCERY:
      shoppingbag = state.filter((item) => item.id !== action.id);
      return shoppingbag;
    default:
      return state;
  }
};

export default shoppingbag;
