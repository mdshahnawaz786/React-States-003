import React from 'react'
import './Length.css'

const Length = ({label,onchange}) => {
  return (
    <div className='Length'>
        <label className='Lengthlabel' htmlFor="">{label}</label>
        <input className='Lengthinput' type="number" name="" id="" onChange={(e)=>{
            onchange(e.target.value)
        }} />
    </div>
  )
}

export default Length
