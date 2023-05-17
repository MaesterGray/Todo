import React from 'react'

const login = () => {
  return (
    <div className=' w-screen h-screen bg-white flex flex-col justify-center items-center '>
        <div className='w-[70vw] h-screen flex flex-col space-y-7 '>

        <div className='flex shadow-black shadow-lg rounded-md border border-black'>
            <div className='flex flex-col '>
                <div className='flex space-x-4'>
                <img src="" alt="" />
                <h1>Todo</h1>
                </div>
                <p>You are one step away from your Todo dashboard</p>
            </div>
            
        </div>

        <div className='flex flex-col justify-center items-center'>
                <div className='flex flex-col space-y-2'>
                    <h1>Sign In</h1>
                <p>Sign in to manage your content</p>
                </div>

                <form className='flex flex-col space-y-5' >
                    <input type="email" placeholder='Email'  />
                    <input type="text" placeholder='password' />
                    <button type="submit">Sign In</button>
                </form>
        </div>

        </div>
        
    </div>
  )
}

export default login