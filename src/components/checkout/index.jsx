import { useEffect, useState } from 'react'
import { FiMinus, FiPlus } from 'react-icons/fi'
import { GoChevronRight, GoPlus } from 'react-icons/go'
import { AiOutlineDelete } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { IoBagCheckOutline } from 'react-icons/io5'
import { cartProductsData } from '../data'

const Checkout = () => {
  const [isOpen, setIsOpen] = useState({})
  const [showPopup, setShowPopup] = useState(false)
  const [paymentOption, setPaymentOption] = useState('online')

  // cart counter

  const [counter, setCounter] = useState([])

  const toggleCollapse = (sectionId) => {
    setIsOpen((prevOpen) => ({
      ...prevOpen,
      [sectionId]: !prevOpen[sectionId],
    }))
  }

  const [cartProducts, setCartProducts] = useState(cartProductsData)

  const IncrementCounter = (productId) => {
    setCounter((prevCounters) => ({
      ...prevCounters,
      [productId]: (prevCounters[productId] || 0) + 1,
    }))
  }

  const DecrementCounter = (productId) => {
    setCounter((prevCounters) => ({
      ...prevCounters,
      [productId]: Math.max((prevCounters[productId] || 0) - 1, 0),
    }))
  }

  const DeleteProduct = (id) => {
    const filteredProducts = cartProducts.filter((product) => product.id !== id)
    setCartProducts(filteredProducts)
  }

  const handlePaymentOptionChange = (option) => {
    setPaymentOption(option)
  }

  const handleCouponClick = () => {
    setShowPopup(true)
  }

  const closeCouponPopup = () => {
    setShowPopup(false)
  }

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }, [])

  return (
    <>
      <div className="lg:pt-10 lg:pb-12 text-center">
        <span className="text-black text-center font-poppins text-3xl md:text-4xl font-normal capitalize">
          Checkout
        </span>
        <div className="flex justify-center items-center text-black text-center font-poppins text-base font-normal gap-3 pt-1">
          <p className="my-auto">
            <Link to="/">Home</Link>
          </p>
          <GoChevronRight />
          <p className="my-auto">Checkout</p>
        </div>
      </div>
      <div className="flex flex-wrap lg:flex-nowrap justify-center items-start">
        <div className="pr-0 md:pr-10 py-10 w-4/5 space-y-5">
          <div className="col-span-2 border-b border-table p-3">
            <div
              className="flex items-center justify-between gap-5 cursor-pointer"
              onClick={() => toggleCollapse(1)}
            >
              <div className="flex flex-wrap md:flex-nowrap items-center justify-between font-poppins text-black text-lg font-medium w-full">
                <div className="flex flex-col">
                  <span className="font-semibold text-black/80">
                    Contact Information
                  </span>
                </div>
                <div>
                  {isOpen[1] ? <FiMinus size={26} /> : <GoPlus size={26} />}
                </div>
              </div>
            </div>
            <div
              className={`transition-max-height ease-in-out duration-300 overflow-hidden ${
                isOpen ? 'max-h-96' : 'max-h-0'
              }`}
            >
              {isOpen[1] && (
                <div className="flex items-center gap-5 font-poppins">
                  <form className="flex flex-col xl:flex-row flex-wrap justify-center py-3 space-y-3 xl:space-y-0 xl:space-x-7">
                    <div className="flex flex-col">
                      <label className="text-[#ADB5BD] text-base font-normal">
                        First Name*
                      </label>
                      <input
                        type="text"
                        className="border-b border-table outline-none py-2"
                        autoFocus
                      />
                    </div>
                    <div className="flex flex-col">
                      <label className="text-[#ADB5BD] text-base font-normal">
                        Last Name*
                      </label>
                      <input
                        type="text"
                        className="border-b border-table outline-none py-2"
                      />
                    </div>
                    <div className="flex flex-col">
                      <label className="text-[#ADB5BD] text-base font-normal">
                        Phone Number*
                      </label>
                      <input
                        type="text"
                        className="border-b border-table outline-none py-2"
                      />
                    </div>
                    <div className="text-center">
                      <button
                        type="submit"
                        className="flex items-center rounded-lg border-none outline-none bg-black shadow-lg text-white font-poppins text-base font-normal px-7 py-3 mx-auto mt-3"
                      >
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              )}
            </div>
          </div>
          <div className="col-span-2 border-b border-table p-3">
            <div
              className="flex items-center justify-between gap-5 cursor-pointer"
              onClick={() => toggleCollapse(2)}
            >
              <div className="flex flex-wrap md:flex-nowrap items-center justify-between font-poppins text-black text-lg font-medium w-full">
                <div className="flex flex-col">
                  <span className="font-semibold text-black/80">
                    Delivery Address
                  </span>
                </div>
                <div>
                  {isOpen[2] ? <FiMinus size={26} /> : <GoPlus size={26} />}
                </div>
              </div>
            </div>
            <div
              className={`transition-max-height ease-in-out duration-300 overflow-hidden ${
                isOpen ? 'max-h-96' : 'max-h-0'
              }`}
            >
              {isOpen[2] && (
                <div className="flex items-center gap-5">
                  <div className="py-3 space-y-3 transition duration-300">
                    <div className="flex items-center gap-5">
                      <div className="flex gap-3">
                        <input
                          type="radio"
                          defaultChecked
                          className="accent-slate-800"
                        />
                        <span className="font-poppins text-content font-medium">
                          John Doe
                        </span>
                      </div>
                      <div className="bg-black/10 font-poppins text-black text-xs font-medium px-2.5 py-0.5 rounded">
                        Office
                      </div>
                    </div>
                    <div>
                      <span className="font-poppins font-medium text-base text-black/60">
                        1220 Shivalik shilp, Sg highway, Iskcon Cross Rd,
                        Ahmedabad, Gujarat 380058
                      </span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="col-span-2 border-b border-table p-3">
            <div
              className="flex items-center justify-between gap-5 cursor-pointer"
              onClick={() => toggleCollapse(3)}
            >
              <div className="flex items-center justify-between font-poppins text-black text-lg font-medium w-full">
                <div className="flex flex-col">
                  <span className="font-semibold text-black/80">
                    Order Summary
                  </span>
                </div>
                <div>
                  {isOpen[3] ? <FiMinus size={26} /> : <GoPlus size={26} />}
                </div>
              </div>
            </div>
            <div className="ease-in-out duration-300">
              {isOpen[3] && (
                <div className="overflow-x-auto">
                  <table className="w-full text-sm text-left text-content font-poppins">
                    <thead className="text-xs text-content uppercase">
                      <tr>
                        <th scope="col" className="px-16 py-3">
                          <span className="sr-only">Image</span>
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Product
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Qty
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Price
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Action
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {cartProducts.map((product) => (
                        <tr
                          key={product.id}
                          className="bg-white border-b border-table"
                        >
                          <td className="p-4">
                            <img
                              src={product.image}
                              className="h-24 w-24 object-contain object-top"
                              alt="Cart Product"
                            />
                          </td>
                          <td className="px-6 py-4 font-medium text-content">
                            {product.product}
                          </td>
                          <td className="px-6 py-4">
                            <div className="flex items-center">
                              <button
                                className="inline-flex items-center justify-center p-1 me-3 text-sm font-medium h-6 w-6 text-content border border-table rounded-md"
                                type="button"
                              >
                                <div
                                  onClick={() => DecrementCounter(product.id)}
                                >
                                  <FiMinus className="h-4 w-4 text-content cursor-pointer" />
                                </div>
                              </button>
                              <div className="w-14 border border-table text-content text-sm rounded-lg block px-2.5 py-1">
                                <>{counter[product.id] || 0}</>
                              </div>
                              <button
                                className="inline-flex items-center justify-center p-1 ms-3 text-sm font-medium h-6 w-6 text-content border border-table rounded-md"
                                type="button"
                              >
                                <div
                                  onClick={() => IncrementCounter(product.id)}
                                >
                                  <FiPlus className="h-4 w-4 text-content cursor-pointer" />
                                </div>
                              </button>
                            </div>
                          </td>
                          <td className="px-6 py-4 font-medium text-content">
                            {product.price}
                          </td>
                          <td>
                            <AiOutlineDelete
                              size={20}
                              className="cursor-pointer text-content mx-auto"
                              onClick={() => DeleteProduct(product.id)}
                            />
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </div>
          <div className="col-span-2 border-b border-table p-3">
            <div
              className="flex items-center justify-between gap-5 cursor-pointer"
              onClick={() => toggleCollapse(4)}
            >
              <div className="flex items-center justify-between font-poppins text-black text-lg font-medium w-full">
                <div className="flex flex-col">
                  <span className="font-semibold text-black/80">
                    Payment Options
                  </span>
                </div>
                <div>
                  {isOpen[4] ? <FiMinus size={26} /> : <GoPlus size={26} />}
                </div>
              </div>
            </div>
            <div
              className={`transition-max-height ease-in-out duration-300 overflow-hidden ${
                isOpen ? 'max-h-96' : 'max-h-0'
              }`}
            >
              {isOpen[4] && (
                <div className="flex items-center justify-start gap-5">
                  <div className="flex gap-3 items-center py-3">
                    <input
                      type="radio"
                      id="onlinePayment"
                      name="paymentOption"
                      value="online"
                      className="accent-slate-800 outline-none"
                      checked={paymentOption === 'online'}
                      onChange={() => handlePaymentOptionChange('online')}
                    />
                    <label
                      htmlFor="onlinePayment"
                      className="text-base font-poppins text-content"
                    >
                      Online Payment
                    </label>
                  </div>
                  <div className="flex gap-3 items-center">
                    <input
                      type="radio"
                      id="cod"
                      name="paymentOption"
                      value="cod"
                      className="accent-slate-800 outline-none"
                      checked={paymentOption === 'cod'}
                      onChange={() => handlePaymentOptionChange('cod')}
                    />
                    <label
                      htmlFor="cod"
                      className="text-base font-poppins text-content"
                    >
                      Cash On Delivery
                    </label>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="border border-gray/20 rounded-lg shadow-xl px-4 my-10">
          <h2 className="font-poppins font-medium text-black text-xl border-b border-table mb-4 py-3">
            Price Details
          </h2>
          <div>
            <div>
              <div className="relative w-full">
                <input
                  type="search"
                  id="search-dropdown"
                  className="block p-2.5 w-64 z-20 text-sm text-content rounded-e-lg rounded-s-content rounded outline-none border border-table"
                  placeholder="12ERF455FDS"
                  required
                />
                <button
                  type="submit"
                  className="absolute top-0 end-0 p-2.5 h-full text-sm font-normal font-poppins text-white bg-black rounded-e-lg"
                >
                  Apply Coupon
                </button>
              </div>
            </div>
            <div className="flex justify-between py-2">
              <span className="font-poppins text-base text-black">
                Price (3 items)
              </span>
              <span className="font-poppins text-base text-black">$115</span>
            </div>
            <div className="flex justify-between py-2">
              <span className="font-poppins text-base text-black">
                Discount
              </span>
              <span className="font-poppins text-base text-black">$15</span>
            </div>
            <div className="flex justify-between py-2">
              <span className="font-poppins text-base text-black">Taxes</span>
              <span className="font-poppins text-base text-black">$15</span>
            </div>
            <div className="flex justify-between py-2">
              <span className="font-poppins text-base text-black">
                Delivery Charges
              </span>
              <span className="font-poppins text-base text-green-600">
                Free
              </span>
            </div>
            <div className="flex justify-between py-2 border-y border-dashed border-border">
              <span className="font-poppins text-xl text-black">
                Total Amount
              </span>
              <span className="font-poppins text-xl text-black">$100</span>
            </div>
            {/* <div className="flex items-center justify-center">
                    <div className="flex gap-3 items-center py-3">
                      <input
                        type="radio"
                        id="onlinePayment"
                        name="paymentOption"
                        value="online"
                        className='checked:bg-content outline-none'
                        checked={paymentOption === 'online'}
                        onChange={() => handlePaymentOptionChange('online')}
                      />
                      <label htmlFor="onlinePayment" className='text-base font-poppins text-content'>Online Payment</label>
                    </div>
                    <div className="flex gap-3 items-center">
                      <input
                        type="radio"
                        id="cod"
                        name="paymentOption"
                        value="cod"
                        className='checked:bg-content outline-none'
                        checked={paymentOption === 'cod'}
                        onChange={() => handlePaymentOptionChange('cod')}
                      />
                      <label htmlFor="cod" className='text-base font-poppins text-content'>Cash On Delivery</label>
                    </div>
                  </div> */}
            <Link to="/thankyou">
              <button className="flex gap-3 items-center rounded-lg border-none outline-none bg-black shadow-lg text-white font-poppins text-base font-normal px-7 py-3 mx-auto my-5">
                Place Order <IoBagCheckOutline size={26} />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Checkout
