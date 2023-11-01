import React, { useEffect, useState } from 'react'
import { Message } from './Message'

export const SimpleForm = () => {

  const [formState, setFormState] = useState({
    username: 'juanchoroy',
    email: 'juan@gmail.com'
  })

  const {username, email} = formState

  const onInputChange = ({target}) => {
    const {name, value} = target;
    setFormState({
      ...formState,
      [name]: value
    })
  }


  useEffect(()=> {
    //console.log('use effect se llamó')
  }, [])

  useEffect(()=> {
    //console.log('form state use effect se llamó')
  }, [formState])

  useEffect(()=> {
    //console.log('email use effect se llamó')
  }, [email])

  return (
    <>
        <h1>Simple Form</h1>
        <hr />
        <input onChange={onInputChange} value={username} type="text" className='form-control' placeholder='User Name' name='username' />
        <input onChange={onInputChange} value={email} type="email" className='form-control' placeholder='Email' name='email' />
        
        {
          username === 'juanchoroy' && <Message></Message>
        }
        
        
    </>
  )
}
