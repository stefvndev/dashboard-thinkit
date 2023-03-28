import { render, screen, fireEvent } from "@testing-library/react";
import User, { Props } from "./User";

// test za User komponentu
describe("User - Test Component", () => {
  // --  kada se stranica ucita treba da se fetchuje api (1)
  it("renders user data on page load", async () => {
    render(<User fetchUserTodos={() => Promise.resolve([])} />);
    // pronalazi sve iteme sa stranice koji imaju data-testid='user-box'
    const userBoxes = await screen.findAllByTestId("user-box");
    // ocekuje se da ih bude 5
    expect(userBoxes).toHaveLength(5);
  });

  // -- pokazuje taskove za odradjenog usera kada se klikne na njegov box (2)
  it("show tasks for specific user on box click", async () => {
    // fake fetch
    const fetchUserTodosMock = jest.fn(() => Promise.resolve(mockResponse));
    // fake response
    const mockResponse = [
      { id: 1, title: "Todo 1" },
      { id: 2, title: "Todo 2" },
    ];
    render(<User fetchUserTodos={fetchUserTodosMock} />);
    // pronalazi sve user-box
    const userBoxes = await screen.findAllByTestId("user-box");
    // selektuje prvi box
    const userBox = userBoxes[0];
    // klik na prvi box
    fireEvent.click(userBox);
    // kada se klikne na prvi box ocekuje se da se fetcuje api
    expect(fetchUserTodosMock).toHaveBeenCalledWith(1);
  });
});
