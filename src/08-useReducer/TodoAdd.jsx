import { useForm } from "../hooks"

export const TodoAdd = ({addItem}) => {

  const {description, onInputChange, onResetForm} = useForm({
    description: ''
  })

  const submitForm = (event) => {
    event.preventDefault()
    if(description.length <= 1) return;
    const todo = description;
    const newTodo = {
        id: new Date().getTime(),
        todo,
        done: false
    }
    addItem(newTodo)
    onResetForm()
  }
  return (
    <>
            <form onSubmit={submitForm}>
                <input type="text"
                 className="form-control"
                 placeholder='¿Que hay para hacer?'
                 name="description"
                 value={description}
                 onChange={onInputChange} />
                <button type='submit' className='btn btn-outline-primary'>Agregar</button>
           </form>


    </>
  )
}
