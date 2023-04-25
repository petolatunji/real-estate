import React from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineStop } from 'react-icons/ai'
const NotFound = () => {
  return (
    <div className='mt-20  container mx-auto items-center justify-center flex flex-col '>
      <div className='mb-4'>
        <AiOutlineStop className='text-4xl text-violet-700 font-bold ' />
      </div>
      <div className='font-bold'>404-Page Not Found</div>
      <p className='mt-4'>We can't seem to find the page you are looking for</p>
      <div className='mt-6'>
        <Link to='/' className='text-violet-700 font-bold '>
          Return Home
        </Link>
      </div>
    </div>
  )
}

export default NotFound
