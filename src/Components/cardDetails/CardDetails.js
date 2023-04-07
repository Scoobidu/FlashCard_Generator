import React, { useEffect } from "react";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { useParams, Link } from "react-router-dom";
import CardDetailsLeft from "./CardDetailsLeft";
import CardDetailsMiddle from "./CardDetailsMiddle";
import CardDetailsRight from "./CardDetailsRight";
import "../../CSS/cardDetails/CardDetails.css";
import { useSelector } from "react-redux";
import { useState } from "react";

function CardDetails() {
  //----------- getting Flashcard id for diaplaying details ------------
  const { cardId } = useParams();
  const Flashcards = useSelector((state) => state);

  //---------- filtering flashcard from all flashcards -------------
  const details = Flashcards.filter((card) => card.id == cardId);

  const [selectID, setSelectID] = useState("");
  const [activeCard, setActiveCard] = useState("");

  useEffect(() => {
    //----------- if details present display first's term & defination -----------
    setSelectID(details.length ? details[0].cards[0].id : "");
    setActiveCard(details.length ? details[0].cards[0].term : "");
  }, [details.length]);

  const { group, description } = details.length > 0 ? details[0] : {};
  return (
    <>
      {/*----------- if details not presesnt show loading -------------*/}
      {!details || details.length === 0 ? (
        <div className='outer relative '>
          <p>Loading</p>
        </div>
      ) : (
        <>
          <div className='outer relative'>
            <div className='flex space-x-5 px-3'>
              {/*-------- button to go to myflashcard page --------*/}
              <Link to={`/flashcards`}>
                <h1 className='text-3xl pt-3 text-gray-700'>
                  <MdOutlineKeyboardBackspace />
                </h1>
              </Link>
              <div>
                {/*---------- displaying groupname and description ------------*/}
                <h1 className='h1 card-heading'>{group}</h1>
                <p className='h4'>{description}</p>
              </div>
            </div>
            {/* -------------------Cards------------------ */}
            <div className='all-sec'>
              <div className='left'>
                <div className='box2'>
                  {/*---------- terms sidebar ------------*/}
                  <CardDetailsLeft
                    details={details}
                    selectID={selectID}
                    setSelectID={setSelectID}
                    activeCard={activeCard}
                    setActiveCard={setActiveCard}
                  />
                </div>
              </div>
              <div className='center'>
                <div>
                  {/*--------- display definition of selected terms here ------------*/}
                  <CardDetailsMiddle
                    details={details}
                    leftSelected={selectID}
                    selectID={selectID}
                    setSelectID={setSelectID}
                    setActiveCard={setActiveCard}
                  />
                </div>
              </div>
              <div className='right'>
                <div>
                  {/*---------- share , download , print button ----------*/}
                  <CardDetailsRight cardId={cardId} />
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default CardDetails;
