import { useEffect, useReducer } from "react";
import { todoReducer } from "../08-useReducer/todoReducer";


export const UseTodo = (initialState) => {

    const init = () => {
        return  JSON.parse(localStorage.getItem('todos')) || [];
    }
    
    const [todos, dispatchTodoAction] = useReducer(todoReducer, initialState, init)

    useEffect(() => {
      localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])
    
  
  
    const handleNewTodo = (todo) => {
      const action = {
          type: '[TODO] add todo',
          payload: todo
      }
  
      dispatchTodoAction(action)
    }
  
    const handleRemoveTodo = (id) => {
      const action = {
          type: '[TODO] remove todo',
          payload: id
      }
      dispatchTodoAction(action)
    }
  
    const handleToggleTodo = (id) => {
      console.log(id)
      const action = {
          type: '[TODO] toggle todo',
          payload: id
      }
      dispatchTodoAction(action)
    }
  const todosCount = todos.length;
  const todosPending = todos.filter(todo => !todo.done).length;
  
  return {
    todos,
    todosCount,
    todosPending,
    handleNewTodo,
    handleRemoveTodo,
    handleToggleTodo
  }
}
