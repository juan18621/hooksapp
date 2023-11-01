import { act, renderHook } from "@testing-library/react"
import {useCounter} from '../../src/hooks/UseCounter'

describe('Pruebas en el use counter', () => {
    test('debe retornar los valores por defecto', ()=> {
       const {result} = renderHook(() => useCounter())
       const {counter, decrement, increment, reset } = result.current;
       expect(counter).toBe(1)
       expect(decrement).toEqual(expect.any(Function))
       expect(increment).toEqual(expect.any(Function))
       expect(reset).toEqual(expect.any(Function))
    })

    test('should generate counter with 100 value', () => { 
        const {result} = renderHook(() => useCounter(100))
        const {counter } = result.current; 
        expect(counter).toBe(100)
    })


    test('should increment counter', () => { 
        const {result} = renderHook(() => useCounter())
        const {increment } = result.current;

        act(()=> {
            increment();
            increment(2);
        })
        expect(result.current.counter).toBe(4)

    })
    test('should reset counter', () => { 
        const {result} = renderHook(() => useCounter())
        const {increment, reset } = result.current;

        act(()=> {
            increment();
            reset()
        })
        expect(result.current.counter).toBe(1)

    })
})