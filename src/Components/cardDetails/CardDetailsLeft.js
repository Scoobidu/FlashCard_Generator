import React from "react";
import "../../CSS/cardDetails/CardDetailsLeft.css";

function CardDetailsLeft(props) {
  const { cards } = props.details[0];

  const RenderLeftSide = cards.map((card) => {
    return (
      <a
        key={card.id}
        className={` ${card.term === props.activeCard ? "active" : ""}`}
        onClick={() => {
          props.setSelectID(card.id);
          props.setActiveCard(card.term);
        }}
        id={card.id}
      >
        {card.term}
      </a>
    );
  });

  return (
    <div className='container py-4 px-6'>
      <h1 className='heading h4'> Flashcards</h1>
      <hr className='w-full bg-gray-300 mt-2 mx-auto' />
      <div className='all-cards font-medium pt-4'>{RenderLeftSide}</div>
    </div>
  );
}
export default CardDetailsLeft;
