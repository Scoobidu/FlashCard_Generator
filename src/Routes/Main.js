import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "../Components/Header";
import NewCard from "../Components/NewCard";
import CardsList from "../Components/CardsList";
import CardDetails from "../Components/cardDetails/CardDetails";
import store from "../redux/store";
import { addLocalCards } from "../redux/actions";

export const Main = () => {
  //--------- getting local storage data ------------
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("allCards"));
    if (data) store.dispatch(addLocalCards(data));
  }, []);

  return (
    <>
      <div className='bg-bgcol pt-20' style={{ height: "100%" }}>
        <Router>
          <Header />
          <Switch>
            <Route path='/' exact component={NewCard} />
            <Route path='/flashcards' exact component={CardsList} />
            <Route path='/flashcards/:cardId' exact component={CardDetails} />
            <Route>404 Not Found!</Route>
          </Switch>
        </Router>
      </div>
    </>
  );
};
