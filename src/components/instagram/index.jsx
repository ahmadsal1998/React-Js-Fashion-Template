import { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode, Autoplay, Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/pagination'
import { LiaLessThanSolid, LiaGreaterThanSolid } from 'react-icons/lia'

// images import
import { slide1, slide2, slide3, slide4, slide5, slide6 } from '../../assets/images/index'

const Instagram = () => {
  const [slidesPerView, setSlidesPerView] = useState(7)

  useEffect(() => {
    const updateSlidesPerView = () => {
      if (window.innerWidth > 1366) {
        setSlidesPerView(7)
      } else if (window.innerWidth >= 1022) {
        setSlidesPerView(7)
      } else if (window.innerWidth >= 768) {
        setSlidesPerView(5)
      } else if (window.innerWidth >= 576) {
        setSlidesPerView(3)
      } else if (window.innerWidth >= 362) {
        setSlidesPerView(3)
      } else {
        setSlidesPerView(7)
      }
    }

    updateSlidesPerView()

    window.addEventListener('resize', updateSlidesPerView)

    return () => {
      window.removeEventListener('resize', updateSlidesPerView)
    }
  }, [slidesPerView])

  return (
    <div>
      <h1 className="capitalize text-content text-center font-poppins text-4xl lg:text-5xl">
        our fashion
      </h1>
      <p className="text-gray font-poppins text-center text-base py-4 px-5">
        Explore the latest trends in women's fashion, from elegant dresses to
        stylish accessories, and stay ahead of the curve!
      </p>

      <div id="instagram-slider" className="py-12 relative">
        <Swiper
          slidesPerView={slidesPerView}
          spaceBetween={0}
          freeMode={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          loop={true}
          navigation={{
            prevEl: '.swiper-button-prev',
            nextEl: '.swiper-button-next',
          }}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Autoplay, Navigation]}
          className="mySwiper slider-images"
        >
          <SwiperSlide className="my-auto">
            <img src={slide1} alt="Slide 1" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide2} alt="Slide 2" />
          </SwiperSlide>
          <SwiperSlide className="my-auto">
            <img src={slide3} alt="Slide 3" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide4} alt="Slide 4" />
          </SwiperSlide>
          <SwiperSlide className="my-auto">
            <img src={slide5} alt="Slide 5" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide6} alt="Slide 6" />
          </SwiperSlide>
          <SwiperSlide className="my-auto">
            <img src={slide1} alt="Slide 1" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={slide2} alt="Slide 2" />
          </SwiperSlide>
          <SwiperSlide className="my-auto">
            <img src={slide3} alt="Slide 3" />
          </SwiperSlide>
        </Swiper>
        <div className="flex justify-between items-center">
          <div className="absolute top-1/2 z-50 left-4 flex items-center justify-center w-10 h-10 border border-white bg-transparent text-white text-2xl rounded-full cursor-pointer swiper-button-prev">
            <LiaLessThanSolid size={20} className='my-auto' />
          </div>
          <div className="absolute top-1/2 z-50 right-4 flex items-center justify-center w-10 h-10 border border-white bg-transparent text-white text-2xl rounded-full cursor-pointer swiper-button-next">
            <LiaGreaterThanSolid size={20} className='my-auto' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Instagram
