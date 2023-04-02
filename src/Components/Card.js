import React from "react";
import { GoTrashcan } from "react-icons/go";
import { Link } from "react-router-dom";
import store from "../redux/store";
import { removeAllCard } from "../redux/actions";

const Card = (props) => {
  const { id, group, description, cards } = props.Flashcard;
  // console.log(props.Flashcard);

  const NoOfCards = () => {
    if (cards.length == 1) {
      return <p>1 card</p>;
    } else {
      return <p>{cards.length} cards</p>;
    }
  };
  return (
    <div className='self_box relative py-5 px-11  hover:-translate-y-1 shadow-lg transition-all ease-in-out duration-150'>
      {/* <button className='bg-red-400 w-28 border rounded-full'></button> */}
      <div className='card text-center'>
        {/* <img
          src='{user}'
          // className='absolute inset-x-40 -top-14 w-20 h-20 bg-red-400 rounded-full'
          className='center_img w-20 h-20 bg-red-400 rounded-full'
        /> */}
        <h1>{group}</h1>
        <p className='w-3/5 m-auto overflow break-words forOverflow'>
          {description}
        </p>
        {<NoOfCards />}
        <div className='btns'>
          <button className='w-9/12 mx-auto mt-4 block py-2 text-sm font-medium text-center text-red-500 bg-grey-100 rounded-lg hover:bg-red-500 hover:text-white border-red-500 border-2 hover:-translate-y-1 shadow-lg transition-all ease-in-out duration-150'>
            <Link to={`/flashcards/${id}`}>
              <h6>View Cards</h6>
            </Link>
          </button>
          <button
            onClick={() => {
              props.notify(group + " group is removed");
              store.dispatch(removeAllCard(id));
            }}
            className='cardTrash hover:-translate-y-1 transition-all ease-in-out duration-150'
          >
            <GoTrashcan />
          </button>
        </div>
      </div>
    </div>
  );
};
export default Card;
