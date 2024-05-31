import { useState } from 'react'
import ProductCard from './productCard'
import { Link, useLocation } from 'react-router-dom'
import { GoChevronRight } from 'react-icons/go'
import { productCategoriesData } from '../data'

const ProductList = () => {
  const [selectedCategory, setSelectedCategory] = useState('All Products')

  const handleCategoryClick = (category) => {
    setSelectedCategory(category)
  }

  const location = useLocation()

  const Breadcrumbs = () => {
    return (
      <div className="my-auto px-5 py-7 lg:pt-11 lg:pb-4 sm:px-0 mx-auto text-center">
        <span className="text-black font-poppins text-3xl md:text-4xl font-normal capitalize mt-4 md:mt-0">
          New Arrivals
        </span>
        <div className="breadcrumb flex text-center justify-center text-black font-poppins text-sm md:text-base font-normal gap-1 md:gap-3 mt-0 md:mt-1">
          <Link to="/">Home</Link>
          <GoChevronRight className="my-auto" />
          <span>New Arrivals</span>
        </div>
      </div>
    )
  }

  return (
    <div>
      {location.pathname === '/product' && (
        <Breadcrumbs selectedCategory={selectedCategory} />
      )}

      <div
        id="productlist"
        className={`mt-14 ${location.pathname === '/product' ? 'lg:mt-0' : 'mt-14'} `}
      >
        {location.pathname === '/product' ? (
          ''
        ) : (
          <>
            <h1 className="text-content text-center font-poppins text-4xl lg:text-5xl">
              New Arrivals
            </h1>
            <p className="text-gray text-center font-poppins font-normal pt-5">
              Discover the latest in fashion with our new arrivals! From chic
              dresses to trendy tops, our collection has everything you need to
              elevate your style. Whether you're looking for casual everyday
              wear or something special for a night out, our new arrivals are
              sure to impress.
            </p>
          </>
        )}
        <div className="py-12">
          <div className="mx-auto">
            {/* <ul className="grid grid-cols-1 xs:grid-cols-3 sm:grid-cols-5 md:grid-cols-7 lg:grid-cols-7 grid-flow-row xs:justify-items-center lg:justify-items-center gap-10"> */}
            <ul className="flex flex-row flex-wrap justify-center xl:justify-between gap-5">
              {productCategoriesData.map((category, index) => (
                <li
                  key={index}
                  onClick={() => handleCategoryClick(category)}
                  // className="py-3 px-3 text-center rounded-lg text-content hover:text-white bg-gray/10 hover:bg-black hover:shadow-content hover:shadow-2xl"
                  className={`py-3 px-3 text-center rounded-lg text-content text-nowrap font-poppins cursor-pointer justify-self-center ${
                    selectedCategory === category
                      ? 'bg-black text-white my-auto'
                      : 'bg-gray/10 hover:bg-black hover:text-white my-auto'
                  }`}
                >
                  {category}
                </li>
              ))}
              {/* <li className='invisible md:visible'></li>
              <li className='invisible md:visible'></li> */}
            </ul>
          </div>

          {/* product card started */}

          <ProductCard selectedCategory={selectedCategory} />

          {/* product card ended */}
        </div>
      </div>
    </div>
  )
}

export default ProductList
