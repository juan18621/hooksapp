import { fireEvent, render, screen } from "@testing-library/react";
import { UserContext } from "../../../src/09-useContext/context";
import { LoginPage } from "../../../src/09-useContext";

describe("Test at login page", () => {
  test("should show component without user", () => {
    render(
      <UserContext.Provider value={{ user: null }}>
        <LoginPage></LoginPage>
      </UserContext.Provider>
    );

    const preTag = screen.getByLabelText("pre");
    expect(preTag.innerHTML).toBe("null");
  });

  test("should call set user", () => {
    const setUserMock = jest.fn();

    render(
      <UserContext.Provider value={{ user: null, setUser: setUserMock }}>
        <LoginPage></LoginPage>
      </UserContext.Provider>
    );

    const button = screen.getByRole("button");
    fireEvent.click(button);

    expect(setUserMock).toHaveBeenCalled();
    expect(setUserMock).toHaveBeenCalledWith({
      email: "fernando@google.com",
      id: 123,
      name: "Fernando Herrera",
    });
  });
});
