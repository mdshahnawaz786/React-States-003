import React from "react";
import './PaswordGenerator.css'

const PaswordGenerator = ({ handelText, sethandelText,copied, setCopied }) => {
  return (
    <>
      <div className="PaswordGenerator">
        <div>
        <input className="PaswordGeneratorInput" type="text" value={handelText} onChange={(e)=>{
            sethandelText(e.target.value)
        }} />
        </div>
        {/* {console.log(handelText)} */}
        <div>
        <button className='copyButton' onClick={() => {
        if(sethandelText.length > 0){
          navigator.clipboard.writeText(handelText);
          setCopied(true)
        }
      }}><i class="fa-regular fa-copy"></i></button>
        </div>
      </div>
    </>
  );
};

export default PaswordGenerator;
