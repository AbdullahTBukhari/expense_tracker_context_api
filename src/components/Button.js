import React from 'react'

export const Button = ({buttonName}) => {
  return (
    <div>
        <button type="submit" className='btn'>{buttonName}</button>
    </div>
  )
}
