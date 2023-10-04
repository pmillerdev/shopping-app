import { ADD_GROCERY, REMOVE_GROCERY } from "../actions";
import { addToList } from "./helpers.js";
import groceryItemsList from "../data/groceryItems.json";

const groceries = (state = groceryItemsList, action) => {
  switch (action.type) {
    case ADD_GROCERY:
      let grocery = state.filter((item) => item.id !== action.id);
      return grocery;
    case REMOVE_GROCERY:
      grocery = [...state, addToList(action.id)];
      return grocery;
    default:
      return state;
  }
};

export default groceries;
