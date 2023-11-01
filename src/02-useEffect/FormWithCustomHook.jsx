import React, { useEffect } from 'react'
import { useForm } from '../'

export const FormWithCustomHook = () => {

  const {username, email, password, onInputChange, onResetForm} = useForm({
    username: '',
    email: '',
    password: ''
  })


  //const {username, email, password} = formState



  useEffect(()=> {
    //console.log('use effect se llamó')
  }, [])

//   useEffect(()=> {
//     //console.log('form state use effect se llamó')
//   }, [formState])

  useEffect(()=> {
    //console.log('email use effect se llamó')
  }, [email])

  return (
    <>
        <h1>Simple Form</h1>
        <hr />
        <input onChange={onInputChange} value={username} type="text" className='form-control' placeholder='User Name' name='username' />
        <input onChange={onInputChange} value={email} type="email" className='form-control' placeholder='Email' name='email' />
        <input onChange={onInputChange} value={password} type="password" className='form-control' placeholder='Password' name='password' />
        
        <button onClick={ onResetForm } className='btn btn-primary mt-2'>Borrar</button>
    </>
  )
}
