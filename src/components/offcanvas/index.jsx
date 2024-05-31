import React, { useState } from 'react'
import { clsx } from 'clsx'
import { MdClose } from 'react-icons/md'
import { VscClose } from 'react-icons/vsc'
import { cartImg, cartImg2, cartImg3 } from '../../assets/images'
import { FiMinus, FiPlus } from 'react-icons/fi'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { IoBagCheckOutline } from 'react-icons/io5'
import { Link } from 'react-router-dom'

const openClassNames = {
  right: 'translate-x-0',
  left: 'translate-x-0',
  top: 'translate-y-0',
  bottom: 'translate-y-0',
}

const closeClassNames = {
  right: 'translate-x-full',
  left: '-translate-x-full',
  top: '-translate-y-full',
  bottom: 'translate-y-full',
}

const classNames = {
  right: 'inset-y-0 right-0',
  left: 'inset-y-0 left-0',
  top: 'inset-x-0 top-0',
  bottom: 'inset-x-0 bottom-0',
}

const Drawer = ({ open, setOpen, side = 'right' }) => {
  const [cartProducts, setCartProducts] = useState([
    {
      id: 1,
      image: cartImg,
      category: 'Fashion',
      product: 'Red Dress',
      price: '$95',
    },
    {
      id: 2,
      image: cartImg2,
      category: 'Fashion',
      product: 'Turtle Neck',
      price: '$75',
    },
    {
      id: 3,
      image: cartImg3,
      category: 'Fashion',
      product: 'Top & Skirt',
      price: '$55',
    },
    {
      id: 4,
      image: cartImg2,
      category: 'Fashion',
      product: 'Turtle Neck',
      price: '$95',
    },
    {
      id: 5,
      image: cartImg3,
      category: 'Fashion',
      product: 'Top & Skirt',
      price: '$95',
    },
  ])

  // cart counter

  const [counter, setCounter] = useState([])

  const IncrementCounter = (productId) => {
    setCounter((prevCounters) => ({
      ...prevCounters,
      [productId]: (prevCounters[productId] || 1) + 1,
    }))
  }

  const DecrementCounter = (productId) => {
    setCounter((prevCounters) => ({
      ...prevCounters,
      [productId]: Math.max((prevCounters[productId] || 1) - 1, 1),
    }))
  }

  const DeleteProduct = (id) => {
    const filteredProducts = cartProducts.filter((product) => product.id !== id)
    setCartProducts(filteredProducts)
  }

  return (
    <div
      id={`dialog-${side}`}
      className="relative z-10"
      aria-labelledby="slide-over"
      role="dialog"
      aria-modal="true"
      onClick={() => setOpen(!open)}
    >
      <div
        className={clsx(
          'fixed inset-0 bg-gray-500 bg-opacity-75 transition-all',
          {
            'opacity-100 duration-500 ease-in-out visible': open,
          },
          { 'opacity-0 duration-500 ease-in-out invisible': !open },
        )}
      ></div>
      <div className={clsx({ 'fixed inset-0 overflow-hidden': open })}>
        <div className="absolute inset-0 overflow-hidden">
          <div
            className={clsx(
              'pointer-events-none fixed max-w-full',
              classNames[side],
            )}
          >
            <div
              className={clsx(
                'pointer-events-auto relative w-full h-full transform transition ease-in-out duration-500',
                { [closeClassNames[side]]: !open },
                { [openClassNames[side]]: open },
              )}
              onClick={(event) => {
                event.preventDefault()
                event.stopPropagation()
              }}
            >
              <div
                className={clsx(
                  'flex flex-col h-full bg-white py-4 px-2 shadow-background shadow-inner overflow-y-scroll md:overflow-y-auto',
                )}
              >
                <div id="offcanvas">
                  <div className="flex justify-between items-center">
                    <h1 className="text-black text-3xl font-poppins font-medium">
                      Shopping Cart
                    </h1>
                    <MdClose
                      size={25}
                      className="text-secondary cursor-pointer"
                      onClick={() => setOpen(!open)}
                    />
                  </div>
                  <div className="cart-list border-y border-[#dee2e6] my-7 flex flex-col overflow-y-scroll h-80">
                    {cartProducts.map((product) => (
                      <div
                        className="flex content-between items-center gap-4 sm:gap-7 py-3 border-b border-[#dee2e6]"
                        key={product.id}
                      >
                        <div className="w-16 h-16">
                          <Link to="/product/*" onClick={() => setOpen(!open)}>
                            <img
                              src={product.image}
                              alt="cart-img"
                              className="h-full w-full rounded-full object-cover"
                            />
                          </Link>
                        </div>
                        <div className="flex flex-col flex-wrap">
                          <Link to="/product/*" onClick={() => setOpen(!open)}>
                            <h3 className="text-base truncate w-20 font-poppins text-black">
                              {product.product}
                            </h3>
                          </Link>
                          <p className="text-base text-gray font-poppins">
                            {product.category}
                          </p>
                        </div>
                        <div className="flex justify-between p-1 items-center border border-[#eee] rounded gap-2 sm:gap-5">
                          <div onClick={() => DecrementCounter(product.id)}>
                            <FiMinus className="h-4 w-4 text-content cursor-pointer" />
                          </div>
                          <div>{counter[product.id] || 1}</div>
                          <div onClick={() => IncrementCounter(product.id)}>
                            <FiPlus className="h-4 w-4 text-content cursor-pointer" />
                          </div>
                        </div>
                        <div className="my-auto text-content font-poppins font-medium">
                          {product.price}
                        </div>
                        <div>
                          <VscClose
                            size={20}
                            className="cursor-pointer text-content"
                            onClick={() => DeleteProduct(product.id)}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="border-t border-[#dee2e6]">
                    <div className="flex justify-between px-3 py-5">
                      <h3 className="font-poppins text-black text-lg font-normal">
                        Subtotal
                      </h3>
                      <div className="font-poppins text-black text-lg font-normal">
                        $100.00
                      </div>
                    </div>
                    <div className="flex flex-col gap-5">
                      <Link to="/cart">
                        <button
                          className="flex gap-3 items-center rounded-lg border-none outline-none bg-black shadow-lg text-white font-poppins text-base font-normal px-[96px] py-3 mx-auto"
                          onClick={() => setOpen(!open)}
                        >
                          Cart <AiOutlineShoppingCart size={26} />
                        </button>
                      </Link>
                      <Link to="/checkout">
                        <button
                          className="flex gap-3 items-center rounded-lg border-none outline-none bg-black shadow-lg text-white font-poppins text-base font-normal px-[76px] py-3 mx-auto"
                          onClick={() => setOpen(!open)}
                        >
                          Checkout <IoBagCheckOutline size={26} />
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Drawer
