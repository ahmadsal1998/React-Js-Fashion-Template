import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { GoChevronRight } from 'react-icons/go'
import { FiMinus, FiPlus } from 'react-icons/fi'
import { IoBagCheckOutline } from 'react-icons/io5'
import { VscClose } from 'react-icons/vsc'
import { cartData } from '../data'


const Cart = () => {

  const [counter, setCounter] = useState(0)

  const IncrementCounter = () => {
    setCounter((prevCounter) => prevCounter + 1)
  }

  const DecrementCounter = () => {
    setCounter((prevCounter) => prevCounter - 1)
  }

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }, [])

  return (
    <div>
      <div className="lg:pt-10 lg:pb-12 text-center">
        <span className="text-black text-center font-poppins text-3xl md:text-4xl font-normal capitalize">
          Shopping Cart
        </span>
        <div className="flex flex-wrap justify-center items-center text-black text-center font-poppins text-base font-normal gap-3 pt-1">
          <p className="my-auto">
            <Link to="/">Home</Link>
          </p>
          <GoChevronRight />
          <p className="my-auto">Your Shopping Cart</p>
        </div>
      </div>

      <div className="flex flex-col">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 sm:px-8 lg:px-8">
            <table className="min-w-full overflow-x-auto text-left text-sm font-light">
              <thead className="border-b border-[#eee] font-medium">
                <tr className="font-poppins text-lg text-black">
                  <th scope="col" className="px-2 py-4">
                    Product
                  </th>
                  <th scope="col" className="px-10 py-4">
                    Add Item
                  </th>
                  <th scope="col" className="px-2 py-4 text-center">
                    Price
                  </th>
                  <th scope="col" className="px-2 py-4 text-center">
                    Tax
                  </th>
                  <th scope="col" className="px-2 py-4 text-center">
                    Total
                  </th>
                </tr>
              </thead>
              <tbody>
                {cartData.map((item) => (
                  <tr key={item.id} className="border-b border-[#eee]">
                    <td>
                      <div className="flex flex-wrap flex-col md:flex-row gap-5 py-3">
                        <div>
                          <img
                            src={item.image}
                            alt="Product"
                            className="h-20 w-20 object-cover rounded-full"
                          />
                        </div>
                        <div className="flex flex-col space-y-3">
                          <span className="text-lg font-poppins text-black">
                            {item.name}
                          </span>
                          <span className="text-base font-poppins text-content">
                            {item.color}
                          </span>
                        </div>
                      </div>
                    </td>
                    <td className='px-10'>
                      <div className="w-24 flex items-center py-1 border border-[#eee] rounded-md gap-5">
                        <div onClick={() => DecrementCounter(item.id)}>
                          <FiMinus className="h-5 w-5 cursor-pointer" />
                        </div>
                        <div className="text-black text-base font-normal">
                          {counter}
                        </div>
                        <div onClick={() => IncrementCounter(item.id)}>
                          <FiPlus className="h-5 w-5 cursor-pointer" />
                        </div>
                      </div>
                    </td>
                    <td className="font-poppins px-10 text-lg text-black text-center">
                      ${item.price.toFixed(2)}
                    </td>
                    <td className="font-poppins px-10 text-lg text-black text-center">
                      $10
                    </td>
                    <td className="font-poppins px-10 text-lg text-black text-center">
                      ${item.price.toFixed(2)}
                    </td>
                    <td>
                      <VscClose
                        size={20}
                        className="cursor-pointer text-content"
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="mt-3">
              <div className="grid grid-cols-3 grid-flow-col ml-auto text-right">
                <div className="col-span-2"></div>
                <div className="border-t border-[#eee]">
                  <div className="flex justify-between py-2 border-y border-dashed border-border">
                    <span className="font-poppins text-xl text-black">
                      Total Amount
                    </span>
                    <span className="font-poppins text-xl text-black">
                      $100
                    </span>
                  </div>
                  <button>
                    <Link
                      to="/checkout"
                      className="flex gap-3 items-center rounded-lg border-none outline-none bg-black shadow-lg text-white font-poppins text-base font-normal px-4 py-3 mx-auto my-5 sm:px-6 lg:px-8"
                    >
                      Complete Checkout <IoBagCheckOutline size={26} />
                    </Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
