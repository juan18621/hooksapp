import React, { memo } from 'react'

export const Small = memo(({counter}) => {

  console.log('Me volví a redibujar')
  return (
    <small>{counter}</small>
  )
})
