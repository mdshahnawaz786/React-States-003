import React from 'react'
import './CheckBox.css'

const CheckBox = ({label,onchange}) => {
  return (
    <>
         <div className='CheckBoxinput'>
         <input type="checkbox" name="checkbox" id="checkbox" onChange={()=>{
            onchange()
         }} />
         <label htmlFor="">{label}</label>
         </div>
    </>
  ) 
}

export default CheckBox
