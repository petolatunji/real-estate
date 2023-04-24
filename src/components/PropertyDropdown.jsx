import React, { useContext, useState } from 'react'

import { FaHome } from 'react-icons/fa'
import { MdOutlineKeyboardArrowUp, MdKeyboardArrowDown } from 'react-icons/md'

import { Menu } from '@headlessui/react'

import { HouseContext } from './HouseContext'

const PropertyDropdown = () => {
  const { property, setProperty, properties } = useContext(HouseContext)
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Menu as='div' className='dropdown relative'>
      <Menu.Button
        className='dropdown-btn text-left w-full'
        onClick={() => setIsOpen(!isOpen)}
      >
        <FaHome className='dropdown-icon-primary' />
        <div>
          <div className='text-[15px] font-medium leading-tight'>
            {property}
          </div>
          <div className='text-[12px] '>Select a property</div>
        </div>
        {isOpen ? (
          <MdOutlineKeyboardArrowUp className='dropdown-icon-secondary' />
        ) : (
          <MdKeyboardArrowDown className='dropdown-icon-secondary' />
        )}
      </Menu.Button>
      <Menu.Items className='dropdown-menu'>
        {properties.map((property, index) => {
          return (
            <Menu.Item
              as='li'
              className='cursor-pointer hover: text-violet-700 transition'
              key={index}
              onClick={() => setProperty(property)}
            >
              {property}
            </Menu.Item>
          )
        })}
      </Menu.Items>
    </Menu>
  )
}

export default PropertyDropdown
