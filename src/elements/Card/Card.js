import React from 'react'
import './Card.css'
export default function Card({width, height, Content,styleContainer}) {
  
  return (

    <div className='card' style={{width,height,...styleContainer}}>
      <Content />
     
    </div>
  )
}
