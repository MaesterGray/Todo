import React from 'react'

const Button = ({children}) => {
  return <button  className='bg-red-500 text-white rounded-md w-full py-2 px-3 capitalize' >{children}</button>;
}

export default Button