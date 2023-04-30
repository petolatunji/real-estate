import React from 'react'
import Banner from '../components/Banner'
import Search from '../components/Search'
import HouseList from '../components/HouseList'
import Slider from '../components/Slider'

const Home = () => {
  return (
    <div className='min-h-[1800px]'>
      <Slider />
      <Banner />
      <Search />
      <HouseList />
    </div>
  )
}

export default Home
