import { useState } from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai'
import { MdOutlineStar } from 'react-icons/md'
import { wishlistData } from '../data'

const wishlistCard = ({ columns = 4 }) => {

  const [isLiked, setIsLiked] = useState([])

  const handleLike = (wishlistId) => {
    if (isLiked.includes(wishlistId)) {
      setIsLiked(isLiked.filter((id) => id !== wishlistId))
    } else {
      setIsLiked([...isLiked, wishlistId])
    }
  }

  return (
    <div className="mt-10">
      <div
        className={`grid xs:grid-cols-2 lg:grid-cols-3 xl:grid-cols-${columns} grid-flow-row gap-4 md:gap-7 2xl:gap-20 justify-center items-stretch`}
      >
        {wishlistData.slice(0, 4).map((product) => (
          <div
            key={product.id}
            className="max-w-60 sm:max-w-sm md:max-w-sm bg-white rounded-lg drop-shadow-2xl mb-5 relative"
          >
            <Link to="/product/*">
              <img
                src={product.image}
                alt="Product"
                className="h-[230px] w-full object-cover object-top rounded-t-lg transition duration-150 ease-linear transform hover:scale-105"
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
            </Link>
            <div className="-mt-4 px-3">
              <div className="flex justify-between">
                <h3 className="text-black font-poppins text-lg font-medium overflow-ellipsis">
                  {product.title}
                </h3>
              </div>
              <div className="my-3">
                <p className="text-gray font-poppins text-xs font-medium truncate">
                  {product.category}
                </p>
              </div>
              <div className="pb-3">
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
                  <Link to="/cart" className="ml-auto">
                    <div className="bg-black text-white rounded-lg p-1">
                      <AiOutlineShoppingCart className="h-6 w-6" />
                    </div>
                  </Link>
                  <div>
                    {isLiked.includes(product.id) ? (
                      <AiOutlineHeart
                        size={30}
                        className="absolute top-2 right-2 text-red-500 cursor-pointer"
                        onClick={() => handleLike(product.id)}
                      />
                    ) : (
                      <AiFillHeart
                        size={30}
                        className="absolute top-2 right-2 text-red-500 cursor-pointer"
                        onClick={() => handleLike(product.id)}
                      />
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div
        className={`grid xs:grid-cols-2 lg:grid-cols-3 xl:grid-cols-${columns} grid-flow-row gap-4 md:gap-7 mt-5 justify-center`}
      >
        {wishlistData.slice(4, 8).map((product) => (
          <Link to="/product/*">
            <div
              key={product.id}
              className="max-w-60 sm:max-w-sm md:max-w-sm bg-white rounded-lg drop-shadow-xl mb-5 relative"
            >
              {isLiked.includes(product.id) ? (
                <AiFillHeart
                  size={30}
                  className="absolute top-2 right-2 text-red-500 cursor-pointer"
                  onClick={() => handleLike(product.id)}
                />
              ) : (
                <AiOutlineHeart
                  size={30}
                  className="absolute top-2 right-2 text-red-500 cursor-pointer"
                  onClick={() => handleLike(product.id)}
                />
              )}
              <img
                src={product.image}
                alt="Product"
                className="h-[230px] w-full object-cover object-top rounded-t-lg transition duration-150 ease-linear transform hover:scale-105"
              />
              <div className="my-5 px-3">
                <div className="flex justify-between">
                  <h3 className="text-content font-poppins text-lg font-medium overflow-ellipsis">
                    {product.title}
                  </h3>
                  <div>
                    <StarRating />
                  </div>
                </div>
                <div className="my-3">
                  <p className="text-gray font-poppins text-xs font-medium truncate">
                    {product.category}
                  </p>
                </div>
                <div>
                  <p className="text-content font-poppins text-xs font-medium">
                    {product.reviews}
                  </p>
                </div>
                <div className="py-3">
                  <div className="flex justify-between items-center">
                    <div>
                      <span className="text-content font-poppins text-xl font-medium">
                        {product.price}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <div className="text-center mt-5">
        <Link to="/product/*">
          <button className="cursor-pointer py-4 px-12 text-base font-normal font-poppins rounded-xl bg-black shadow-lg text-white">
            View More
          </button>
        </Link>
      </div>
    </div>
  )
}

export default wishlistCard
