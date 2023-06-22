import React from 'react'

export const InputField = ({type, id}) => {
  return (
    <div>
        <input type={type} id={id} 
            className='appearance-none px-4 py-2 border md:my-2 border-yellow-700 rounded-md'
            />
    </div>
  )
}
