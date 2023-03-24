import React from "react";
import { useEffect, useState } from "react";
// import store from "../redux/store";
// import { addCardsInCards } from "../redux/actions";
import uuid from "react-uuid";
// import { useSelector } from "react-redux";

// const createCards = (card) => {
//   var cards = [];
//   console.log(card);
//   var cards = [...cards, card];
//   console.log(cards);
// };

function InputField({
  val,
  active,
  create,
  setCreate,
  cards,
  setCards,
  updateCard,
}) {
  // const Flashcards = useSelector((state) => state);

  // const innerId = uuid();

  const [term, setTerm] = useState("");
  const [definition, setDefinition] = useState("");
  // const [termArr, setTermArr] = useState([]);
  // const [definitionArr, setDefinitionArr] = useState([]);
  const [card, setCard] = useState({ id: "", terms: "", definition: "" });

  const DefaultCondition = () => {
    setCreate(false);
    setTerm("");
    setDefinition("");
  };

  useState(() => {
    if (create) {
      const newCard = { id: val, term, definition };
      updateCard(newCard);
    }
  }, [create]);

  // useEffect(() => {
  //   if (create && term) {
  //     setCard({ innerId, term, definition });
  //   }
  // }, [create]);

  // useEffect(() => {
  //   if (term.length > 0) {
  //     // setCard({ val, term, definition });
  //     setCard((prevArray) => {
  //       const updatedArray = [...prevArray];
  //       updatedArray[val] = { val, term, definition };
  //       return updatedArray;
  //     });
  //     // setCards([...cards, { id: val, terms: term, definition: definition }]);
  //     // console.log(term);
  //     // console.log(definition);
  //   }
  // }, [term, definition]);

  // useEffect(() => {
  //   if (create) {
  //     setCards({ ...cards, card });
  //   }
  // }, [create]);

  // useEffect(() => {
  //   setCards([...cards, card]);
  //   // console.log(Flashcards[Flashcards.length - 1]);
  //   // store.dispatch(addCardsInCards(card));
  //   // DefaultCondition();
  // }, [create]);

  return (
    <div className='relative md:flex block my-5 space-x-7'>
      <div className=''>
        <button className='numberTag px-3 mt-2 mb-8'>{val}</button>
      </div>
      <div className='lowerInput flex flex-col space-y-3'>
        <label className='h3' htmlFor='create'>
          Enter Terms*
        </label>
        <input
          disabled={!active}
          className='terms input leading-8'
          type='text'
          name='terms'
          value={term}
          onChange={(e) => setTerm(e.target.value)}
        />
      </div>
      <div className='lowerInput flex flex-col space-y-3'>
        <label className='h3 ' htmlFor='definition'>
          Enter Definition*
        </label>
        <input
          disabled={!active}
          className='definition input leading-8 '
          type='text'
          name='definition'
          value={definition}
          onChange={(e) => setDefinition(e.target.value)}
        />
      </div>
      <div className='image_sec'>
        <div className='sel_image '>
          <button disabled className='btn1 w-36'>
            <h3 className='p-1'>Select Image</h3>
            <input disabled type='file' accept='image/*' />
          </button>
        </div>
        <img className='display_image' alt='mj' />
      </div>
    </div>
  );
}

function CardInput({
  bottomCardCounter,
  active,
  create,
  setCreate,
  cards,
  setCards,
  updateCard,
}) {
  // console.log(`2nd ${props.active}`);
  return bottomCardCounter.map((val) => (
    <InputField
      key={val}
      val={val}
      bottomCardCounter={bottomCardCounter}
      active={active}
      create={create}
      setCreate={setCreate}
      cards={cards}
      setCards={setCards}
      updateCard={updateCard}
    />
  ));
}

export default CardInput;
