import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import "../CSS/Header.css";

function Header() {
  useEffect(() => {
    var lnks = document.getElementsByClassName("lnk");
    for (var i = 0; i < lnks.length; i++) {
      lnks[i].addEventListener("click", function () {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
      });
    }
  });

  return (
    <>
      <div className='relative w-9/12 mx-auto'>
        <div className=' pb-5 '>
          <h1 className='h1 nav-title'>Create Flashcard</h1>
          {/* <div className='h2 flex space-x-10 px-3'><a className='page' href='#s'>Create New</a><a className='page' href='#s'>My Flashcard</a></div> */}
          <div className='relative nav-links h2'>
            <ul>
              <li className='lnk active'>
                <Link to={`/`}>Create New</Link>
              </li>
              <li className='lnk'>
                <Link to={`/flashcards`}>My Flashcard</Link>
              </li>
            </ul>
            <hr className='absolute bottom-0 w-full bg-gray-300 mt-2 h-0.4' />
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
