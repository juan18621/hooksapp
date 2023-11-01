import { act, renderHook } from "@testing-library/react"
import {useForm} from '../../src/hooks/useForm'


describe('Test use form', () => { 

    const initialForm = {
        name: "Fernando Herrera",
        email: "fernando@google.com",
    }
    test('should return default values', () => { 
        const {result} =  renderHook(() => useForm(initialForm))
        expect(result.current).toEqual({
            name: "Fernando Herrera",
            email: "fernando@google.com",
            onInputChange: expect.any(Function),
            onResetForm: expect.any(Function),
        })
     })

     test('should change forms name', () => { 
        const {result} =  renderHook(() => useForm(initialForm))
        const {onInputChange} = result.current
        act(()=> {
            onInputChange({target: {name: 'name', value: 'juan'}})
        })

        expect(result.current).toEqual({
            name: "juan",
            email: "fernando@google.com",
            onInputChange: expect.any(Function),
            onResetForm: expect.any(Function),
        })
      })
     test('should reset form', () => { 
        const {result} =  renderHook(() => useForm(initialForm))
        const {onInputChange, onResetForm} = result.current
        act(()=> {
            onInputChange({target: {name: 'name', value: 'juan'}})
            onResetForm()
        })

        expect(result.current).toEqual({
            name: initialForm.name,
            email: "fernando@google.com",
            onInputChange: expect.any(Function),
            onResetForm: expect.any(Function),
        })
      })
 })