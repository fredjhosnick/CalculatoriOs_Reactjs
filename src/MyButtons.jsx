import React from 'react'

const MyButtons = ({onButtonClick, onButtonCalculate, onHandlerToggleSign, onButtonClear, onHandlerPorcent}) => {
  return (
    <>
       <button onClick={onButtonClear}>C</button>
       <button onClick={onHandlerToggleSign}  >+/-</button>
       <button onClick={onHandlerPorcent} >%</button>
       <button onClick={()=>onButtonClick("/")} className='btn-orange'>/</button>
       <button onClick={()=>onButtonClick("7")} className='btn-black'>7</button>
       <button onClick={()=>onButtonClick("8")}className='btn-black' >8</button>
       <button onClick={()=>onButtonClick("9")}className='btn-black'>9</button>
       <button onClick={()=>onButtonClick("*")}className='btn-orange'>x</button>
       <button onClick={()=>onButtonClick("4")}className='btn-black'>4</button>
       <button onClick={()=>onButtonClick("5")}className='btn-black'>5</button>
       <button onClick={()=>onButtonClick("6")}className='btn-black'>6</button>
       <button onClick={()=>onButtonClick("-")}className='btn-orange'>-</button>
       <button onClick={()=>onButtonClick("1")}className='btn-black'>1</button>
       <button onClick={()=>onButtonClick("2")}className='btn-black'>2</button>
       <button onClick={()=>onButtonClick("3")}className='btn-black'>3</button>
       <button onClick={()=>onButtonClick("+")}className='btn-orange'>+</button>
       <button onClick={()=>onButtonClick("0")}className='btn-black zero'>0</button>
       <button onClick={()=>onButtonClick(",")}>,</button>
       <button onClick={onButtonCalculate} className='btn-orange'>=</button>
    </>
  )
}

export default MyButtons
