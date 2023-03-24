import "./CSS/App.css";
import "./CSS/Card.css";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import logo from "./Images/logo.png";
import Header from "./Components/Header";
import NewCardUpper from "./Components/NewCardUpper";

function App() {
  return (
    <div>
      {/* ---------navbar--------- */}
      <nav className=' relative'>
        <div className='z-10 fixed bg-white w-full '>
          <img className=' p-5' src={logo} alt='' width='180' height='180' />
        </div>
      </nav>
      <div className='bg-bgcol pt-20' style={{ height: "100%" }}>
        <Router>
          <Header />
          <Switch>
            <Route path='/' exact component={NewCardUpper} />
            {/* <Route>404 Not Found!</Route> */}
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
