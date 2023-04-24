import React from 'react'
import Photo from '../assets/img/house-banner.png'
import Search from '../components/Search'

const Banner = () => {
  return (
    <div className='h-full max-h-[640px] mb-8 xl:mb '>
      <div className='flex flex-col lg:flex-row'>
        <div className='flex flex-col items-center xl:ml-[135px] lg:ml-8 lg:items-start text-center lg:text-left justify-center flex-1 px-4 lg:px-0 '>
          <h1 className='text-5xl lg:text-[60px] font-bold leading-none mb-6'>
            <span className='text-violet-700'>Rent</span> Your Dream House With
            Us
          </h1>
          <p className='max-w-[480px] mb-8'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. In
            voluptates porro optio repellendus vitae enim. Officia eveniet
            consequatur officiis sit quisquam, accusantium cum rem, soluta qui
            impedit, eum molestias amet.
          </p>
        </div>
        <div className='items-end justify-end flex-1 hidden lg:flex'>
          <img src={Photo} alt='' />
        </div>
      </div>
    </div>
  )
}

export default Banner
