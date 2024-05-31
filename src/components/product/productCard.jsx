import {
  AiFillHeart,
  AiOutlineHeart,
  AiOutlineShoppingCart,
} from 'react-icons/ai'
import { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import clsx from 'clsx'
import { MdOutlineStar } from 'react-icons/md'
import { productData } from '../data'

const Product = ({ selectedCategory }) => {
  const location = useLocation()

  const navigate = useNavigate()

  const navigateToCart = (e) => {
    e.preventDefault()
    navigate('/cart')
  }

  const [isLiked, setIsLiked] = useState([])

  const handleLike = (wishlistId) => {
    if (isLiked.includes(wishlistId)) {
      setIsLiked(isLiked.filter((id) => id !== wishlistId))
    } else {
      setIsLiked([...isLiked, wishlistId])
    }
  }

  const [filteredProducts, setFilteredProducts] = useState([])

  const displayProducts =
    filteredProducts.length > 0
      ? filteredProducts
      : productData.filter((product) =>
          product.category
            .split(', ')
            .map((category) => category.trim())
            .includes(selectedCategory),
        )

  return (
    <div className="mt-10">
      <div className="min-[380px]:grid xs:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 grid-flow-row gap-4 md:gap-7 2xl:gap-7 justify-center">
        {displayProducts.slice(0, 4).map((product) => (
          <Link key={product.id} to={`/product/${product.id}`}>
            <div className="max-w-60 h-[385px] sm:h-[360px] md:h-[375px] min-[833px]:h-[360px] sm:max-w-sm md:max-w-sm bg-white rounded-lg drop-shadow-xl mb-5 mx-auto">
              <img
                src={product.image}
                alt="Product"
                className={clsx(
                  'h-[230px] w-full object-cover rounded-t-lg transition duration-150 ease-linear transform hover:scale-105',
                  'object-top',
                )}
              />
              <div className="flex items-center overflow-hidden relative bottom-8 left-2">
                <span className="bg-white/75 text-gray-800 text-xs font-medium me-2 px-2 py-0.5 rounded flex items-center gap-1">
                  {product.reviews}{' '}
                  <MdOutlineStar
                    size={20}
                    className="text-sky-400 border-r-[1px] border-border pr-1"
                  />{' '}
                  <span className="text-black font-medium text-xs pl-0.5">
                    7
                  </span>
                </span>
              </div>
              <div className="-mt-4 px-3">
                <div className="flex flex-wrap md:justify-between">
                  <h3 className="text-black font-poppins text-lg font-medium overflow-ellipsis">
                    {product.title}
                  </h3>
                </div>
                <div className="my-3">
                  <p className="text-gray font-poppins text-xs font-medium truncate">
                    {product.category}
                  </p>
                </div>
                <div className="py-0">
                  <div className="flex flex-wrap md:justify-between items-center">
                    <span className="text-black font-poppins text-base sm:text-lg font-semibold text-wrap">
                      {product.price}
                    </span>
                    <span className="text-content line-through pl-2 font-poppins text-sm sm:text-base font-medium text-wrap">
                      $150
                    </span>
                    <span className="text-green-500 pl-2 font-poppins text-sm sm:text-base font-medium text-wrap">
                      25% off
                    </span>
                    <div
                      className={
                        location.pathname === '/product'
                          ? 'visible'
                          : 'invisible'
                      }
                    >
                      {isLiked.includes(product.id) ? (
                        <AiFillHeart
                          size={30}
                          className="absolute top-2 right-2 text-red-500 cursor-pointer"
                          onClick={(e) => {
                            e.preventDefault(), handleLike(product.id)
                          }}
                        />
                      ) : (
                        <AiOutlineHeart
                          size={30}
                          className="absolute top-2 right-2 text-red-500 cursor-pointer"
                          onClick={(e) => {
                            e.preventDefault(), handleLike(product.id)
                          }}
                        />
                      )}
                    </div>
                    <div
                      onClick={navigateToCart}
                      className="mr-auto sm:ml-auto"
                    >
                      <div className="bg-black text-white rounded-lg p-1">
                        <AiOutlineShoppingCart className="h-6 w-6" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="min-[380px]:grid xs:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 grid-flow-row gap-4 md:gap-7 2xl:gap-7 mt-5 justify-center">
        {displayProducts.slice(4, 8).map((product) => (
          <Link key={product.id} to={`/product/${product.id}`}>
            <div className="max-w-60 h-[360px] sm:max-w-sm md:max-w-sm bg-white rounded-lg drop-shadow-xl mb-7 mx-auto">
              <img
                src={product.image}
                alt="Product"
                className={clsx(
                  'h-[230px] w-full object-cover rounded-t-lg transition duration-150 ease-linear transform hover:scale-105',
                  'object-top',
                )}
              />
              <div className="flex items-center overflow-hidden relative bottom-8 left-2">
                <span className="bg-white/75 text-gray-800 text-xs font-medium me-2 px-2 py-0.5 rounded flex items-center gap-1">
                  {product.reviews}{' '}
                  <MdOutlineStar
                    size={20}
                    className="text-sky-400 border-r-[1px] border-border pr-1"
                  />{' '}
                  <span className="text-black font-medium text-xs pl-0.5">
                    7
                  </span>
                </span>
              </div>
              <div className="-mt-4 px-3">
                <div className="flex flex-wrap justify-between">
                  <h3 className="text-black font-poppins text-lg font-medium overflow-ellipsis">
                    {product.title}
                  </h3>
                  {/* <div>
                    <StarRating />
                  </div> */}
                </div>
                <div className="my-3">
                  <p className="text-gray font-poppins text-xs font-medium truncate">
                    {product.category}
                  </p>
                </div>
                <div className="py-0">
                  <div className="flex justify-between items-center">
                    <div>
                      <span className="text-black font-poppins text-lg font-semibold">
                        {product.price}
                      </span>
                      <span className="text-content line-through pl-2 font-poppins text-base font-medium">
                        $150
                      </span>
                      <span className="text-green-500 pl-2 font-poppins text-base font-medium">
                        25% off
                      </span>
                    </div>
                    <div onClick={navigateToCart} className="ml-auto">
                      <div className="bg-black text-white rounded-lg p-1">
                        <AiOutlineShoppingCart className="h-6 w-6" />
                      </div>
                    </div>
                    <div
                      className={
                        location.pathname === '/product'
                          ? 'visible'
                          : 'invisible'
                      }
                    >
                      {isLiked.includes(product.id) ? (
                        <AiFillHeart
                          size={30}
                          className="absolute top-2 right-2 text-red-500 cursor-pointer"
                          onClick={(e) => {
                            e.preventDefault(), handleLike(product.id)
                          }}
                        />
                      ) : (
                        <AiOutlineHeart
                          size={30}
                          className="absolute top-2 right-2 text-red-500 cursor-pointer"
                          onClick={(e) => {
                            e.preventDefault(), handleLike(product.id)
                          }}
                        />
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <div className="text-center">
        <button className="cursor-pointer py-4 px-12 text-base font-normal rounded-xl bg-black shadow-lg text-white">
          View More
        </button>
      </div>
    </div>
  )
}

export default Product
