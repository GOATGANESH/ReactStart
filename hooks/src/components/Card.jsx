import React, { useState } from 'react'

const Card = () => {
  const [num,setNum]=useState(0)
  const [step,setStep]=useState(1)

  function updateStep(e){
    setStep(e.target.value)
  }

  return (
    <div className='card'>
        <div className="counter">{num}</div>
        <div className="controls">
            <div className="step-control">
              <input type="number" placeholder='Enter step' value={step} onChange={(e)=>{
                updateStep(e)
              }} />
            </div>
            <div>
            <button id='add' className="operationBtn" onClick={()=>{setNum(num+parseInt(step))}}>++</button>
            <button id='remove' className="operationBtn" onClick={()=>{setNum(num-parseInt(step))}}>--</button>
            <button className='operationBtn' onClick={()=>{setStep(1);setNum(0)}}>Reset</button>
            </div>
        </div>
    </div>
  )
}

export default Card