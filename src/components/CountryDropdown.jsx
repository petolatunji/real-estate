import React, { useContext, useState } from 'react'

import { FaMapMarkerAlt } from 'react-icons/fa'
import { MdOutlineKeyboardArrowUp, MdKeyboardArrowDown } from 'react-icons/md'

import { Menu } from '@headlessui/react'

import { HouseContext } from './HouseContext'

const CountryDropdown = () => {
  const { country, setCountry, countries } = useContext(HouseContext)
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Menu as='div' className='dropdown relative'>
      <Menu.Button
        className='dropdown-btn text-left w-full'
        onClick={() => setIsOpen(!isOpen)}
      >
        <FaMapMarkerAlt className='dropdown-icon-primary' />
        <div>
          <div className='text-[15px] font-medium leading-tight'>{country}</div>
          <div className='text-[12px] '>Select your location</div>
        </div>
        {isOpen ? (
          <MdOutlineKeyboardArrowUp className='dropdown-icon-secondary' />
        ) : (
          <MdKeyboardArrowDown className='dropdown-icon-secondary' />
        )}
      </Menu.Button>
      <Menu.Items className='dropdown-menu'>
        {countries.map((country, index) => {
          return (
            <Menu.Item
              as='li'
              className='cursor-pointer hover: text-violet-700 transition'
              key={index}
              onClick={() => setCountry(country)}
            >
              {country}
            </Menu.Item>
          )
        })}
      </Menu.Items>
    </Menu>
  )
}

export default CountryDropdown
