import groceryItemsList from "../data/groceryItems.json";

export const addToList = (id) => {
  let item = groceryItemsList.find((item) => item.id === id);
  return item;
};
