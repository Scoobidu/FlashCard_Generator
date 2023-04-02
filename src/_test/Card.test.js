import Card from "../Components/Card";
import { screen, render as rtlRender, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import { Provider } from "react-redux";
import store from "../redux/store";
import { BrowserRouter } from "react-router-dom";

const render = (component) =>
  rtlRender(
    <Provider store={store}>
      <BrowserRouter>{component}</BrowserRouter>
    </Provider>
  );

describe(Card, () => {
  render(
    <Card
      Flashcard={{
        group: "groupname1",
        description: "description1",
        cards: [],
      }}
    />
  );

  it("should contain the elements", () => {
    expect(
      screen.getByRole("link", { name: /view cards/i })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("heading", { name: /groupname1/i })
    ).toBeInTheDocument();

    expect(screen.getByText("description1")).toBeInTheDocument();
  });
});
