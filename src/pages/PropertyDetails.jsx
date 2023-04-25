import React from 'react'
import { housesData } from '../data'
import { useParams, Link } from 'react-router-dom'

import { BiBed, BiBath, BiArea } from 'react-icons/bi'
const PropertyDetails = () => {
  //get house id
  const { id } = useParams()

  //get house using id
  const house = housesData.find((house) => {
    return house.id === parseInt(id)
  })
  console.log(house)
  return (
    <section>
      <div className='container mx-auto min-h-[800px] mb-14'>
        <div className='flex flex-col lg:flex-row lg:items-center lg:justify-between'>
          <div>
            <h2 className='text-2xl font-bold'>{house.name}</h2>
            <h2 className='text-lg mb-4'>{house.address}</h2>
          </div>
          <div className='mb-4 lg:mb-0 flex gap-x-2 text-sm'>
            <div className='bg-green-500 text-white px-5 rounded-full font-semibold'>
              {house.type}
            </div>
            <div className='bg-violet-500 text-white px-5 rounded-full font-semibold'>
              {house.country}
            </div>
          </div>
          <div className='text-violet-600 text-3xl font-semibold mb-4'>
            # {house.price}
          </div>
        </div>
        <div className='flex flex-col items-start gap-8 lg:flex-row'>
          <div className='max-w-[768px]'>
            <div className='mb-8'>
              <img src={house.imageLg} alt='' />
            </div>
            <div className='flex gap-x-6 text-violet-700 mb-6'>
              <div className='flex items-center gap-x-2'>
                <BiBed className='text-2xl ' />
                <p>{house.bedrooms}</p>
              </div>
              <div className='flex items-center gap-x-2'>
                <BiBath className='text-2xl ' />
                <p>{house.bathrooms}</p>
              </div>
              <div className='flex items-center gap-x-2'>
                <BiArea className='text-2xl ' />
                <p>{house.surface}</p>
              </div>
            </div>
            <div>
              <p>{house.description}</p>
            </div>
          </div>
          <div className='flex-1 bg-pink-100 w-full mb-8 border border-gray-300 rounded-lg px-6 py-8'>
            <div className='flex items-center gap-x-4 mb-8'>
              <div className='w-20 h-20 p-1 border border-gray-300 rounded-full'>
                <img src={house.agent.image} alt='' />
              </div>
              <div>
                <p className='font-bold text-lg'>{house.agent.name}</p>
                <Link to='' className='text-violet-700 text-sm'>
                  View Listings
                </Link>
              </div>
            </div>
            {/*form*/}
            <form className='flex flex-col gap-y-4'>
              <input
                type='text'
                className='border bg-gray-300 focus:border-violet-700 outline-none rounded w-full px-4 h-10 text-sm '
                placeholder='Enter your full name*'
              />
              <input
                type='text'
                className='border bg-gray-300 focus:border-violet-700 outline-none rounded w-full px-4 h-10 text-sm '
                placeholder='Enter your email*'
              />
              <input
                type='text'
                className='border bg-gray-300 focus:border-violet-700 outline-none rounded w-full px-4 h-10 text-sm '
                placeholder='Enter your phone number*'
              />
              <textarea
                placeholder='Message*'
                className='border bg-gray-300 focus:border-violet-700 outline-none rounded w-full p-4 text-sm resize-none h-40'
              ></textarea>
              <div className='flex gap-x-2'>
                <button className='bg-violet-700 hover:bg-violet-800 text-white rounded p-4 text-sm w-full transition'>
                  Send message
                </button>
                <button className='border-violet-700 hover:border-violet-500 hover:text-violet-500 text-violet-700 border rounded p-4 text-sm w-full transition'>
                  Call
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PropertyDetails
