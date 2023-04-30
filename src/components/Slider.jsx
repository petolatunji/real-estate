import { Link } from 'react-router-dom'
import React, { useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Navigation, FreeMode, Thumbs } from 'swiper'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import 'swiper/css/free-mode'
import 'swiper/css/thumbs'

import { imageData } from '../heroData'

const Slider = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null)

  return (
    <div>
      <div>
        <div className='flex relative'>
          <Swiper
            slidesPerView={'auto'}
            centeredSlides={'true'}
            spaceBetween={20}
            navigation={true}
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            thumbs={{ swiper: thumbsSwiper }}
            style={{
              '--swiper-navigation-color': '#7b1fa2',
              '--swiper-pagination-color': '#7b1fa2',
            }}
            loop={true}
            modules={[Pagination, Navigation, Autoplay, FreeMode, Thumbs]}
          >
            {imageData.map((item) => {
              return (
                <SwiperSlide>
                  <div>
                    <div className='relative items-center text-black mb-12'>
                      <img
                        src={item.icon}
                        alt=''
                        className='w-screen h-screen object-cover'
                      />
                    </div>

                    <div className='absolute top-[50%] left-[50%] -translate-x-2/4 -translate-y-2/4'>
                      <h1 className='text-[50px] font-bold text-white w-[200px] lg:w-[500px]'>
                        {item.desc}
                      </h1>
                    </div>
                  </div>
                </SwiperSlide>
              )
            })}
          </Swiper>
        </div>
      </div>
    </div>
  )
}

export default Slider
