import React from 'react'

const MyInput = ({input}) => {
  return (
        <div className="inputValue">
            <input className='input' type="text" value={input} readOnly/>
        </div>
  )
}

export default MyInput
