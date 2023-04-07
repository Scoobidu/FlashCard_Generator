import "./CSS/App.css";
import "./CSS/Card.css";
// import "./CSS/sample.css";
import React from "react";
import { Main } from "./Routes/Main";
import logo from "./Images/logo.png";

function App() {
  return (
    <div>
      {/* ---------navbar--------- */}
      <nav className=' relative'>
        <div className='z-10 fixed bg-white w-full '>
          <img className=' p-5' src={logo} alt='' width='180' height='180' />
        </div>
      </nav>
      <Main />
    </div>
  );
}

export default App;
