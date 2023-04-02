import { ActionTypes } from "./action-types";

let Flashcards = [];

export function reducer(state = Flashcards, action) {
  switch (action.type) {
    case ActionTypes.ADD_CARDS:
      localStorage.setItem(
        "allCards",
        JSON.stringify([
          ...state,
          {
            id: Math.random(),
            group: action.payload.group,
            description: action.payload.description,
            cards: action.payload.cards,
          },
        ])
      );
      return [
        ...state,
        {
          id: Math.random(),
          group: action.payload.group,
          description: action.payload.description,
          cards: action.payload.cards,
        },
      ];

    case ActionTypes.REMOVE_CARD:
      let updatedCards = state.filter((card) => card.id !== action.payload.id);
      localStorage.setItem("allCards", JSON.stringify(updatedCards));
      return updatedCards;

    case ActionTypes.ADD_LOCAL_CARD:
      return [...state, ...action.payload];

    default:
      return state;
  }
}
