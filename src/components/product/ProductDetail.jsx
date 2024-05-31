import { useEffect, useState } from 'react'
//product thumbnails
import { One, Two, Three, Four, Five, Six, Seven, Eight, Nine, Ten, SolidDress } from '../../assets/images/index'
import { IoMdStar } from 'react-icons/io'
import { FiMinus, FiPlus } from 'react-icons/fi'
import { GoChevronRight } from 'react-icons/go'
import clsx from 'clsx'
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css'
import InnerImageZoom from 'react-inner-image-zoom'
import { Link } from 'react-router-dom'

const ProductDetail = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }, [])

  const StarRating = () => {
    const stars = Array.from({ length: 5 }, (_, index) => (
      <div key={index}>
        <IoMdStar size={24} />
      </div>
    ))

    return <div className="flex text-black">{stars}</div>
  }

  // cart counter

  const [counter, setCounter] = useState(0)

  const IncrementCounter = () => {
    setCounter((prevCounter) => prevCounter + 1)
  }

  const DecrementCounter = () => {
    counter > 0 ? setCounter((prevCounter) => prevCounter - 1) : counter
  }

  // tabs state

  const [activeTab, setActiveTab] = useState('description')

  const handleTabsClick = (tabId) => {
    setActiveTab(tabId)
  }

  const [isZoom, setIsZoom] = useState(false)

  const handleImageZoom = () => {
    setIsZoom(!isZoom)
  }

  // size toggle

  const [selectedSize, setSelectedSize] = useState('M')

  const handleSizeClick = (size) => {
    setSelectedSize(size)
  }

  // color toggle

  const [selectedColor, setSelectedColor] = useState('Red')
  const [thumbnailImage, setThumbnailImage] = useState(One)
  const [productImage, setProductImage] = useState(SolidDress)
  const [selectedImage, setSelectedImage] = useState(SolidDress)

  const handleColorClick = (color, thumbnailImg, productImg) => {
    setSelectedColor(color)
    setThumbnailImage(thumbnailImg)
    setProductImage(productImg)
    setSelectedImage(thumbnailImg)
  }

  const thumbnailImages = {
    Red: [One, Two, Three, Four, Five],
    Black: [Six, Seven, Eight, Nine, Ten],
  }

  const productImages = {
    red: [One, Two, Three, Four, Five],
    black: [Six, Seven, Eight, Nine, Ten],
  }

  const handleThumbnailClick = (image) => {
    setSelectedImage(image)
    const colorThumbnails = thumbnailImages[selectedColor]
    const index = colorThumbnails.indexOf(image)
    if (index !== -1) {
      const color = selectedColor.toLowerCase()
      setProductImage(productImages[color][index])
    }
  }

  // product image thumb toggle

  // const handleThumbnailClick = (image) => {
  //   setSelectedImage(image)
  // }

  return (
    <div id="product-detail" className="py-3 xs:py-5 md:py-5">
      <div>
        <div className="my-auto px-5 py-7 lg:pt-7 lg:pb-14 sm:px-0 mx-auto text-center">
          <span className="text-black font-poppins text-3xl md:text-4xl font-normal capitalize mt-4 md:mt-0">
            Women Clothing
          </span>
          <div className="breadcrumb flex text-center justify-center text-black font-poppins text-sm md:text-base font-normal gap-1 md:gap-3 mt-0 md:mt-1">
            <Link to="/">Home</Link>
            <GoChevronRight className="my-auto" />
            <span>Women Clothing</span>
          </div>
        </div>
      </div>
      <div className="sm:grid grid-cols-1 md:grid-cols-12 lg:grid-cols-12 grid-flow-row gap-5">
        <div className="flex flex-row sm:flex-col ml-0 sm:px-12 md:px-0 sm:ml-24 md:ml-0 justify-center md:justify-start hidden md:block">
          <div>
            <img
              src={
                selectedColor === 'Red'
                  ? One
                  : '' || selectedColor === 'Black'
                    ? Six
                    : ''
              }
              alt="Thumbnail"
              className={clsx(
                `h-16 w-36 sm:h-24 sm:w-36 md:h-24 md:w-16 p-1 object-cover cursor-pointer ${selectedImage === One || selectedImage === Six ? 'border border-border' : 'border-none'}`,
                'object-top',
              )}
              onClick={() =>
                handleThumbnailClick(
                  selectedColor === 'Red'
                    ? One
                    : '' || selectedColor === 'Black'
                      ? Six
                      : '',
                )
              }
            />
          </div>
          <div>
            <img
              src={
                selectedColor === 'Red'
                  ? Two
                  : '' || selectedColor === 'Black'
                    ? Seven
                    : ''
              }
              alt="Thumbnail"
              className={clsx(
                `h-16 w-36 sm:h-24 sm:w-36 md:h-24 md:w-16 p-1 object-cover cursor-pointer ${selectedImage === Two || selectedImage === Seven ? 'border border-border' : 'border-none'}`,
                'object-top',
              )}
              onClick={() =>
                handleThumbnailClick(
                  selectedColor === 'Red'
                    ? Two
                    : '' || selectedColor === 'Black'
                      ? Seven
                      : '',
                )
              }
            />
          </div>
          <div>
            <img
              src={
                selectedColor === 'Red'
                  ? Three
                  : '' || selectedColor === 'Black'
                    ? Eight
                    : ''
              }
              alt="Thumbnail"
              className={clsx(
                `h-16 w-36 sm:h-24 sm:w-36 md:h-24 md:w-16 p-1 object-cover cursor-pointer ${selectedImage === Three || selectedImage === Eight ? 'border border-border' : 'border-none'}`,
                'object-top',
              )}
              onClick={() =>
                handleThumbnailClick(
                  selectedColor === 'Red'
                    ? Three
                    : '' || selectedColor === 'Black'
                      ? Eight
                      : '',
                )
              }
            />
          </div>
          <div>
            <img
              src={
                selectedColor === 'Red'
                  ? Four
                  : '' || selectedColor === 'Black'
                    ? Nine
                    : ''
              }
              alt="Thumbnail"
              className={clsx(
                `h-16 w-36 sm:h-24 sm:w-36 md:h-24 md:w-16 p-1 object-cover cursor-pointer ${selectedImage === Four || selectedImage === Nine ? 'border border-border' : 'border-none'}`,
                'object-top',
              )}
              onClick={() =>
                handleThumbnailClick(
                  selectedColor === 'Red'
                    ? Four
                    : '' || selectedColor === 'Black'
                      ? Nine
                      : '',
                )
              }
            />
          </div>
          <div>
            <img
              src={
                selectedColor === 'Red'
                  ? Five
                  : '' || selectedColor === 'Black'
                    ? Ten
                    : ''
              }
              alt="Thumbnail"
              className={clsx(
                `h-16 w-36 sm:h-24 sm:w-36 md:h-24 md:w-16 p-1 object-cover cursor-pointer ${selectedImage === Five || selectedImage === Ten ? 'border border-border' : 'border-none'}`,
                'object-top',
              )}
              onClick={() =>
                handleThumbnailClick(
                  selectedColor === 'Red'
                    ? Five
                    : '' || selectedColor === 'Black'
                      ? Ten
                      : '',
                )
              }
            />
          </div>
        </div>
        <div className="block md:hidden">
          <div className="col-span-6">
            <div className="block md:hidden pb-3">
              <p className="text-[#666] font-poppins font-normal text-sm uppercase">
                Fashionista
              </p>
              <span className="text-black font-poppins text-2xl md:text-3xl font-normal">
                Women's Fit & Flare Solid Dress
              </span>
            </div>
            <img
              src={productImage}
              alt="Women's Fit & Flare Solid Dress"
              // className="object-cover h-96 w-96 mx-auto md:mx-0 md:h-5/6 md:w-auto"
              className={clsx(
                `object-cover h-96 w-96 mx-auto md:mx-0 md:h-3/4 md:w-full lg:pr-24 transition-transform duration-300 ease-in-out ${isZoom ? 'transform scale-125 translate-y-20' : ''}`,
                'object-top',
              )}
              onClick={handleImageZoom}
            />
          </div>
        </div>

        <div className="col-span-6">
          <div className="hidden md:block">
            <div className="block md:hidden pb-3">
              <p className="text-[#666] font-poppins font-normal text-sm uppercase">
                Fashionista
              </p>
              <span className="text-black font-poppins text-2xl md:text-3xl font-normal">
                Women's Fit & Flare Solid Dress
              </span>
            </div>
            <div>
              <InnerImageZoom
                src={productImage}
                hasSpacer={true}
                zoomSrc={productImage}
                zoomType="hover"
                zoomPreload={true}
                fullscreenOnMobile={true}
                className="object-cover h-96 w-96 mx-auto md:mx-0 md:h-5/6 2xl:h-[645px] md:w-[450px] 2xl:w-[624px]"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-row md:flex-col ml-0 sm:px-12 md:px-0 sm:ml-0 md:ml-0 justify-center md:justify-start md:hidden pt-7">
          <div>
            <img
              src={
                selectedColor === 'Red'
                  ? One
                  : '' || selectedColor === 'Black'
                    ? Six
                    : ''
              }
              alt="Thumbnail"
              className={clsx(
                `h-16 w-36 sm:h-24 sm:w-36 md:h-24 md:w-16 p-1 object-cover cursor-pointer ${selectedImage === One || selectedImage === Six ? 'border border-border' : 'border-none'}`,
                'object-top',
              )}
              onClick={() =>
                handleThumbnailClick(
                  selectedColor === 'Red'
                    ? One
                    : '' || selectedColor === 'Black'
                      ? Six
                      : '',
                )
              }
            />
          </div>
          <div>
            <img
              src={
                selectedColor === 'Red'
                  ? Two
                  : '' || selectedColor === 'Black'
                    ? Seven
                    : ''
              }
              alt="Thumbnail"
              className={clsx(
                `h-16 w-36 sm:h-24 sm:w-36 md:h-24 md:w-16 p-1 object-cover cursor-pointer ${selectedImage === Two || selectedImage === Seven ? 'border border-border' : 'border-none'}`,
                'object-top',
              )}
              onClick={() =>
                handleThumbnailClick(
                  selectedColor === 'Red'
                    ? Two
                    : '' || selectedColor === 'Black'
                      ? Seven
                      : '',
                )
              }
            />
          </div>
          <div>
            <img
              src={
                selectedColor === 'Red'
                  ? Three
                  : '' || selectedColor === 'Black'
                    ? Eight
                    : ''
              }
              alt="Thumbnail"
              className={clsx(
                `h-16 w-36 sm:h-24 sm:w-36 md:h-24 md:w-16 p-1 object-cover cursor-pointer ${selectedImage === Three || selectedImage === Eight ? 'border border-border' : 'border-none'}`,
                'object-top',
              )}
              onClick={() =>
                handleThumbnailClick(
                  selectedColor === 'Red'
                    ? Three
                    : '' || selectedColor === 'Black'
                      ? Eight
                      : '',
                )
              }
            />
          </div>
          <div>
            <img
              src={
                selectedColor === 'Red'
                  ? Four
                  : '' || selectedColor === 'Black'
                    ? Nine
                    : ''
              }
              alt="Thumbnail"
              className={clsx(
                `h-16 w-36 sm:h-24 sm:w-36 md:h-24 md:w-16 p-1 object-cover cursor-pointer ${selectedImage === Four || selectedImage === Nine ? 'border border-border' : 'border-none'}`,
                'object-top',
              )}
              onClick={() =>
                handleThumbnailClick(
                  selectedColor === 'Red'
                    ? Four
                    : '' || selectedColor === 'Black'
                      ? Nine
                      : '',
                )
              }
            />
          </div>
          <div>
            <img
              src={
                selectedColor === 'Red'
                  ? Five
                  : '' || selectedColor === 'Black'
                    ? Ten
                    : ''
              }
              alt="Thumbnail"
              className={clsx(
                `h-16 w-36 sm:h-24 sm:w-36 md:h-24 md:w-16 p-1 object-cover cursor-pointer ${selectedImage === Five || selectedImage === Ten ? 'border border-border' : 'border-none'}`,
                'object-top',
              )}
              onClick={() =>
                handleThumbnailClick(
                  selectedColor === 'Red'
                    ? Five
                    : '' || selectedColor === 'Black'
                      ? Ten
                      : '',
                )
              }
            />
          </div>
        </div>

        <div className="ml-0 lg:-ml-20 col-span-5 space-y-5">
          <div className="flex justify-between items-center">
            <p className="text-[#666] font-poppins font-normal text-sm uppercase hidden md:block">
              Fashionista
            </p>
          </div>
          <div className="flex flex-col">
            <span className="text-black font-poppins text-2xl md:text-3xl font-normal hidden md:block">
              Women's Fit & Flare Solid Dress
            </span>
            <div className="flex justify-between py-3">
              <StarRating />
            </div>
          </div>
          <div>
            <span className="text-black font-poppins text-xl sm:text-2xl">
              $39.00
            </span>
          </div>
          <div>
            <p className="text-black font-poppins text-base font-normal">
              Only <b>9</b> item(s) left in stock!
            </p>
          </div>
          <div>
            <span className="text-black font-poppins text-base font-bold">
              Size: {selectedSize}
            </span>
          </div>
          <div className="flex gap-3">
            <div
              className={`border ${selectedSize === 'M' ? 'bg-black text-white' : 'border-[#eee] text-black'} px-2 py-1.5 sm:px-3 sm:py-2 rounded-md cursor-pointer`}
              onClick={() => handleSizeClick('M')}
            >
              M
            </div>
            <div
              className={`border ${selectedSize === 'L' ? 'bg-black text-white' : 'border-[#eee] text-black'} px-2 py-1.5 sm:px-3 sm:py-2 rounded-md cursor-pointer`}
              onClick={() => handleSizeClick('L')}
            >
              L
            </div>
            <div
              className={`border ${selectedSize === 'XL' ? 'bg-black text-white' : 'border-[#eee] text-black'} px-2 py-1.5 sm:px-3 sm:py-2 rounded-md cursor-pointer`}
              onClick={() => handleSizeClick('XL')}
            >
              XL
            </div>
            <div
              className={`border ${selectedSize === 'XXL' ? 'bg-black text-white' : 'border-[#eee] text-black'} px-2 py-1.5 sm:px-3 sm:py-2 rounded-md cursor-pointer`}
              onClick={() => handleSizeClick('XXL')}
            >
              XXL
            </div>
          </div>
          <div>
            <span className="text-black font-poppins text-base font-bold">
              Colour: {selectedColor}
            </span>
          </div>
          <div className="flex gap-3">
            <span
              className={`w-7 h-7 sm:w-10 sm:h-10 outline outline-offset-2 cursor-pointer ${selectedColor === 'Red' ? 'outline-1' : 'outline-transparent'} rounded-full bg-[#DC2A39]`}
              onClick={() => handleColorClick('Red', One, SolidDress)}
            ></span>
            <span
              className={`w-7 h-7 sm:w-10 sm:h-10 outline outline-offset-2 cursor-pointer ${selectedColor === 'Black' ? 'outline-1' : 'outline-transparent'} rounded-full bg-black`}
              onClick={() => handleColorClick('Black', Six, Six)}
            ></span>
          </div>
          <div>
            <span className="text-black font-poppins text-base font-bold">
              Quantity
            </span>
          </div>
          <div className="flex flex-wrap content-between gap-3">
            <div className="flex p-1 gap-5 justify-center items-center border border-[#eee] rounded-md">
              <button onClick={DecrementCounter}>
                <div>
                  <FiMinus className="h-5 w-5 cursor-pointer" />
                </div>
              </button>
              <div className="text-black text-base font-normal">{counter}</div>
              <button onClick={IncrementCounter}>
                <div>
                  <FiPlus className="h-5 w-5 cursor-pointer" />
                </div>
              </button>
            </div>
            <div className="text-center py-3 px-3 lg:px-7 rounded-md border bg-black text-white font-poppins text-base font-normal cursor-pointer">
              Add to cart
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12">
        <div className="mb-4 border-b border-[#eee]">
          <ul
            className="flex items-center text-sm font-medium font-poppins text-black text-center"
            id="default-tab"
            data-tabs-toggle="#default-tab-content"
            role="tablist"
          >
            <li className="me-2" role="presentation">
              <button
                className={`inline-block p-4 border-b-2 text-sm sm:text-base rounded-t-lg ${activeTab === 'description' ? 'border-black' : 'border-transparent'}`}
                onClick={() => handleTabsClick('description')}
                id="description-tab"
                data-tabs-target="#description"
                type="button"
                role="tab"
                aria-controls="description"
                aria-selected={activeTab === 'description'}
              >
                Description
              </button>
            </li>
            <li className="me-2" role="presentation">
              <button
                className={`inline-block p-4 border-b-2 text-sm sm:text-base rounded-t-lg ${activeTab === 'ratings' ? 'border-black' : 'border-transparent'}`}
                onClick={() => handleTabsClick('ratings')}
                id="ratings-tab"
                data-tabs-target="#ratings"
                type="button"
                role="tab"
                aria-controls="ratings"
                aria-selected={activeTab === 'ratings'}
              >
                Ratings & Reviews
              </button>
            </li>
            <li className="me-2" role="presentation">
              <button
                className={`inline-block p-4 border-b-2 text-sm sm:text-base rounded-t-lg ${activeTab === 'delivery' ? 'border-black' : 'border-transparent'}`}
                onClick={() => handleTabsClick('delivery')}
                id="delivery-tab"
                data-tabs-target="#delivery"
                type="button"
                role="tab"
                aria-controls="delivery"
                aria-selected={activeTab === 'delivery'}
              >
                Delivery & Return
              </button>
            </li>
          </ul>
        </div>
        <div id="default-tab-content">
          <div
            className={`p-4 rounded-lg bg-gray-50 ${activeTab !== 'description' ? 'hidden' : ''}`}
            id="description"
            role="tabpanel"
            aria-labelledby="description-tab"
          >
            <ul className="space-y-3">
              <li className="flex gap-3 items-center">
                <span>
                  <GoChevronRight size={18} />
                </span>
                <span className="text-base text-black font-poppins">
                  looking for some awesome collection of dresses? well, lay your
                  hands on this dress from fickle and also get the option of
                  choosing from red colour.
                </span>
              </li>
              <li className="flex gap-3 items-center">
                <span>
                  <GoChevronRight size={18} />
                </span>
                <span className="text-base text-black font-poppins">
                  dress up in a soothing pattern and don this dress made of
                  polyester material.
                </span>
              </li>
              <li className="flex gap-3 items-center">
                <span>
                  <GoChevronRight size={18} />
                </span>
                <span className="text-base text-black font-poppins">
                  satiate your love for dresses by grabbing M size priced at
                  $39.
                </span>
              </li>
              <li className="flex gap-3 items-center">
                <span>
                  <GoChevronRight size={18} />
                </span>
                <span className="text-base text-black font-poppins">
                  look attractive wearing fit & flare dresses and avail 50%
                  discounts.
                </span>
              </li>
            </ul>
          </div>
          <div
            className={`p-4 font-poppins space-y-7 divide-y divide-[#eee] rounded-lg bg-gray-50 ${activeTab !== 'ratings' ? 'hidden' : ''}`}
            id="ratings"
            role="tabpanel"
            aria-labelledby="ratings-tab"
          >
            <div className="grid grid-cols-7 gap-5">
              <div className="col-span-6">
                <div className="flex gap-2">
                  <p className="text-base text-black font-poppins font-semibold">
                    John Doe
                  </p>
                  <span className="text-[#ffc107]">
                    &#9733; &#9733; &#9733; &#9733; &#9733;
                  </span>
                </div>
                <div>
                  <p className="text-black">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
                    nesciunt molestias sint ipsa necessitatibus recusandae sequi
                    quidem. Officia quisquam eaque in error facere.
                  </p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-7 gap-5 pt-5">
              <div className="col-span-6">
                <div className="flex gap-2">
                  <p className="text-base text-black font-poppins font-semibold">
                    John Doe
                  </p>
                  <span className="text-[#ffc107]">
                    &#9733; &#9733; &#9733; &#9733; &#9733;
                  </span>
                </div>
                <div>
                  <p className="text-black">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
                    nesciunt molestias sint ipsa necessitatibus recusandae sequi
                    quidem. Officia quisquam eaque in error facere.
                  </p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-7 gap-5 pt-5">
              <div className="col-span-6">
                <div className="flex gap-2">
                  <p className="text-base text-black font-poppins font-semibold">
                    John Doe
                  </p>
                  <span className="text-[#ffc107]">
                    &#9733; &#9733; &#9733; &#9733; &#9733;
                  </span>
                </div>
                <div>
                  <p className="text-black">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
                    nesciunt molestias sint ipsa necessitatibus recusandae sequi
                    quidem. Officia quisquam eaque in error facere.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            className={`rounded-lg bg-gray-50 ${activeTab !== 'delivery' ? 'hidden' : ''}`}
            id="delivery"
            role="tabpanel"
            aria-labelledby="delivery-tab"
          >
            <div className="relative overflow-x-auto">
              <table className="w-full text-sm text-left rtl:text-right text-gray-500">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 font-poppins text-base text-black"
                    >
                      Delivery & Return
                    </th>
                  </tr>
                </thead>
                <tbody className="font-poppins text-sm sm:text-base">
                  <tr className="bg-white border-b border-[#eee]">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-black whitespace-nowrap font-poppins"
                    >
                      Metros :{' '}
                      <span className="font-poppins text-black">
                        3-5 working days
                      </span>
                    </th>
                  </tr>
                  <tr className="bg-white border-b border-[#eee]">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-black whitespace-nowrap font-poppins"
                    >
                      Other cities :{' '}
                      <span className="font-poppins text-black">
                        5-7 working days
                      </span>
                    </th>
                  </tr>
                  <tr className="bg-white">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap font-poppins text-wrap"
                    >
                      Areas serviceable only by speed post : 15 working days, No
                      hassle returns!
                    </th>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail
