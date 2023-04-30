import React from 'react'
import { Link } from 'react-router-dom'
import { SlSocialGithub } from 'react-icons/sl'
import { SlSocialLinkedin } from 'react-icons/sl'
import { SlSocialTwitter } from 'react-icons/sl'

import { BsTelephone } from 'react-icons/bs'
import { AiOutlineMail } from 'react-icons/ai'

const Footer = () => {
  return (
    <div className='mt-10 bg-white text-black border-4 border-double  border-t-violet-700'>
      <div className='container mx-auto mb-6 '>
        <div className='flex  flex-col lg:flex-row lg:justify-between lg:my-4 '>
          <div className='mt-2'>
            <div className='text-[34px] font-semibold flex leading-none'>
              <Link to='/'>
                <span className=' '>GraceLand</span>
              </Link>
              <span className='font-bold text-violet-700 '>.</span>
            </div>
            <p className='w-[350px] mt-4'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
              non voluptate commodi consequatur, quibusdam quas quia corporis
              quae iste maiores.
            </p>
          </div>
          <div className='my-4'>
            <h1 className='mb-2 font-bold'>LINKS</h1>
            <div className='flex flex-col gap-y-2'>
              <Link>HOME</Link>
              <Link>SERVICES</Link>
              <Link>CONTACT</Link>
              <Link>FAQS</Link>
            </div>
          </div>
          <div>
            <div className='my-4'>
              <h1 className='mb-4 font-bold'>FOLLOW OUR SOCIAL ACCOUNT</h1>
              <div className='flex gap-x-4'>
                <div>
                  <p>
                    <a
                      href='https://www.linkedin.com/in/babatunde-olatunji-peter-1b5181119'
                      relative='path'
                      style={{
                        textDecoration: 'none',
                        color: 'inherit',
                      }}
                      target='_blank'
                      rel='noreferrer'
                    >
                      <SlSocialLinkedin className='icon' />
                    </a>
                  </p>
                </div>
                <div>
                  <p>
                    <a
                      href='https://www.twitter.com/petolatunji'
                      relative='path'
                      style={{
                        textDecoration: 'none',
                        color: 'inherit',
                      }}
                      target='_blank'
                      rel='noreferrer'
                    >
                      <SlSocialTwitter className='icon' />
                    </a>
                  </p>
                </div>
                <div>
                  <p>
                    <a
                      href='https://github.com/petolatunji'
                      relative='path'
                      style={{
                        textDecoration: 'none',
                        color: 'inherit',
                      }}
                      target='_blank'
                      rel='noreferrer'
                    >
                      <SlSocialGithub className='icon' />
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className='mt-6 '>
              <h1 className='my-2 font-bold'>CONTACT US</h1>
              <div className='flex items-center gap-x-2'>
                <AiOutlineMail className='icon' />
                <p>Peterolatunji1@gmail.com</p>
              </div>
              <div className='flex items-center gap-x-2 mt-2'>
                <BsTelephone className='icon' />
                <p>+2348132163481</p>
              </div>
            </div>
          </div>
        </div>
        <div className='text-center bg-violet-700 text-white font-semibold p-2 mt-6'>
          <p>Copyright Petolatunji 2023 All Right Reserved</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
