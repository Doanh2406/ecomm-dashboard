import React from 'react'
import './Card.css'
export default function Card({width, height, Content}) {
  
  return (

    <div className='card' style={{flex:1}}>
      <Content />
     
    </div>
  )
}
