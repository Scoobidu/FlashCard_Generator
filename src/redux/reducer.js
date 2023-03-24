import { ActionTypes } from "./action-types";

// const initialState = {id: 1,groupName: "web 1",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia voluptatem omnis, cupiditate accusantium ut eum nobis sint officiis est labore repudiandae ipsam nostrum rem, perspiciatis quo eaque, expedita ab",cards: [{ id: 1, term: "card 1", definition: "card 1 Definition" },{ id: 2, term: "card 2", definition: "card 2 Definition" },],};

let Flashcards = [
  {
    id: 1,
    name: "Web 1",
    description:
      "web 1 Description Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia, libero! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia, libero!",
    cards: [
      // {
      //   id: 100,
      //   term: "web 1 card 1",
      //   definition:
      //     "web 1 card 1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque commodi magni id porro earum, nesciunt facilis praesentium non ut ducimus?",
      // },
      // {
      //   id: 200,
      //   term: "web 1 card 2",
      //   definition:
      //     "web 1 card 2 Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque commodi magni id porro earum, nesciunt facilis praesentium non ut ducimus?",
      // },
      // {
      //   id: 300,
      //   term: "web 1 card 3",
      //   definition:
      //     "web 1 card 3 Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque commodi magni id porro earum, nesciunt facilis praesentium non ut ducimus?",
      // },
    ],
  },
  // {
  //   id: 2,
  //   name: "Web 2",
  //   description:
  //     "web 2 Description Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia, libero! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia, libero!",
  //   cards: [
  //     {
  //       id: 400,
  //       term: "web 1 card 1",
  //       definition:
  //         "web 1 card 1 Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque commodi magni id porro earum, nesciunt facilis praesentium non ut ducimus?",
  //     },
  //   ],
  // },
];
let lastId = Flashcards.length;

export function reducer(state = Flashcards, action) {
  switch (action.type) {
    case ActionTypes.ADD_CARDS:
      return [
        ...state,
        {
          id: ++lastId,
          name: action.payload.name,
          description: action.payload.description,
          cards: [],
        },
      ];
    case ActionTypes.ADD_CARDS_IN_cards:
      state[state.length - 1].cards = [
        ...state[state.length - 1].cards,
        action.payload.card,
      ];
      console.log(state);
    // state[state.length - 1].cards = action.payload.card;

    case ActionTypes.REMOVE_CARD:
      return state.filter((card) => card.id !== action.payload.id);
    default:
      return state;
  }
}
