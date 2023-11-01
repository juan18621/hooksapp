
import { TodoList } from './TodoList';
import { TodoAdd } from './TodoAdd';
import { UseTodo } from '../hooks';

const initialState = []; 

export const TodoApp = () => {


    const {todos, todosPending, todosCount, handleNewTodo, handleRemoveTodo, handleToggleTodo} = UseTodo(initialState)


  return (
    <>
    <h1>TodoApp: {todosCount} <small>pendientes: {todosPending}</small></h1>


    <hr />

    <div className="row">
        <div className="col-7">
            <TodoList todos={todos} removeItem={handleRemoveTodo} onToggleTodo={handleToggleTodo}></TodoList>
        </div>

        <div className="col-5">
            <h4>Agregar todo</h4>

            <hr />

            <TodoAdd addItem={handleNewTodo}></TodoAdd>
   
        </div>
    </div>
    


    
    </>
  )
}
