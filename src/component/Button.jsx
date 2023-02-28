import React from 'react'
import './button.css'

const Button = ({onclick}) => {
  return (
    <div className='buttonContainer'>
      <button className='generateButton' onClick={()=>{
        onclick()
      }}>Generate Password</button>
    </div>
  )
}

export default Button
