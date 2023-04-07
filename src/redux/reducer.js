import { ActionTypes } from "./action-types";

let Flashcards = [];

//----------- generating 2 random numbers ------------
let randomNum = Math.floor(Math.random() * 90) + 10;

export function reducer(state = Flashcards, action) {
  switch (action.type) {
    case ActionTypes.ADD_CARDS:
      //--------- adding data in the local storage ------------
      localStorage.setItem(
        "allCards",
        JSON.stringify([
          ...state,
          {
            id: `${action.payload.group}${randomNum}`,
            group: action.payload.group,
            description: action.payload.description,
            cards: action.payload.cards,
          },
        ])
      );
      //--------- adding data in the store------------
      return [
        ...state,
        {
          id: `${action.payload.group}${randomNum}`,
          group: action.payload.group,
          description: action.payload.description,
          cards: action.payload.cards,
        },
      ];

    case ActionTypes.REMOVE_CARD:
      //----------- filtering and deleting flashcard ----------
      let updatedCards = state.filter((card) => card.id !== action.payload.id);
      localStorage.setItem("allCards", JSON.stringify(updatedCards));
      return updatedCards;

    case ActionTypes.ADD_LOCAL_CARD:
      //------------ adding cards to store grom local storage -----------
      return [...state, ...action.payload];

    default:
      return state;
  }
}
