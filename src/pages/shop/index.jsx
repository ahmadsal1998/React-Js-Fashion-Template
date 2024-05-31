import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { GoChevronRight, GoChevronDown } from 'react-icons/go'
import { PiCaretDoubleRight } from 'react-icons/pi'
import {
  AiOutlineShoppingCart,
  AiOutlineFacebook,
  AiOutlineWhatsApp,
  AiOutlineHeart,
  AiFillHeart,
} from 'react-icons/ai'
import { RiTwitterXFill } from 'react-icons/ri'
import { LuShare } from 'react-icons/lu'
import { GrShare } from 'react-icons/gr'
import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from 'react-share'
import clsx from 'clsx'
import { MdKeyboardArrowDown, MdOutlineStar } from 'react-icons/md'
import {
  products,
  colors,
  prices,
  brands,
  categories,
  tags,
  choose,
} from '../../components/data'

function FilterDropdown({ title, items, onItemClick }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="relative w-full lg:static ml-7 sm:ml-3">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-black font-poppins text-base font-medium flex items-center justify-between lg:justify-start border-y border-table w-full py-2 px-4 ml-1"
      >
        {title}
        <MdKeyboardArrowDown
          size={26}
          className={`${
            isOpen ? 'transform rotate-180' : ''
          } inline-block w-5 h-5 ml-1`}
        />
      </button>
      {isOpen && (
        <div className="absolute lg:relative mt-1 lg:mt-0 lg:right-auto w-full lg:w-auto bg-white rounded-md shadow-lg z-10">
          <div className="py-1">
            {items.map((item, index) => (
              <div className="flex items-center">
                <input
                  type="checkbox"
                  onClick={() => {
                    onItemClick(item)
                    setIsOpen(!isOpen)
                  }}
                  className="h-3.5 w-3.5 ml-5 accent-black outline-none cursor-pointer"
                />
                <p
                  key={index}
                  onClick={() => {
                    onItemClick(item)
                    setIsOpen(!isOpen)
                  }}
                  className="text-gray font-poppins text-base font-medium cursor-pointer px-4 py-2 hover:bg-gray-200"
                  style={{
                    backgroundColor: item,
                    color: 'transparent' ? item : 'gray',
                  }}
                >
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

const Shop = () => {
  const [selectedSize, setSelectedSize] = useState(null)
  const [selectedColor, setSelectedColor] = useState(null)
  const [selectedPrice, setSelectedPrice] = useState(null)
  const [selectedBrand, setSelectedBrand] = useState(null)
  const [selectedCategory, setSelectedCategory] = useState(null)
  const [selectedTag, setSelectedTag] = useState(null)
  const [selectedChoose, setSelectedChoose] = useState(null)
  const [likedProducts, setLikedProducts] = useState([])
  const [showShareIcons, setShowShareIcons] = useState(false)
  const [showTooltip, setShowTooltip] = useState(false)

  const handleSizeClick = (size) => setSelectedSize(size)

  const handleColorClick = (color) => {
    setSelectedColor(color.colorCode)
  }

  const handlePriceClick = (price) => {
    const numericPrice = parseFloat(price.replace('$', '').replace(',', ''))
    setSelectedPrice(numericPrice)
  }

  const handleBrandClick = (brand) => {
    setSelectedBrand(brand)
  }

  const handleCategoryClick = (category) => {
    setSelectedCategory(category)
  }

  const handleTagClick = (tag) => {
    setSelectedTag(tag)
  }

  const handleChooseClick = (choose) => {
    setSelectedChoose(choose)
  }

  const toggleLike = (productId) => {
    if (likedProducts.includes(productId)) {
      setLikedProducts(likedProducts.filter((id) => id !== productId))
    } else {
      setLikedProducts([...likedProducts, productId])
    }
  }

  const copyLinkToClipboard = () => {
    navigator.clipboard
      .writeText(window.location.href)
      .then(() => {
        setShowTooltip(true)
        setTimeout(() => setShowTooltip(false), 1200)
      })
      .catch((error) => console.error('Failed to copy: ', error))
  }

  const toggleShareIcons = () => {
    setShowShareIcons(!showShareIcons)
  }

  const [isOpen, setIsOpen] = useState(false)

  const toggleDropdown = () => {
    setIsOpen(!isOpen)
  }

  const sizes = Array.from(new Set(products.map((product) => product.size)))

  const filteredProducts =
    selectedSize ||
    selectedColor ||
    selectedPrice ||
    selectedBrand ||
    selectedCategory ||
    selectedTag ||
    selectedChoose
      ? products.filter(
          (product) =>
            (product.size === selectedSize || !selectedSize) &&
            (product.colors.includes(selectedColor) || !selectedColor) &&
            (parseFloat(product.price) >= selectedPrice || !selectedPrice) &&
            (product.brand === selectedBrand || !selectedBrand) &&
            (product.category === selectedCategory || !selectedCategory) &&
            (product.tags.includes(selectedTag) || !selectedTag) &&
            (product.choose === selectedChoose || !selectedChoose),
        )
      : products

  //   pagination started

  const itemsPerPage = 9
  const [currentPage, setCurrentPage] = useState(1)

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage)

  const handlePageChange = (page) => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
    setCurrentPage(page)
  }

  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  )

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }, [])

  return (
    <div>
      <div className="shop-subheader py-7 lg:py-9 text-center items-center justify-center">
        <div className="flex flex-row md:flex-row justify-between items-center text-center px-0">
          {/* <div className="relative">
            <img
              src={shopBanner3}
              alt="Shop Banner One"
              className="h-44 w-auto md:h-72 md:w-44 object-cover drop-shadow-md"
            />
          </div> */}
          <div className="my-auto px-5 py-7 lg:py-0 sm:px-0 mx-auto">
            <span className="text-black font-poppins text-3xl md:text-4xl font-normal capitalize mt-4 md:mt-0">
              Fashion
            </span>
            <div className="breadcrumb flex text-center justify-center text-black font-poppins text-sm md:text-base font-normal gap-1 md:gap-3 mt-0 md:mt-1">
              <Link to="/">Home</Link>
              <GoChevronRight className="my-auto" />
              <span>Fashion</span>
            </div>
          </div>
          {/* <div className="relative">
            <img
              src={shopBanner2}
              alt="Shop Banner Two"
              className="h-44 md:h-72 w-auto object-cover drop-shadow-xl"
            />
          </div> */}
        </div>
      </div>

      <div className="shop-filters">
        <div className="grid grid-cols-1 lg:grid-cols-5 grid-flow-row gap-5">
          <div className="space-y-5 pb-7 lg:block hidden">
            <div className="flex justify-between items-center gap-7">
              <span className="text-black font-poppins text-3xl font-medium">
                Filters
              </span>
              {selectedSize ||
              selectedColor ||
              selectedPrice ||
              selectedBrand ||
              selectedCategory ||
              selectedTag ? (
                <span
                  className="uppercase text-content text-xs text-nowrap font-medium cursor-pointer bg-black/10 rounded-md px-2 py-1"
                  onClick={() =>
                    handleSizeClick('') ||
                    handleColorClick('') ||
                    handlePriceClick('') ||
                    handleBrandClick('') ||
                    handleCategoryClick('') ||
                    handleTagClick('')
                  }
                >
                  Clear All
                </span>
              ) : (
                ''
              )}
            </div>
            <div>
              <span className="text-black font-poppins text-lg font-medium">
                Size
              </span>
            </div>
            <div className="flex flex-wrap gap-3">
              {sizes.map((size, index) => (
                <div
                  className={`flex px-4 py-2 items-center rounded-md font-poppins text-center text-black text-base font-normal uppercase cursor-pointer ${selectedSize === size ? 'bg-black text-white' : 'border border-gray'}`}
                  key={index}
                  onClick={() => handleSizeClick(size)}
                >
                  {size}
                </div>
              ))}
            </div>
            <div>
              <span className="text-black font-poppins text-lg font-medium">
                Colors
              </span>
            </div>
            <div className="flex flex-col flex-wrap items-start gap-2">
              {colors.slice(0, 7).map((color, index) => (
                <div className="flex items-center gap-3" key={color.id}>
                  <input
                    type="checkbox"
                    className="h-3.5 w-3.5 accent-black outline-none cursor-pointer"
                    onClick={(e) => handleColorClick(color)}
                  />
                  <div
                    className="w-5 h-5 rounded-2xl bg-[#FF6C6C] cursor-pointer"
                    key={index}
                    style={{
                      backgroundColor: `${color.colorCode}`,
                    }}
                  ></div>
                  <span className="text-base text-black capitalize font-poppins font-normal cursor-pointer">
                    {color.name}
                  </span>
                </div>
              ))}
            </div>
            <div>
              <span className="text-black font-poppins text-lg font-medium">
                Prices
              </span>
            </div>
            <div>
              {prices.map((price, index) => (
                <div
                  className="flex items-center gap-3 space-y-1"
                  onClick={() => handlePriceClick(price)}
                  key={index}
                >
                  <input
                    type="checkbox"
                    className="h-3.5 w-3.5 accent-black outline-none cursor-pointer"
                  />
                  <span
                    className="text-black font-poppins text-base font-medium cursor-pointer"
                    key={index}
                  >
                    {price}
                  </span>
                </div>
              ))}
            </div>
            <div>
              <span className="text-black font-poppins text-lg font-medium">
                Brands
              </span>
            </div>
            <div className="flex flex-col gap-1">
              {brands.slice(0, 6).map((brand, index) => (
                <div
                  className="flex items-center gap-3"
                  onClick={() => handleBrandClick(brand)}
                  key={index}
                >
                  <input
                    type="checkbox"
                    className="h-3.5 w-3.5 accent-black outline-none cursor-pointer"
                  />
                  <span
                    key={index}
                    className="text-black font-poppins text-base font-medium cursor-pointer"
                  >
                    {brand}
                  </span>
                </div>
              ))}
            </div>
            <div>
              <span className="text-black font-poppins text-lg font-medium">
                Categories
              </span>
            </div>
            <div>
              {categories.map((category, index) => (
                <div
                  className="flex items-center gap-3"
                  onClick={() => handleCategoryClick(category)}
                  key={index}
                >
                  <input
                    type="checkbox"
                    className="h-3.5 w-3.5 accent-black outline-none cursor-pointer"
                  />
                  <span
                    key={index}
                    className="text-black font-poppins text-base font-medium cursor-pointer"
                  >
                    {category}
                  </span>
                </div>
              ))}
            </div>
            <div>
              <span className="text-black font-poppins text-lg font-medium">
                Tags
              </span>
            </div>
            <div>
              {tags.map((tag, index) => (
                <div
                  className="flex items-center gap-3"
                  onClick={() => handleTagClick(tag)}
                  key={index}
                >
                  <input
                    type="checkbox"
                    className="h-3.5 w-3.5 accent-black outline-none cursor-pointer"
                  />
                  <span
                    key={index}
                    className="text-black font-poppins font-normal text-base cursor-pointer"
                  >
                    {tag}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:hidden block">
            <div className="pb-7">
              <h3 className="ml-20 text-center font-medium font-poppins text-2xl text-black">
                Filters
              </h3>
              {selectedSize ||
              selectedColor ||
              selectedPrice ||
              selectedBrand ||
              selectedCategory ||
              selectedTag ? (
                <span
                  className="uppercase text-content text-xs text-nowrap font-medium cursor-pointer bg-black/10 rounded-md px-2 py-1 ml-28"
                  onClick={() =>
                    handleSizeClick('') ||
                    handleColorClick('') ||
                    handlePriceClick('') ||
                    handleBrandClick('') ||
                    handleCategoryClick('') ||
                    handleTagClick('')
                  }
                >
                  clear all
                </span>
              ) : (
                ''
              )}
            </div>
            <div className="items-center justify-center my-auto space-y-3 lg:space-y-0 pb-5 sm:ml-16">
              <FilterDropdown
                title="Size"
                items={sizes}
                onItemClick={handleSizeClick}
              />
              {/* <FilterDropdown
                title="Colors"
                items={colors.map((color) => color.colorCode)}
                onItemClick={handleColorClick}
                style={colors.map((color) => color.name)}
              /> */}
              <FilterDropdown
                title="Prices"
                items={prices}
                onItemClick={handlePriceClick}
              />
              <FilterDropdown
                title="Brands"
                items={brands}
                onItemClick={handleBrandClick}
              />
              <FilterDropdown
                title="Categories"
                items={categories}
                onItemClick={handleCategoryClick}
              />
              <FilterDropdown
                title="Tags"
                items={tags}
                onItemClick={handleTagClick}
              />
            </div>
          </div>
          <div className="col-span-5 lg:col-span-4 ml-0 lg:ml-12">
            <div>
              <span
                className="text-black flex font-poppins text-lg font-medium cursor-pointer sm:justify-normal justify-center mb-9"
                id="dropdownDefaultButton"
                data-dropdown-toggle="dropdown"
                onClick={toggleDropdown}
              >
                Best Selling{' '}
                <GoChevronDown
                  className={`my-auto ${isOpen ? 'transform rotate-180' : ''}`}
                />
              </span>
              {isOpen && (
                <div className="absolute z-10 -mt-7 bg-white rounded-md border border-table px-7">
                  <ul
                    aria-labelledby="dropdownDefaultButton"
                    id="dropdownDefaultButton"
                    onClick={() => toggleDropdown()}
                  >
                    {choose.map((item, index) => (
                      <li
                        key={index}
                        onClick={() => handleChooseClick(item)}
                        id="dropdown"
                        data-dropdown-toggle="dropdown"
                        className="dropdown-menu block py-2 hover:bg-gray-100 text-center sm:text-start cursor-pointer"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
            <div className="space-y-7">
              <div
                className={`grid xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 grid-flow-row gap-3 sm:gap-5 md:gap-7`}
              >
                {paginatedProducts.slice(0, 3).map((product) => (
                  <div
                    key={product.id}
                    className="relative group mx-auto sm:mx-0"
                  >
                    <Link to="/product/*">
                      <img
                        src={product.image}
                        alt="Product"
                        className={clsx(
                          'h-60 w-72 sm:h-[300px] sm:w-[500px] object-cover transition duration-150 ease-linear transform hover:scale-105',
                          'object-top',
                        )}
                      />
                      <div className="flex items-center overflow-hidden relative bottom-8 left-2">
                        <span className="bg-white/75 text-gray-800 text-xs font-medium me-2 px-2 py-0.5 rounded flex items-center gap-1">
                          {product.review}{' '}
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
                    <div
                      className="absolute inset-0 flex bg-gray-800 bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out left-auto pr-1.5"
                      onClick={toggleShareIcons}
                    >
                      <LuShare
                        size={35}
                        className="p-1.5 cursor-pointer text-black"
                      />
                      {showTooltip && (
                        <div className="absolute top-14 -left-7 -mt-8 px-2 py-1 bg-gray-800 text-black text-sm rounded">
                          Copied
                        </div>
                      )}
                      {showShareIcons && (
                        <div className="absolute top-7 right-0 mt-2 p-2 bg-transparent shadow-lg rounded-lg">
                          <div className="flex flex-col gap-3 items-center">
                            <FacebookShareButton url={window.location.href}>
                              <AiOutlineFacebook className="text-blue-500 text-3xl" />
                            </FacebookShareButton>
                            <TwitterShareButton url={window.location.href}>
                              <RiTwitterXFill className="text-black text-2xl" />
                            </TwitterShareButton>
                            <WhatsappShareButton url={window.location.href}>
                              <AiOutlineWhatsApp className="text-green-500 text-3xl" />
                            </WhatsappShareButton>
                            <div
                              className="cursor-pointer relative"
                              onClick={copyLinkToClipboard}
                            >
                              <GrShare size={20} />
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                    <div
                      className="flex justify-between"
                      onClick={() => toggleLike(product.id)}
                    >
                      <span className="text-black font-poppins text-base line-clamp-2 font-medium">
                        {product.title}
                      </span>
                      <div className="relative flex gap-3 pt-2">
                        {likedProducts.includes(product.id) ? (
                          <AiFillHeart className="text-red-500 text-3xl cursor-pointer" />
                        ) : (
                          <AiOutlineHeart className="text-red-500 text-3xl cursor-pointer" />
                        )}
                        <div className="bg-black text-white p-1 rounded-lg my-auto">
                          <Link to="/cart">
                            <AiOutlineShoppingCart
                              size={22}
                              className="items-center cursor-pointer list-none ml-auto text-white"
                            />
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div>
                      <span className="text-black font-poppins text-lg font-semibold">
                        ${product.price}
                      </span>
                      <span className="text-content line-through pl-2 font-poppins text-base font-medium">
                        $150
                      </span>
                      <span className="text-green-500 pl-2 font-poppins text-base font-medium">
                        25% off
                      </span>
                    </div>
                  </div>
                ))}
              </div>
              <div
                className={`grid xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 grid-flow-row gap-3 sm:gap-5 md:gap-7`}
              >
                {paginatedProducts.slice(3, 6).map((product) => (
                  <div
                    key={product.id}
                    className="relative group mx-auto sm:mx-0"
                  >
                    <Link to="/product/*">
                      <img
                        src={product.image}
                        alt="Product"
                        className={clsx(
                          'h-60 w-72 sm:h-[300px] sm:w-[500px] object-cover transition duration-150 ease-linear transform hover:scale-105',
                          'object-top',
                        )}
                      />
                      <div className="flex items-center overflow-hidden relative bottom-8 left-2">
                        <span className="bg-white/75 text-gray-800 text-xs font-medium me-2 px-2 py-0.5 rounded flex items-center gap-1">
                          {product.review}{' '}
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
                    <div
                      className="absolute inset-0 flex bg-gray-800 bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out left-auto pr-1.5"
                      onClick={toggleShareIcons}
                    >
                      <LuShare
                        size={35}
                        className="p-1.5 cursor-pointer text-black"
                      />
                      {showTooltip && (
                        <div className="absolute top-14 -left-7 -mt-8 px-2 py-1 bg-gray-800 text-black text-sm rounded">
                          Copied
                        </div>
                      )}
                      {showShareIcons && (
                        <div className="absolute top-7 right-0 mt-2 p-2 bg-transparent shadow-lg rounded-lg">
                          <div className="flex flex-col gap-3 items-center">
                            <FacebookShareButton url={window.location.href}>
                              <AiOutlineFacebook className="text-blue-500 text-3xl" />
                            </FacebookShareButton>
                            <TwitterShareButton url={window.location.href}>
                              <RiTwitterXFill className="text-black text-2xl" />
                            </TwitterShareButton>
                            <WhatsappShareButton url={window.location.href}>
                              <AiOutlineWhatsApp className="text-green-500 text-3xl" />
                            </WhatsappShareButton>
                            <div
                              className="cursor-pointer relative"
                              onClick={copyLinkToClipboard}
                            >
                              <GrShare size={20} />
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                    <div
                      className="flex justify-between"
                      onClick={() => toggleLike(product.id)}
                    >
                      <span className="text-black font-poppins text-base line-clamp-1 font-medium">
                        {product.title}
                      </span>
                      <div className="relative flex gap-3 pt-2">
                        {likedProducts.includes(product.id) ? (
                          <AiFillHeart className="text-red-500 text-3xl cursor-pointer" />
                        ) : (
                          <AiOutlineHeart className="text-red-500 text-3xl cursor-pointer" />
                        )}
                        <div className="bg-black text-white p-1 rounded-lg my-auto">
                          <Link to="/cart">
                            <AiOutlineShoppingCart
                              size={22}
                              className="items-center cursor-pointer list-none ml-auto text-white"
                            />
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div>
                      <span className="text-black font-poppins text-lg font-semibold">
                        ${product.price}
                      </span>
                      <span className="text-content line-through pl-2 font-poppins text-base font-medium">
                        $150
                      </span>
                      <span className="text-green-500 pl-2 font-poppins text-base font-medium">
                        25% off
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              <div
                className={`grid xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 grid-flow-row gap-3 sm:gap-5 md:gap-7`}
              >
                {paginatedProducts.slice(6, 9).map((product) => (
                  <div
                    key={product.id}
                    className="relative group mx-auto sm:mx-0"
                  >
                    <Link to="/product/*">
                      <img
                        src={product.image}
                        alt="Product"
                        className={clsx(
                          'h-60 w-72 sm:h-[300px] sm:w-[500px] object-cover transition duration-150 ease-linear transform hover:scale-105',
                          'object-top',
                        )}
                      />
                      <div className="flex items-center overflow-hidden relative bottom-8 left-2">
                        <span className="bg-white/75 text-gray-800 text-xs font-medium me-2 px-2 py-0.5 rounded flex items-center gap-1">
                          {product.review}{' '}
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
                    <div
                      className="absolute inset-0 flex bg-gray-800 bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out left-auto pr-1.5"
                      onClick={toggleShareIcons}
                    >
                      <LuShare
                        size={35}
                        className="p-1.5 cursor-pointer text-black"
                      />
                      {showTooltip && (
                        <div className="absolute top-14 -left-7 -mt-8 px-2 py-1 bg-gray-800 text-black text-sm rounded">
                          Copied
                        </div>
                      )}
                      {showShareIcons && (
                        <div className="absolute top-7 right-0 mt-2 p-2 bg-transparent shadow-lg rounded-lg">
                          <div className="flex flex-col gap-3 items-center">
                            <FacebookShareButton url={window.location.href}>
                              <AiOutlineFacebook className="text-blue-500 text-3xl" />
                            </FacebookShareButton>
                            <TwitterShareButton url={window.location.href}>
                              <RiTwitterXFill className="text-black text-2xl" />
                            </TwitterShareButton>
                            <WhatsappShareButton url={window.location.href}>
                              <AiOutlineWhatsApp className="text-green-500 text-3xl" />
                            </WhatsappShareButton>
                            <div
                              className="cursor-pointer relative"
                              onClick={copyLinkToClipboard}
                            >
                              <GrShare size={20} />
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                    <div
                      onClick={() => toggleLike(product.id)}
                      className="flex justify-between"
                    >
                      <span className="text-black font-poppins text-base line-clamp-1 font-medium">
                        {product.title}
                      </span>
                      <div className="relative flex gap-3 pt-2">
                        {likedProducts.includes(product.id) ? (
                          <AiFillHeart className="text-red-500 text-3xl cursor-pointer" />
                        ) : (
                          <AiOutlineHeart className="text-red-500 text-3xl cursor-pointer" />
                        )}
                        <div className="bg-black text-white p-1 rounded-lg my-auto">
                          <Link to="/cart">
                            <AiOutlineShoppingCart
                              size={22}
                              className="items-center cursor-pointer list-none ml-auto text-white"
                            />
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div>
                      <span className="text-black font-poppins text-lg font-semibold">
                        ${product.price}
                      </span>
                      <span className="text-content line-through pl-2 font-poppins text-base font-medium">
                        $150
                      </span>
                      <span className="text-green-500 pl-2 font-poppins text-base font-medium">
                        25% off
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* pagination started */}
            <div className="py-5 flex justify-center items-center">
              <div className="cursor-pointer flex content-center text-center items-center gap-4">
                {Array.from({ length: totalPages }, (_, index) => (
                  <div
                    key={index + 1}
                    className={` ${currentPage === index + 1 ? 'active' : ''}`}
                    onClick={() => handlePageChange(index + 1)}
                  >
                    {index + 1}
                  </div>
                ))}
                <div>
                  <PiCaretDoubleRight />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Shop
