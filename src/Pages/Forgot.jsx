import React from 'react'
import { Link } from 'react-router-dom'

const Forgot = () => {
  return (
    <div className='w-screen h-screen flex flex-col justify-center items-center space-y-3 '>
        <img src="" alt="" />
        <div className='w-[70vw] h-[70vw] shadow-lg flex flex-col justify-center items-start px-6 space-y-5 md:h-[60vw] md:w-[60vw]'>
            <h1 className='font-bold text-xl md:text-3xl'>Reset password</h1>
            <p className='md:text-xl'>Enter the email address you signed up with</p>
            <form className='flex flex-col space-y-3 '>
                <input type="email" placeholder='email address'className='border border-black h-[3vh] outline-none pl-5 sm:h-[7vh] sm:w-[40vw] md:h-[3vh]'/>
                <button type='submit' className='bg-red-500 rounded-md md:text-xl'>Get Password reset link</button>
            </form>
        </div>
        <Link to={'/Login'} className='underline decoration-solid'>Go back to sign in page</Link>

    </div>
  )
}

export default Forgot