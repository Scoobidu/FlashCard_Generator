import { ActionTypes } from "./action-types";

export const addCards = (data) => ({
  type: ActionTypes.ADD_CARDS,
  payload: data,
});

export const removeAllCard = (id) => {
  return {
    type: ActionTypes.REMOVE_CARD,
    payload: { id: id },
  };
};

export const addLocalCards = (data) => {
  return {
    type: ActionTypes.ADD_LOCAL_CARD,
    payload: data,
  };
};
