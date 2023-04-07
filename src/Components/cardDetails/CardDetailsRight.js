import React, { useRef } from "react";
import Modal from "./Modal";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import jsPDF from "jspdf";
import { useReactToPrint } from "react-to-print";
import { useState } from "react";
import { useSelector } from "react-redux";
import { MdOutlineShare } from "react-icons/md";
import { HiOutlineDownload } from "react-icons/hi";
import { AiOutlinePrinter } from "react-icons/ai";
import "../../CSS/cardDetails/CardDetailsRight.css";

function CardDetails_right({ cardId }) {
  const Flashcards = useSelector((state) => state);
  const details = Flashcards.filter((card) => card.id == cardId);
  const { group, description, cards } = details.length > 0 ? details[0] : {};

  const [showModal, setShowModal] = useState(false);

  //------------- download card function -------------
  const toPdf = () => {
    const flashcardPdf = new jsPDF("portrait", "px", "a4", "true");

    //styling download page
    flashcardPdf.setFillColor(239, 68, 68); //  background color
    flashcardPdf.rect(
      20,
      20,
      flashcardPdf.internal.pageSize.width * 0.9,
      15,
      "F"
    ); // rectangle with the background color

    flashcardPdf.setTextColor(255, 255, 255); // text color to white
    flashcardPdf.setFontSize(16); // font size

    // heading text
    flashcardPdf.setFontSize(12);
    flashcardPdf.text(205, 30, "Details");

    // group name
    flashcardPdf.setFontSize(14);
    flashcardPdf.setTextColor(239, 68, 68); // text color
    flashcardPdf.text(30, 70, "Group:");
    let groupname = flashcardPdf.splitTextToSize(group);
    flashcardPdf.text(70, 70, groupname);

    // group description
    flashcardPdf.text(30, 92, "Description:");
    flashcardPdf.setTextColor(0, 0, 0); // text color
    let groupdescription = flashcardPdf.splitTextToSize(description, 340);
    let descriptionY = 106; // top margin for the first line of description text
    for (let i = 0; i < groupdescription.length; i++) {
      flashcardPdf.text(groupdescription[i], 55, descriptionY);
      descriptionY += 15; // increase the margin for the next line of text
    }

    // styling for the heading
    let alltermsY = descriptionY + 10;
    flashcardPdf.setFillColor(239, 68, 68); // background color
    flashcardPdf.rect(
      20,
      alltermsY,
      flashcardPdf.internal.pageSize.width * 0.2,
      15,
      "F"
    ); // rectangle with the background color

    flashcardPdf.setTextColor(255, 255, 255); // text color to white
    flashcardPdf.setFontSize(16); // font size

    // heading text
    flashcardPdf.setFontSize(12);
    flashcardPdf.text(47, alltermsY + 11, "All Terms");

    // terms
    // term name
    // flashcardPdf.setFontSize(14);
    // flashcardPdf.setTextColor(239, 68, 68); // text color
    // flashcardPdf.text(30, alltermsY + 40, cards[0].term);
    // flashcardPdf.setTextColor(0, 0, 0); // text color
    // let termDefinition = flashcardPdf.splitTextToSize(cards[0].defination, 340);
    // flashcardPdf.text(70, alltermsY + 40, termDefinition);

    flashcardPdf.save(`Flashcard-${group}.pdf`);
    notify("File Downloaded");
  };

  //------- print card function -------------
  const printCard = () => {
    // useReactToPrint({
    //   //   // ref is not initialized
    //   //   content: () => flashRef.current,
    //   //   documentTitle: details[0].group,
    // });
  };

  const handleClose = (e) => {
    setShowModal(false);
  };
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
  const notifyfail = (val) => {
    toast.error(val, {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };

  return (
    <div className='all-buttons select-none'>
      <div
        className='box2 hover:bg-red-500 hover:text-white focus:ring-4 hover:-translate-y-1  transition-all ease-in-out duration-150'
        onClick={() => {
          setShowModal(true);
        }}
      >
        {/*-------------- share btn ------------------*/}
        <button className='flex '>
          <span className='pt-1 pr-4'>
            <MdOutlineShare />
          </span>
          Share
        </button>
      </div>
      <div
        className='box2 hover:bg-red-500 hover:text-white focus:ring-4 hover:-translate-y-1  transition-all ease-in-out duration-150'
        onClick={toPdf}
      >
        {/*-------------- download btn ------------------*/}
        <button className='flex'>
          <span className='text-xl pr-4 '>
            <HiOutlineDownload />
          </span>
          Download
        </button>
      </div>
      <div
        className='box2 hover:bg-red-500 hover:text-white focus:ring-4 hover:-translate-y-1  transition-all ease-in-out duration-150'
        onClick={() => {
          notifyfail("unable to print");
          printCard();
        }}
      >
        {/*-------------- print btn ------------------*/}
        <button className='flex'>
          <span className='text-xl pt-1 pr-4'>
            <AiOutlinePrinter />
          </span>
          Print
        </button>
      </div>
      {/*------------- modal to copy link -------------*/}
      <Modal
        notify={notify}
        cardId={cardId}
        visible={showModal}
        setVisible={setShowModal}
        handleClose={handleClose}
      />

      <ToastContainer />
    </div>
  );
}

export default CardDetails_right;
