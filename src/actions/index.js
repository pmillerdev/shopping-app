export const ADD_GROCERY = "ADD_GROCERY";
export const REMOVE_GROCERY = "REMOVE_GROCERY";
export const ADD_MONEY = "ADD_MONEY";
export const REMOVE_MONEY = "REMOVE_MONEY";

export const addGroceryById = (id) => {
  const action = {
    type: ADD_GROCERY,
    id,
  };
  return action;
};

export const removeGroceryById = (id) => {
  const action = {
    type: REMOVE_GROCERY,
    id,
  };
  return action;
};

export const addMoneyById = (id) => {
  const action = {
    type: ADD_MONEY,
    id,
  };
  return action;
};

export const removeMoneyById = (id) => {
  const action = {
    type: REMOVE_MONEY,
    id,
  };
  return action;
};
