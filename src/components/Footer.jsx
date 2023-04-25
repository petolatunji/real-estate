import React from 'react'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <div className='mt-10 bg-black text-white'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row lg:justify-between lg:items-center'>
          <div>
            <div className='text-[34px] font-semibold flex'>
              <Link to='/' className='flex items-center'>
                <span className=' '>GraceLand</span>
              </Link>
              <span className='font-bold text-violet-700 '>.</span>
            </div>
          </div>
          <div>m</div>
          <div>r</div>
        </div>
      </div>
    </div>
  )
}

export default Footer
