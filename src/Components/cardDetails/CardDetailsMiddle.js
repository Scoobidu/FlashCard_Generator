import React, { useEffect, useState } from "react";
import card from "../../Images/card.jpg";
import { BsChevronLeft } from "react-icons/bs";
import { BsChevronRight } from "react-icons/bs";
import "../../CSS/cardDetails/CardDetailsMiddle.css";

function CardDetailsMiddle(props) {
  //--------- getting cards from carddetails component ---------
  const { cards } = props.details[0];

  // ------------ filtering flashcard -------------
  const RenderDetails = cards.filter((card) => card.id == props.leftSelected);
  let id = "";
  let definition = "";

  //----------- if card not present display first cards defination ---------
  if (RenderDetails && RenderDetails[0] && RenderDetails[0].id) {
    id = RenderDetails[0].id;
    definition = RenderDetails[0].defination;
  } else {
    definition = cards[0].defination;
  }

  // //------------ changing card using carosel -----------
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const currentIndex = cards.findIndex((card) => card.id === props.selectID);
    setIndex(currentIndex);
  }, [props.selectID]);

  //---------- funct to go to previous card ------------
  function handleLeftClick() {
    const prevIndex = (index - 1 + cards.length) % cards.length;
    props.setSelectID(cards[prevIndex].id);
    props.setActiveCard(cards[prevIndex].term);
  }

  //---------- funct to go to next card ------------
  function handleRightClick() {
    const nextIndex = (index + 1) % cards.length;
    props.setSelectID(cards[nextIndex].id);
    props.setActiveCard(cards[nextIndex].term);
  }

  return (
    <div>
      <div className='box2 middle-card'>
        {/* <img src={card} alt='card' className='card-img ' /> */}
        {/*---------- displaying defination ----------*/}
        <p className='p-5 text-gray-700 '>{definition}</p>
      </div>
      <div className='turn flex place-content-center p-6 text-gray-500 select-none'>
        {/*------------ left carosel -------------*/}
        <div className='pt-1' onClick={handleLeftClick}>
          <BsChevronLeft />
        </div>
        <p className='px-5'>
          {index + 1} / {cards.length}
        </p>
        {/*------------ right carosel -------------*/}
        <div className='pt-1' onClick={handleRightClick}>
          <BsChevronRight />
        </div>
      </div>
    </div>
  );
}

export default CardDetailsMiddle;
