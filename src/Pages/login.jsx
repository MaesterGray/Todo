import React from 'react'
import { Link } from 'react-router-dom'

const login = () => {
  return (
    <div className=' w-screen h-screen bg-white flex flex-col  items-center '>
        <div className='w-[85vw] h-screen flex flex-col space-y-7 justify-center sm:w-[70vw] sm:space-y-5'>

        <div className='flex shadow-black shadow-lg rounded-md border  h-[20vh] justify-center sm:h-[25vh]'>
            <div className='flex flex-col justify-center items-center space-y-2'>
                <div className='flex space-x-4'>
                <img src="" alt="" />
                <h1 className='font-sans text-xl font-bold text-red-500 text-center'>Todo</h1>
                </div>
                <p className='text-gray-300 text-center'>You are one step away from your <br></br> <span>Todo dashboard</span></p>
            </div>
            
        </div>

        <div className='flex flex-col space-y-5 items-center h-[50vh] shadow-black shadow-lg rounded-md py-5 sm:space-y-1 sm:h-[60vh]'>
                <div className='flex flex-col space-y-1'>
                    <h1 className='text-red-500 font-sans font-bold text-2xl text-center sm:text-xl'>Sign In</h1>
                    <p className='text-gray-300'>Sign in to manage your content</p>
                </div>

                <form className='flex flex-col space-y-4 w-[60vw] sm:space-y-3' >
                    <input type="email" placeholder='Email' className=' border border-black h-[5vh]'  />
                    <input type="text" placeholder='password' className='border border-black h-[5vh]' />
                    <span>Already have an account? <span className='text-red-500'>Login</span></span>
                    <button type="submit" className='bg-red-500 rounded-md h-[5vh] sm:h-[7vh]'>Sign In</button>
                </form>
        </div>

        </div>
        
    </div>
  )
}

export default login