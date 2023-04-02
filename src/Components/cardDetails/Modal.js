import React, { useRef } from "react";
import { FaRegCopy, FaTimes } from "react-icons/fa";

const Modal = ({ cardId, visible, setVisible, handleClose, notify }) => {
  const copiedLink = useRef("");

  const handleCopy = () => {
    navigator.clipboard.writeText(copiedLink.current.href);
    notify("Linked Copied to Clipboard");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      id='dismiss'
      //   onClick={(e) => handleClose(e)}
      className='fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center'
    >
      <div className='bg-white p-5 relative rounded-md w-72 md:w-96 h-32'>
        <FaTimes
          id='dismiss-x'
          className=' absolute right-3 p-1 text-gray-500 hover:text-red-500  top-3'
          onClick={(e) => handleClose(e)}
          size={"1.5rem"}
        />
        <div className='p-6 flex items-center justify-center space-x-3'>
          <div className=' border-dashed border w-64 overflow-hidden border-gray-400 rounded-md px-3 py-1 text-sm '>
            <p className='text-gray-500'>
              Link:
              <a
                ref={copiedLink}
                href={`https://flashcard-generatoe.netlify.app/flashcards/${cardId}`}
                className='ml-1 text-blue-500'
              >
                {`https://flashcard-generatoe.netlify.app/flashcards/${cardId}`}
              </a>
            </p>
          </div>
          <FaRegCopy
            onClick={handleCopy}
            className='text-gray-500 text-lg hover:text-blue-500 hover:-translate-y-px transition-all ease-in-out'
          />
        </div>
      </div>
    </div>
  );
};

export default Modal;
