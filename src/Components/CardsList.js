import React from "react";
import Card from "./Card";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Cards() {
  const Flashcards = useSelector((state) => state);

  //------------- notifier ---------------
  const notify = (val) => {
    toast.success(val, {
      position: "top-center",
      autoClose: 500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  //------ mapping all flashcards ----------
  const RenderAllCards = Flashcards.map((Flashcard) => {
    return <Card key={Math.random()} Flashcard={Flashcard} notify={notify} />;
  });

  return (
    <div>
      <div className='outer relative h-screen'>
        {/*---------- rendering all flashcards ------------*/}
        <div className='wrapper pt-20'>{RenderAllCards}</div>
        {Flashcards.length ? (
          ""
        ) : (
          //-------------- if no cards to show ---------------
          <div className=' relative'>
            <h1 className='text-center text-xl font-bold text-slate-600  '>
              No Cards To Show!!
            </h1>
            {/*----------- button to go to ome page ------------*/}
            <Link
              to={"/"}
              className=' w-48  mt-5 createBtn btn2 block mx-auto hover:bg-red-500 hover:text-white border-red-500 border-2 focus:ring-4 focus:outline-none focus:ring-red-300 hover:-translate-y-1 shadow-lg transition-all ease-in-out duration-150'
            >
              Create Cards
            </Link>
          </div>
        )}
        {/* <h1 className='h3 self_h3 text-red-500'>See all</h1> */}
      </div>
      <ToastContainer />
    </div>
  );
}

export default Cards;
