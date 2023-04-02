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
  const { cardId } = useParams();
  const Flashcards = useSelector((state) => state);

  const details = Flashcards.filter((card) => card.id == cardId);
  const [selectID, setSelectID] = useState("");
  const [activeCard, setActiveCard] = useState("");

  useEffect(() => {
    setSelectID(details.length ? details[0].cards[0].id : "");
    setActiveCard(details.length ? details[0].cards[0].term : "");
  }, [details.length]);

  // Check if the details array is defined and not empty
  // if (!details || details.length === 0) {
  //   return (
  //     <div className='outer relative '>
  //       <p>Loading</p>
  //     </div>
  //   );
  // }

  const { group, description } = details.length > 0 ? details[0] : {};
  return (
    <>
      {!details || details.length === 0 ? (
        <div className='outer relative '>
          <p>Loading</p>
        </div>
      ) : (
        <>
          {/* <h1>almabetter</h1> */}
          <div className='outer relative'>
            {/* ---------myCard-Header-------- */}
            <div className='flex space-x-5 px-3'>
              <Link to={`/flashcards`}>
                <h1 className='text-3xl pt-3 text-gray-700'>
                  <MdOutlineKeyboardBackspace />
                </h1>
              </Link>
              <div>
                <h1 className='h1 card-heading'>{group}</h1>
                <p className='h4'>{description}</p>
              </div>
            </div>
            {/* -----------Cards----------- */}
            <div className='all-sec'>
              <div className='left'>
                <div className='box2'>
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
