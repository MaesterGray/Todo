import React from 'react'

const login = () => {
  return (
    <div className=' w-screen h-screen bg-white flex flex-col justify-center items-center '>
        <div className='w-[70vw] h-screen flex flex-col space-y-7 '>

        <div className='flex shadow-black shadow-lg rounded-md border  h-[20vh]'>
            <div className='flex flex-col justify-center items-center space-y-2'>
                <div className='flex space-x-4'>
                <img src="" alt="" />
                <h1 className=''>Todo</h1>
                </div>
                <p>You are one step away from your Todo dashboard</p>
            </div>
            
        </div>

        <div className='flex flex-col space-y-10 items-center h-[50vh] shadow-black shadow-lg rounded-md py-5'>
                <div className='flex flex-col space-y-1'>
                    <h1 className='text-red-500 font-sans font-bold text-2xl text-center'>Sign In</h1>
                    <p className='text-gray-300'>Sign in to manage your content</p>
                </div>

                <form className='flex flex-col space-y-3' >
                    <input type="email" placeholder='Email' className=' border border-black'  />
                    <input type="text" placeholder='password' className='border border-black' />
                    <button type="submit" className='bg-red-500 rounded-md'>Sign In</button>
                </form>
        </div>

        </div>
        
    </div>
  )
}

export default login