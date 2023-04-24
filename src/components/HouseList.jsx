import React, { useContext, useState } from 'react'

import { HouseContext } from './HouseContext'
import House from './House'
import { Link } from 'react-router-dom'
import { ImSpinner2 } from 'react-icons/im'

const HouseList = () => {
  const { houses, loading } = useContext(HouseContext)
  //if loading is true
  if (loading) {
    return (
      <ImSpinner2 className='mx-auto animate-spin to-violet-700 text-4xl mt-[200px]' />
    )
  }
  // if house is less than 1
  if (houses.length < 1) {
    return (
      <div className='mt-32 text-3xl text-center text-red-600 '>
        Sorry, nothing found
      </div>
    )
  }
  return (
    <section className='mb-20'>
      <div className='container mx-auto'>
        <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-14'>
          {houses.map((detail, index) => {
            return (
              <Link to={`/property/${detail.id}`} key={index}>
                <House detail={detail} />
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default HouseList
