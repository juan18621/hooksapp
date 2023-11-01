import { render, screen } from "@testing-library/react";
import { MainApp } from "../../../src/09-useContext";
import { MemoryRouter } from "react-router-dom";

describe("test on main", () => {
  test("should show home page", () => {
    render(
      <MemoryRouter>
        <MainApp></MainApp>
      </MemoryRouter>
    );

    expect(screen.getByText("HomePage")).toBeTruthy();
  });

  test("should show login", () => {
    render(
      <MemoryRouter initialEntries={["/login"]}>
        <MainApp></MainApp>
      </MemoryRouter>
    );

    expect(screen.getByText("LoginPage")).toBeTruthy();
  });
});
