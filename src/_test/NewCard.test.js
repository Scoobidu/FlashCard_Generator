import {
  screen,
  render as rtlRender,
  waitFor,
  act,
} from "@testing-library/react";
import "@testing-library/jest-dom";
import user from "@testing-library/user-event";
import { Provider } from "react-redux";
import NewCard from "../Components/NewCard";
import store from "../redux/store";

const render = (component) =>
  rtlRender(<Provider store={store}>{component}</Provider>);

describe(NewCard, () => {
  beforeEach(() => {
    render(<NewCard />);
  });

  it("should show required on fields if any field is left blank", async () => {
    const groupName = screen.getByPlaceholderText(/Group Name/i);
    user.type(groupName, "random-name");

    const term = screen.getByPlaceholderText(/term/i);
    user.type(term, "term1");
    //--------------------------- we are leaving one field blank for testing --------------------------------
    // const defination = screen.getByPlaceholderText(/defination/i)
    // user.type(defination, '')

    user.click(screen.getByRole("button", { name: /create/i }));

    await waitFor(() => {
      expect(screen.getByText(/Required/i)).toBeInTheDocument();
    });
  });

  it("should create input field on click add more button ", async () => {
    const groupName = screen.getByPlaceholderText(/Group Name/i);
    user.type(groupName, "random-name");

    await act(() => {
      user.click(screen.getByRole("button", { name: /\+ add more/i }));
    });

    await waitFor(() => {
      expect(screen.getAllByPlaceholderText(/term/i)).toHaveLength(2);
    });
  });

  it("should reset form after all fields pass validation and click submit", async () => {
    const groupName = screen.getByPlaceholderText(/group name/i);
    user.type(groupName, "randomName");

    const discription = screen.getByPlaceholderText(
      /Describe the roles , responsibility , skills required for the job and help candidate understand the role better./i
    );
    user.type(discription, "randomDiscription");

    const term = screen.getByPlaceholderText(/term/i);
    user.type(term, "term1");

    const defination = screen.getByPlaceholderText(/definition/i);
    user.type(defination, "randomDefination");

    await act(() => {
      user.click(screen.getByRole("button", { name: /create/i }));
    });

    await act(() => {
      waitFor(() => {
        expect(group).toHaveTextContent("");
        expect(description).toHaveTextContent("");
        expect(term).toHaveTextContent("");
        expect(defination).toHaveTextContent("");
      });
    });
  });
});
