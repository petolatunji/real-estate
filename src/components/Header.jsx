import React from 'react'
import { Link } from 'react-router-dom'

import Logo from '../assets/img/logo.svg'

const Header = () => {
  return (
    <div className='py-6 mb-12 border-b'>
      <div className='container flex items-center justify-between mx-auto'>
        <Link to='/'>
          <img src={Logo} alt='' />
        </Link>
        <div className='flex items-center gap-6'>
          <Link className='transition hover:text-violet-700'>Sign In</Link>
          <Link className='px-4 py-3 text-white transition rounded-lg bg-violet-700 hover:bg-violet-800'>
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Header
