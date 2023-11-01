import { fireEvent, render, screen } from "@testing-library/react";
import { TodoItem } from "../../../src/08-useReducer/TodoItem";
describe("test in todo item component", () => {
  const todo = {
    id: 1,
    todo: "Piedra del alma",
    done: false,
  };

  const onDeleteTodoMock = jest.fn();
  const onToggleTodoMock = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("should show todo pending to complete", () => {
    render(
      <TodoItem
        todo={todo}
        onToggleTodo={onToggleTodoMock}
        removeItem={onDeleteTodoMock}
      ></TodoItem>
    );

    const liElement = screen.getByRole("listitem");

    expect(liElement.className).toBe(
      "list-group-item d-flex justify-content-between"
    );

    const spanElement = screen.getByLabelText("span");

    expect(spanElement.className).toContain("align-self-center");
  });
  test("should show todo  complete", () => {
    todo.done = true;

    render(
      <TodoItem
        todo={todo}
        onToggleTodo={onToggleTodoMock}
        removeItem={onDeleteTodoMock}
      ></TodoItem>
    );

    const spanElement = screen.getByLabelText("span");

    expect(spanElement.className).toContain("text-decoration-line-through");
  });

  test("should call toggle todo on click", () => {
    render(
      <TodoItem
        todo={todo}
        onToggleTodo={onToggleTodoMock}
        removeItem={onDeleteTodoMock}
      ></TodoItem>
    );

    const spanElement = screen.getByLabelText("span");

    fireEvent.click(spanElement);

    expect(onToggleTodoMock).toHaveBeenCalledWith(todo.id);
  });
  test("button should call delete todo on click", () => {
    render(
      <TodoItem
        todo={todo}
        onToggleTodo={onToggleTodoMock}
        removeItem={onDeleteTodoMock}
      ></TodoItem>
    );

    const buttonElement = screen.getByRole("button");

    fireEvent.click(buttonElement);

    expect(onDeleteTodoMock).toHaveBeenCalledWith(todo.id);
  });
});
