import CardsList from "../Components/CardsList";
import { cleanup, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { BrowserRouter } from "react-router-dom";
import { reducer } from "../redux/reducer";

afterEach(cleanup);

const renderWithRedux = (
  component,
  { Flashcards, store = createStore(reducer, Flashcards) } = []
) => {
  return {
    ...render(
      <BrowserRouter>
        <Provider store={store}>{component}</Provider>
      </BrowserRouter>
    ),
    store,
  };
};
describe(CardsList, () => {
  it("should show default values till  card is not created", () => {
    renderWithRedux(<CardsList />);
    expect(screen.getByText(/no cards to show!!/i)).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: /create card/i })
    ).toBeInTheDocument();
  });

  it("should show card after the  card is created  data is and recieved", () => {
    renderWithRedux(<CardsList />, {
      Flashcards: [
        {
          group: "groupname1",
          description: "description1",
          cards: [],
        },
      ],
    });

    expect(
      screen.getByRole("heading", { name: /groupname1/i })
    ).toBeInTheDocument();

    expect(screen.getByText("description1")).toBeInTheDocument();

    expect(
      screen.getByRole("link", { name: /view cards/i })
    ).toBeInTheDocument();
  });
});
