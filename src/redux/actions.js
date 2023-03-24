import { ActionTypes } from "./action-types";

export const addCards = (name, description) => ({
  type: ActionTypes.ADD_CARDS,
  payload: {
    name: name,
    description: description,
  },
});
export const addCardsInCards = (card) => ({
  type: ActionTypes.ADD_CARDS_IN_cards,
  payload: {
    card: card,
  },
});
export const removeAllCard = (id) => {
  return {
    type: ActionTypes.REMOVE_CARD,
    payload: { id: id },
  };
};
