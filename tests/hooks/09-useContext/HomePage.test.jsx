import { render, screen } from "@testing-library/react";
import { HomePage } from "../../../src/09-useContext/HomePage";
import { UserContext } from "../../../src/09-useContext/context";

describe("Pruebas en home page", () => {
  const user = {
    id: 123,
    name: "Fernando Herrera",
    email: "fernando@google.com",
  };
  test("should show componente with user", () => {
    render(
      <UserContext.Provider value={{ user }}>
        <HomePage></HomePage>
      </UserContext.Provider>
    );
    const preTag = screen.getByLabelText("pre");
    expect(preTag.innerHTML).toContain(user.email);
    expect(preTag.innerHTML).toContain(user.name);
    expect(preTag.innerHTML).toContain(user.id.toString());
  });
});
