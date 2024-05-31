import Classifications from '../components/classifications'
import Product from '../components/product/index'
import { leftHero, rightHero, centerUpHero, centerDownHero } from '../assets/images/index'
import { GoArrowUp } from 'react-icons/go'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <div>
      <div id="hero-section" className="relative">
        <div className="grid lg:grid-cols-4 gap-10 text-center mx-auto pt-0 lg:pt-11">
          <div className="rounded-lg bg-background mx-auto col-span-1">
            <img
              src={leftHero}
              alt="Fashion Men"
              className="lg:pt-32 h-auto w-auto mx-auto hidden lg:block"
            />
          </div>
          <div className="col-span-2">
            <div className="rounded-lg bg-background px-3">
              <img src={centerUpHero} alt="Fashion Women" className="mx-auto" />
            </div>
            <div className="pt-5">
              <h1 className="uppercase text-content text-center tracking-tighter font-poppins text-7xl mx-auto">
                ultimate
              </h1>
              <h1
                style={{
                  WebkitTextFillColor: 'white',
                  WebkitTextStrokeWidth: '1px',
                  WebkitTextStrokeColor: '#484848',
                  fontSize: '120px',
                }}
                className="text-center font-poppins tracking-tight leading-none uppercase"
              >
                sale
              </h1>
              <p className="uppercase py-3 text-content text-center font-poppins text-xl font-medium tracking-widest">
                new collection
              </p>
              <div className="my-1">
                <Link to="/shop">
                  <button className="uppercase px-14 py-4 font-normal font-poppins bg-black text-white rounded-lg">
                    shop now
                  </button>
                </Link>
              </div>
            </div>
            <div className="flex mt-7 rounded-lg bg-background px-3">
              <img
                src={centerDownHero}
                alt="Fashion Women"
                className="mx-auto h-40"
              />
            </div>
          </div>
          <div className="rounded-lg bg-background">
            <img
              src={rightHero}
              alt="Fashion Men"
              className="mx-auto hidden lg:block"
            />
          </div>
          <div className="fixed bottom-5 right-3 sm:right-6 md:right-5">
            <div
              className="border border-content rounded-full p-1 sm:p-2 my-auto"
              onClick={scrollToTop}
            >
              <GoArrowUp className="h-6 w-6 cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
      <Classifications />
      <Product />
    </div>
  )
}

export default Home
