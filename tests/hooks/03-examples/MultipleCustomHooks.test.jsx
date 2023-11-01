import { fireEvent, render, screen } from "@testing-library/react";
import { MultipleCustomHooks } from "../../../src/03-examples/MultipleCustomHooks";
import { useFecth } from "../../../src/hooks/useFecth";
jest.mock("../../../src/hooks/useFecth");
import { useCounter } from "../../../src/hooks/UseCounter";
jest.mock("../../../src/hooks/UseCounter");

describe("Pruebas en multiple custom hooks", () => {
  const mockIncrement = jest.fn();
  useCounter.mockReturnValue({
    counter: 1,
    increment: mockIncrement,
  });

  beforeEach(() => {
    // be sure increment has not been called
    jest.clearAllMocks();
  });

  test("should show initial state component", () => {
    useFecth.mockReturnValue({
      data: null,
      isLoading: true,
      hasError: null,
    });
    render(<MultipleCustomHooks></MultipleCustomHooks>);

    expect(screen.getByText("Loading..."));
    expect(screen.getByText("Breaking bad quotes"));

    const nextButton = screen.getByRole("button", { class: "btn btn-primary" });

    expect(nextButton.disabled).toBeTruthy();
  });

  test("should show quote", () => {
    useFecth.mockReturnValue({
      data: [{ author: "Juan", quote: "Hola mundo" }],
      isLoading: null,
      hasError: null,
    });
    render(<MultipleCustomHooks></MultipleCustomHooks>);
    expect(screen.getByText("Hola mundo")).toBeTruthy();
    expect(screen.getByText("Juan")).toBeTruthy();

    const nextButton = screen.getByRole("button", { class: "btn btn-primary" });

    expect(nextButton.disabled).toBeFalsy();
  });

  test("should call increment", () => {
    useFecth.mockReturnValue({
      data: [{ author: "Juan", quote: "Hola mundo" }],
      isLoading: null,
      hasError: null,
    });

    render(<MultipleCustomHooks></MultipleCustomHooks>);

    const nextButton = screen.getByRole("button", { class: "btn btn-primary" });

    fireEvent.click(nextButton);

    expect(mockIncrement).toHaveBeenCalled();
  });
});
