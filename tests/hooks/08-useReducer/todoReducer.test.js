import { todoReducer } from "../../../src/08-useReducer/todoReducer"

describe('test at todo  reducer', () => { 
    const initialState = [
       {
           id: 1,
           description: 'Demo todo',
           done: false
       }
    ]   
    test('should return initial state', () => { 

        const newState = todoReducer( initialState, {} )

        expect(newState).toBe(initialState)
    })

    test('should add todo', () => { 
        const action = {
            type: '[TODO] add todo',
            payload: {
                id: 2,
                todo: 'Nuevo todo',
                done: false
            }
        }

        const newState = todoReducer( initialState, action )

        expect(newState.length).toBe(2)
        expect(newState).toContain(action.payload)
     })

     test('should delete todo', () => { 

        const deleteAction = {
            type: '[TODO] remove todo',
            payload: 1
        }

        const newState = todoReducer( initialState, deleteAction )

        expect(newState.length).toBe(0)
    })

    test('should toggle todo', () => { 
        const toggleAction = {
            type: '[TODO] toggle todo',
            payload: 1
        }

        const newState = todoReducer( initialState, toggleAction )

        expect(newState[0].done).toBe(true)
     })
 })