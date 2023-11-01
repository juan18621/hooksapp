import { TodoItem } from "./TodoItem"

export const TodoList = ({todos = [], removeItem, onToggleTodo}) => {
  return (
    <ul className='list-group'>
    {
        todos.map(todo => (
            <TodoItem key={todo.id} todo={todo} removeItem={removeItem} onToggleTodo={onToggleTodo}></TodoItem>
        ))
    }
 

</ul>
  )
}
