import React, { useContext, useState } from 'react'

import { FaWallet } from 'react-icons/fa'
import { MdOutlineKeyboardArrowUp, MdKeyboardArrowDown } from 'react-icons/md'

import { Menu } from '@headlessui/react'

import { HouseContext } from './HouseContext'

const PriceRangeDropdown = () => {
  const { price, setPrice } = useContext(HouseContext)
  const [isOpen, setIsOpen] = useState(false)

  const prices = [
    {
      value: 'Price range (any)',
    },
    {
      value: '10000 - 30000',
    },
    {
      value: '30000 - 60000',
    },
    {
      value: '100000 - 130000',
    },
    {
      value: '130000 - 160000',
    },
    {
      value: '160000 - 190000',
    },
    {
      value: '190000 - 220000',
    },
  ]

  return (
    <Menu as='div' className='dropdown relative'>
      <Menu.Button
        className='dropdown-btn text-left w-full'
        onClick={() => setIsOpen(!isOpen)}
      >
        <FaWallet className='dropdown-icon-primary' />
        <div>
          <div className='text-[15px] font-medium leading-tight'>{price}</div>
          <div className='text-[12px] '>Select price range</div>
        </div>
        {isOpen ? (
          <MdOutlineKeyboardArrowUp className='dropdown-icon-secondary' />
        ) : (
          <MdKeyboardArrowDown className='dropdown-icon-secondary' />
        )}
      </Menu.Button>
      <Menu.Items className='dropdown-menu'>
        {prices.map((price, index) => {
          return (
            <Menu.Item
              as='li'
              className='cursor-pointer hover: text-violet-700 transition'
              key={index}
              onClick={() => setPrice(price.value)}
            >
              {price.value}
            </Menu.Item>
          )
        })}
      </Menu.Items>
    </Menu>
  )
}

export default PriceRangeDropdown
