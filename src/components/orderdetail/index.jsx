import { useEffect, useState } from 'react'
import { RiCloseLine } from 'react-icons/ri'
import { IoMdStar } from 'react-icons/io'
import { orderedImage } from '../../assets/images/index'
import { Link } from 'react-router-dom'

const OrderDetail = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }, [])

  const [currentStep, setCurrentStep] = useState(0)
  const [showPopup, setShowPopup] = useState(false)
  const [starsFilled, setStarsFilled] = useState([
    false,
    false,
    false,
    false,
    false,
  ])
  const NUMBER_OF_STEPS = 5

  const goToNextStep = () =>
    setCurrentStep((prev) => (prev === NUMBER_OF_STEPS - 1 ? prev : prev + 1))
  const goToPreviousStep = () =>
    setCurrentStep((prev) => (prev <= 0 ? prev : prev - 1))

  const handleReviewClick = () => {
    setShowPopup(true)
  }

  const handleStarClick = (index) => {
    const newStarsFilled = starsFilled.map((value, i) => i <= index)
    setStarsFilled(newStarsFilled)
  }

  const StarRating = () => {
    const stars = Array.from({ length: 5 }, (_, index) => (
      <div key={index} onClick={() => handleStarClick(index)}>
        <IoMdStar
          size={24}
          className={`cursor-pointer ${starsFilled[index] ? 'text-[#FCA120]' : 'text-gray-300'}`}
        />
      </div>
    ))

    return <div className="flex">{stars}</div>
  }

  return (
    <div>
      <div id="orderdetail" className="py-14 font-poppins">
        <div>
          <span className="text-content font-medium text-2xl">
            Order Details
          </span>
        </div>
        <div className="flex flex-wrap gap-3 md:gap-0 justify-between items-center">
          <div className="flex gap-3 sm:gap-5 divide-x divide-border">
            <span className="text-content text-base font-normal">
              Ordered on 3 February 2024
            </span>
            <span className="text-content text-base font-normal pl-5">
              Order #404-967-7098
            </span>
          </div>
          <div>
            <button className="relative overflow-hidden py-1 px-5 border border-content transition duration-300 rounded-md group">
              <span className="absolute inset-0 bg-black origin-left transform scale-x-0 transition-transform group-hover:scale-x-100 duration-300"></span>
              <span className="relative z-10 font-poppins group-hover:text-white">
                Print Invoice
              </span>
            </button>
          </div>
        </div>
        <div className="border border-border rounded-md p-5 mt-5">
          <div className="flex flex-wrap justify-between">
            <div className="flex flex-col space-y-2">
              <span className="text-base text-black font-medium">
                Shipping Address
              </span>
              <span className="text-base text-content font-normal">John</span>
              <span className="text-base text-content font-normal">
                B 1303 Sun South Park
              </span>
              <span className="text-base text-content font-normal">
                Opp Auda Garden
              </span>
              <span className="text-base text-content font-normal">
                Ahmedabad, Gujarat
              </span>
              <span className="text-base text-content font-normal">India</span>
            </div>
            <div className="flex flex-col">
              <span className="text-base text-black font-medium">
                Payment Methods
              </span>
              <span className="text-base text-content font-normal">
                Cash Payment
              </span>
            </div>
            <div className="flex flex-col mt-5 sm:mt-0">
              <span className="text-base text-black font-medium">
                Order Summary
              </span>
              <div className="flex gap-7 xs:gap-16 md:gap-56 justify-between">
                <div className="flex flex-col space-y-2">
                  <span className="text-base text-content font-normal">
                    Item Subtotal:
                  </span>
                  <span className="text-base text-content font-normal">
                    Shipping:
                  </span>
                  <span className="text-base text-content font-normal">
                    Total:
                  </span>
                  <span className="text-base text-black font-semibold">
                    Grand Total:
                  </span>
                </div>
                <div className="flex flex-col space-y-2">
                  <span className="text-base text-content font-normal">
                    ₹5,499.00
                  </span>
                  <span className="text-base text-content font-normal">
                    ₹0.00
                  </span>
                  <span className="text-base text-content font-normal">
                    ₹5,499.00
                  </span>
                  <span className="text-base text-black font-semibold">
                    ₹5,499.00
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="border border-border rounded-md p-5 mt-5">
          <div className="flex flex-col">
            <span className="text-black text-lg font-semibold">
              Delivered 03-Feb-2024
            </span>
            <span className="text-content text-base font-normal">
              The package has been personally handed to the delighted customer!
            </span>
          </div>
          <div className="flex flex-wrap justify-between gap-5 pt-3">
            <div className="flex gap-10">
              <div>
                <img
                  src={orderedImage}
                  alt="Ordered Product"
                  className="h-32 w-32 object-cover"
                />
              </div>
              <div className="flex flex-col space-y-2">
                <span className="text-content text-base font-normal">
                  iPhone 11
                </span>
                <span className="text-content text-base font-normal">
                  (Aqua Black, 8GB, 256GB Storage)
                </span>
                <span className="text-content text-base font-normal">
                  ₹5,499.00
                </span>
                <div>
                  <Link to="/product/*">
                    <button className="relative overflow-hidden py-2 px-3 border border-content transition duration-300 rounded-md group">
                      <span className="absolute inset-0 bg-black origin-left transform scale-x-0 transition-transform group-hover:scale-x-100 duration-300"></span>
                      <span className="relative z-10 group-hover:text-white">
                        View Detail
                      </span>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            {showPopup && (
              <div className="bg-white rounded-lg shadow-xl w-96 mx-auto">
                <div className="flex justify-between items-center px-6 py-4 bg-gray-200 rounded-t-lg">
                  <h2 className="text-lg font-poppins text-black font-bold">
                    Give Us Your Valuable Reviews
                  </h2>
                  <button
                    onClick={() => setShowPopup(false)}
                    className="text-content"
                  >
                    <RiCloseLine size={24} />
                  </button>
                </div>
                <div className="flex justify-center">
                  <StarRating />
                </div>
                <div className="text-center py-3">
                  <textarea
                    type="text"
                    className="border border-border rounded outline-none p-1 w-auto md:w-80"
                    placeholder="Write your review here..."
                  />
                </div>
                <div className="text-center py-3">
                  <button className="relative overflow-hidden py-2 px-3 border border-content transition duration-300 rounded-md group">
                    <span className="absolute inset-0 bg-black origin-left transform scale-x-0 transition-transform group-hover:scale-x-100 duration-300"></span>
                    <span className="relative z-10 font-poppins group-hover:text-white">
                      Rate Us
                    </span>
                  </button>
                </div>
              </div>
            )}
            <div className="mx-auto sm:mx-0">
              <button
                onClick={handleReviewClick}
                className="rounded-full border border-black outline-none text-black font-poppins text-base font-normal px-4 py-3 my-5 sm:px-6 lg:px-8"
              >
                Give a Review!
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OrderDetail
