import { render, screen } from "@testing-library/react";
import { TodoApp } from "../../../src/08-useReducer/TodoApp";

import { UseTodo } from "../../../src/hooks/UseTodo";

jest.mock("../../../src/hooks/UseTodo");

describe("test in todo app", () => {
  UseTodo.mockReturnValue({
    todos: [
      { id: 1, todo: "todo #1", done: false },
      { id: 2, todo: "todo #2", done: false },
    ],
    todosCount: 2,
    todosPending: 1,
    handleNewTodo: jest.fn(),
    handleRemoveTodo: jest.fn(),
    handleToggleTodo: jest.fn(),
  });
  test("should show component correctly", () => {
    render(<TodoApp></TodoApp>);
    expect(screen.getByText("todo #1")).toBeTruthy();
    expect(screen.getByText("todo #2")).toBeTruthy();
    expect(screen.getByRole("textbox")).toBeTruthy();
  });
});
