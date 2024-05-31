import { GoChevronRight } from 'react-icons/go'
import { Link } from 'react-router-dom'
import { aboutus } from '../../assets/images/index'
import { PiCaretRightThin } from 'react-icons/pi'
import { useEffect } from 'react'

const AboutUs = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }, [])

  return (
    <div>
      <div className="my-auto px-5 py-7 lg:py-11 sm:px-0 mx-auto text-center">
        <span className="text-black font-poppins text-3xl md:text-4xl font-normal capitalize mt-4 md:mt-0">
          About Us
        </span>
        <div className="breadcrumb flex text-center justify-center text-black font-poppins text-sm md:text-base font-normal gap-1 md:gap-3 mt-0 md:mt-1">
          <Link to="/">Home</Link>
          <GoChevronRight className="my-auto" />
          <span>About Us</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 grid-flow-row gap-5 mt-5 mb-12">
        <div className="col-span-2 lg:-order-1 order-2">
          <div>
            <h1 className="text-3xl text-black font-semibold font-poppins">
              What We Offer
            </h1>
          </div>
          <div className="font-poppins space-y-3 pt-5">
            <p className="text-base text-content font-normal">
              While random text is mostly intended to just fill up the blank
              spaces, for many practical purposes you essentially want the look
              and feel of the dummy text you are going to use to be as close as
              possible
            </p>
            <p className="text-base text-content font-normal">
              Considering that different language, writing style and substance
              of text result in an endless variety of different word
              combinations and visual impressions
            </p>
          </div>
          <div className="py-5">
            <h3 className="text-2xl text-black font-semibold font-poppins">
              Areas we target
            </h3>
          </div>
          <div className="space-y-3">
            <div className="flex flex-row items-center gap-3">
              <PiCaretRightThin size={20} />
              <p className="text-base text-content font-normal">
                While randome text is mostly intended to just fill up the blank
                spaces
              </p>
            </div>
            <div className="flex flex-row items-center gap-3">
              <PiCaretRightThin size={20} />
              <p className="text-base text-content font-normal">
                While randome text is mostly intended to just fill up the blank
                spaces
              </p>
            </div>
            <div className="flex flex-row items-center gap-3">
              <PiCaretRightThin size={20} />
              <p className="text-base text-content font-normal">
                While randome text is mostly intended to just fill up the blank
                spaces
              </p>
            </div>
          </div>
          <div className="py-5">
            <h3 className="text-2xl text-black font-semibold font-poppins">
              Our standout story
            </h3>
          </div>
          <div>
            <p className="text-base text-content font-normal">
              Considering that different language, writing style and substance
              of text result in an endless variety of different word
              combinations and visual impressions that a piece of text can have
              and make, it is always a plus to have it use the right kind of
              words and look like the final product as much as possible
            </p>
          </div>
        </div>
        <div>
          <img
            src={aboutus}
            alt="About Fashionista"
            className="h-full w-96 object-cover rounded-md mx-auto"
          />
        </div>
      </div>
    </div>
  )
}

export default AboutUs
