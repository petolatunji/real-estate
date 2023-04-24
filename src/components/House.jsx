import React from 'react'

import { BiBed, BiBath, BiArea } from 'react-icons/bi'

const House = ({ detail }) => {
  const { image, type, country, address, bathrooms, bedrooms, surface, price } =
    detail
  return (
    <div className='bg-white shadow-1 p-5 rounded-lg rounded-tl-[90px] w-full max-w-[352px] mx-auto cursor-pointer hover:shadow-2xl transition'>
      <img src={image} alt='' className='mb-8' />
      <div className='flex mb-4 text-sm gap-x-2'>
        <div className='px-3 text-white bg-green-500 rounded-full'>{type}</div>
        <div className='px-3 text-white rounded-full bg-violet-500'>
          {country}
        </div>
      </div>

      <div className='text-lg font-semibold max-w-[260px]'>{address}</div>
      <div className='flex my-4 gap-x-4'>
        <div className='flex items-center gap-1 text-gray-600'>
          <div className='text-[20px]'>
            <BiBed />
          </div>
          <div>{bedrooms}</div>
        </div>
        <div className='flex items-center gap-1 text-gray-600'>
          <div className='text-[20px]'>
            <BiBath />
          </div>
          <div>{bathrooms}</div>
        </div>
        <div className='flex items-center gap-1 text-gray-600'>
          <div className='text-[20px]'>
            <BiArea />
          </div>
          <div>{surface}</div>
        </div>
      </div>
      <div className='mb-4 text-lg font-semibold text-violet-600'>{price}</div>
    </div>
  )
}

export default House
