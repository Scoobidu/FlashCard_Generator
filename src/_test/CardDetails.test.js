import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { MemoryRouter, BrowserRouter } from "react-router-dom";
import CardDetails from "../Components/cardDetails/CardDetails";
import { Provider } from "react-redux";
import store from "../redux/store";
import { createStore } from "redux";
import { reducer } from "../redux/reducer";

describe("CardDetails component", () => {
  const MockCardDetails = ({ params, flashcards }) => {
    const mockParams = { ...params };
    jest.mock("react-router-dom", () => ({
      ...jest.requireActual("react-router-dom"),
      useParams: () => mockParams,
    }));
    const store = createStore(reducer, flashcards);
    return (
      <Provider store={store}>
        <BrowserRouter>
          <CardDetails />
        </BrowserRouter>
      </Provider>
    );
  };

  test("renders almabetter text when details are defined", async () => {
    const params = { cardId: 1 };
    render(
      <MockCardDetails
        params={params}
        flashcards={[
          {
            id: 1,
            group: "groupname1",
            description: "description1",
            card: [
              {
                id: 2,
                term: "term1",
                defination: "defination1",
              },
            ],
          },
        ]}
      />
    );
    const almabetterText = await screen.getByText(/loading/i);
    expect(almabetterText).toBeInTheDocument();
  });
});

// import React from "react";
// import { render, screen } from "@testing-library/react";
// import "@testing-library/jest-dom/extend-expect";
// import { MemoryRouter, BrowserRouter } from "react-router-dom";
// import CardDetails from "../Components/cardDetails/CardDetails";
// import { Provider } from "react-redux";
// import store from "../redux/store";
// import { createStore } from "redux";
// import { reducer } from "../redux/reducer";

// const MockCardDetails = ({ params, flashcards }) => {
//   const mockParams = { ...params };
//   jest.mock("react-router-dom", () => ({
//     ...jest.requireActual("react-router-dom"),
//     useParams: () => mockParams,
//   }));
//   const store = createStore(reducer, flashcards);
//   return (
//     <Provider store={store}>
//       <BrowserRouter>
//         <CardDetails />
//       </BrowserRouter>
//     </Provider>
//   );
// };
// test("renders almabetter text", async () => {
//   const params = { id: 1 };
//   render(
//     <MockCardDetails
//       params={params}
//       flashcards={[
//         {
//           id: 1,
//           group: "groupname1",
//           description: "description1",
//           card: [
//             {
//               id: 2,
//               term: "term1",
//               defination: "defination1",
//             },
//           ],
//         },
//       ]}
//     />
//   );
//   //   const almabetterText = await screen.findByText(/almabetter/i);
//   //   expect(almabetterText).toBeInTheDocument();
// });
// //   const loadingText = screen.getByText(/loading/i);
// //   expect(loadingText).toBeInTheDocument();

// // test("renders loading text", () => {
// //   const { getByText } = render(<MockCardDetails />);
// //   //   const loadingText = getByText(/loading/i);
// //   //   expect(loadingText).toBeInTheDocument();
// // });
// // test("renders almabetter text", () => {
// //   render(<MockCardDetails />);
// //   const almabetterText = screen.getByText(/almabetter/i);
// //   expect(almabetterText).toBeInTheDocument();
// // });
