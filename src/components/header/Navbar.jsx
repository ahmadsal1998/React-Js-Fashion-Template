import { useState } from 'react'
import Searchbar from '../Searchbar'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { GoHeart } from 'react-icons/go'
import { RiUserHeartLine } from 'react-icons/ri'
import { RxHamburgerMenu } from 'react-icons/rx'
import { Link, NavLink, useMatch } from 'react-router-dom'
import Drawer from '../offcanvas'
import { IoCloseOutline } from 'react-icons/io5'

const Navbar = () => {
  const [openRight, setOpenRight] = useState(false)

  const [open, setOpen] = useState(false)

  const NewArrivalsLink = ({ to, children, className }) => {
    const match = useMatch(to)

    return (
      <Link
        to={to}
        className={`${className} ${match ? 'underline underline-offset-8' : ''}`}
      >
        {children}
      </Link>
    )
  }

  return (
    <div>
      <div className="xl:block hidden">
        <div className="flex justify-center md:justify-around lg:justify-between items-center py-5">
          <Link to="/">
            <h1 className="text-content text-4xl font-medium font-volkhov">
              Fashionista
            </h1>
          </Link>
          <Searchbar />
          <div className="flex gap-2 md:gap-5">
            <ul className="flex flex-wrap pt-2 pr-3 lg:pr-0 items-center list-none text-content font-poppins text-base font-normal gap-7 mx-auto md:mx-0">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? 'underline underline-offset-8' : ''
                }
              >
                <li>Home</li>
              </NavLink>
              <NewArrivalsLink to='/product'>New Arrivals</NewArrivalsLink>
              <NavLink
                to="/shop"
                className={({ isActive }) =>
                  isActive ? 'underline underline-offset-8' : ''
                }
              >
                <li>Shop</li>
              </NavLink>
            </ul>
            <ul className="flex flex-wrap xs:pt-2 lg:pt-0 gap-3 mx-auto md:mx-0">
              <li
                className="bg-black rounded-xl p-1.5 cursor-pointer"
                onClick={() => setOpenRight(!openRight)}
              >
                <AiOutlineShoppingCart className="h-6 w-6 text-white" />
              </li>
              <Link to="/wishlist">
                <li className="bg-black rounded-xl p-1.5 cursor-pointer">
                  <GoHeart className="h-6 w-6 text-white" />
                </li>
              </Link>
              <Link to="/profile">
                <li className="bg-black rounded-xl p-1.5 cursor-pointer">
                  <RiUserHeartLine className="h-6 w-6 text-white" />
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </div>

      <div className="xl:hidden">
        <div className="flex justify-between items-center py-5">
          <Link to="/">
            <h1 className="text-content text-4xl font-medium font-volkhov">
              Fashionista
            </h1>
          </Link>
          <div>
            {open ? (
              <IoCloseOutline size={30} onClick={() => setOpen(false)} />
            ) : (
              <RxHamburgerMenu size={25} onClick={() => setOpen(true)} />
            )}
          </div>
        </div>
        <div
          className="xl:hidden block transition-all duration-500 ease-in-out"
          style={{ maxHeight: open ? '1000px' : '0', overflow: 'hidden' }}
        >
          <div className="flex justify-center">
            <Searchbar />
          </div>
          <div className="flex flex-col flex-wrap items-center justify-center gap-2 md:gap-5">
            <ul className="flex flex-col items-center divide-y divide-table flex-wrap pt-2 pr-3 lg:pr-0 list-none text-content font-poppins text-base font-normal gap-3">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? 'underline underline-offset-8' : ''
                }
              >
                <li>Home</li>
              </NavLink>
              <NavLink
                to="/product"
                className={({ isActive }) =>
                  isActive ? 'underline underline-offset-8' : ''
                }
              >
                <li className="pt-3">New Arrivals</li>
              </NavLink>
              <NavLink
                to="/shop"
                className={({ isActive }) =>
                  isActive ? 'underline underline-offset-8' : ''
                }
              >
                <li className="pt-3">Shop</li>
              </NavLink>
            </ul>
            <ul className="flex flex-wrap xs:pt-2 lg:pt-0 gap-3 mx-auto md:mx-0">
              <li
                className="bg-black rounded-xl p-1.5 cursor-pointer"
                onClick={() => setOpenRight(!openRight)}
              >
                <AiOutlineShoppingCart className="h-6 w-6 text-white" />
              </li>
              <Link to="/wishlist">
                <li className="bg-black rounded-xl p-1.5 cursor-pointer">
                  <GoHeart className="h-6 w-6 text-white" />
                </li>
              </Link>
              <Link to="/profile">
                <li className="bg-black rounded-xl p-1.5 cursor-pointer">
                  <RiUserHeartLine className="h-6 w-6 text-white" />
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </div>

      <Drawer open={openRight} side="right" setOpen={setOpenRight} />

      <div className="border-y border-[#dedfe1] hidden xl:block">
        <div className="px-5">
          <nav>
            <ul className="flex flex-wrap items-center justify-center lg:space-x-20 font-medium font-poppins">
              <li className="relative group px-3 py-2">
                <button className="hover:opacity-50 cursor-pointer">
                  Western Wear
                </button>
                <div className="absolute top-0 -left-16 transition group-hover:translate-y-5 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 min-w-[560px] transform">
                  <div className="relative top-6 p-6 bg-white rounded-xl shadow-xl w-full">
                    <div className="w-10 h-10 bg-white transform rotate-45 absolute top-0 z-0 translate-x-0 transition-transform group-hover:translate-x-[12rem] duration-500 ease-in-out rounded-sm"></div>

                    <div className="relative z-10">
                      <div className="grid grid-cols-2 gap-6">
                        <div>
                          <p className="uppercase tracking-wider text-gray-500 font-medium text-[13px]">
                            Women Western
                          </p>
                          <ul className="mt-3 text-[15px]">
                            <li>
                              <Link
                                to="/shop"
                                className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-content"
                              >
                                Women Tops
                                <p className="text-gray-500 font-normal">
                                  Women Dresses
                                </p>
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="/shop"
                                className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-content"
                              >
                                Women T-shirts
                                <p className="text-gray-500 font-normal">
                                  Polo T-shirts
                                </p>
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="/shop"
                                className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-content"
                              >
                                Women Jeans
                                <p className="text-gray-500 font-normal">
                                  Women Nighties
                                </p>
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div>
                          <p className="uppercase tracking-wider text-gray-500 font-medium text-[13px]">
                            Women Accessories
                          </p>
                          <ul className="mt-3 text-[15px]">
                            <li>
                              <Link
                                to="/shop"
                                className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-content"
                              >
                                Handbags & Wallets
                                <p className="text-gray-500 font-normal">
                                  Branded Wallets
                                </p>
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="/shop"
                                className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-content"
                              >
                                Women Footwear
                                <p className="text-gray-500 font-normal">
                                  Women Flats & Heels
                                </p>
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="/shop"
                                className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br hover:from-indigo-50 hover:to-pink-50 hover:via-blue-50 transition ease-in-out duration-300 text-gray-800 font-semibold hover:text-content"
                              >
                                Women Jackets
                                <p className="text-gray-500 font-normal">
                                  Women Shrugs
                                </p>
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="relative group px-3 py-2">
                <button className="hover:opacity-50 cursor-pointer">
                  Sports & Activewear
                </button>
                <div className="absolute top-0 -left-2 transition group-hover:translate-y-5 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 min-w-[260px] transform">
                  <div className="relative top-6 p-6 bg-white rounded-xl shadow-xl w-full">
                    <div className="w-10 h-10 bg-white transform rotate-45 absolute top-0 z-0 -translate-x-4 transition-transform group-hover:translate-x-3 duration-500 ease-in-out rounded-sm"></div>
                    <div className="relative z-10">
                      <p className="uppercase tracking-wider text-gray-500 font-medium text-[13px]">
                        Women Activewear
                      </p>
                      <ul className="mt-3 text-[15px]">
                        <li>
                          <Link
                            to="/shop"
                            className="font-normal hover:text-content py-1 block"
                          >
                            Swimwear
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/shop"
                            className="font-normal hover:text-content py-1 block"
                          >
                            Topwear
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/shop"
                            className="font-normal hover:text-content py-1 block"
                          >
                            Bottomwear
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/shop"
                            className="font-normal hover:text-content py-1 block"
                          >
                            Shapewear
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
              <li className="relative group px-3 py-2">
                <button className="hover:opacity-50 cursor-pointer">
                  Men's Clothing
                </button>
                <div className="absolute top-0 -left-48 transition group-hover:translate-y-5 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 min-w-[560px] transform">
                  <div className="relative top-6 p-6 bg-white rounded-xl shadow-xl w-full">
                    <div className="relative z-10">
                      <Link
                        to="/shop"
                        className="block p-2 -mx-2 rounded-lg ease-in-out duration-300 text-gray-800 font-semibold"
                      >
                        Men's Fashion
                        <p className="text-gray-500 font-normal">
                          Exclusive Collections
                        </p>
                      </Link>
                      <div className="mt-6 grid grid-cols-2 gap-6">
                        <div>
                          <p className="uppercase tracking-wider text-gray-500 font-medium text-[13px]">
                            Top Wear
                          </p>
                          <ul className="mt-3 text-[15px]">
                            <li>
                              <Link
                                to="/shop"
                                className="text-gray-600 hover:text-gray-800 py-1 block font-normal"
                              >
                                T-Shirts & Polos
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="/shop"
                                className="text-gray-600 hover:text-gray-800 py-1 block font-normal"
                              >
                                Casualwear
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="/shop"
                                className="text-gray-600 hover:text-gray-800 py-1 block font-normal"
                              >
                                Suits & Blazers
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="/shop"
                                className="text-gray-600 hover:text-gray-800 py-1 block font-normal"
                              >
                                Jackets & Sweaters
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div>
                          <p className="uppercase tracking-wider text-gray-500 font-medium text-[13px]">
                            Bottom Wear
                          </p>
                          <ul className="mt-3 text-[15px]">
                            <li>
                              <Link
                                to="/shop"
                                className="text-gray-600 hover:text-gray-800 py-1 block font-normal"
                              >
                                Jeans
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="/shop"
                                className="text-gray-600 hover:text-gray-800 py-1 block font-normal"
                              >
                                Casual Trousers
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="/shop"
                                className="text-gray-600 hover:text-gray-800 py-1 block font-normal"
                              >
                                Formal Trousers
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="/shop"
                                className="text-gray-600 hover:text-gray-800 py-1 block font-normal"
                              >
                                Joggers & Shorts
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="relative group px-3 py-2">
                <button className="hover:opacity-50 cursor-pointer">
                  Accessories
                </button>
                <div className="absolute top-0 -left-2 transition group-hover:translate-y-5 translate-y-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible duration-500 ease-in-out group-hover:transform z-50 min-w-[200px] transform">
                  <div className="relative top-6 p-6 bg-white rounded-xl shadow-xl w-full">
                    <div className="w-10 h-10 bg-white transform rotate-45 absolute top-0 z-0 -translate-x-4 transition-transform group-hover:translate-x-3 duration-500 ease-in-out rounded-sm"></div>
                    <div className="relative z-10">
                      <ul className="text-[15px]">
                        <li>
                          <Link
                            to="/shop"
                            className="text-gray-600 hover:text-gray-800 py-1 block font-normal"
                          >
                            Caps & Hats
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/shop"
                            className="text-gray-600 hover:text-gray-800 py-1 block font-normal"
                          >
                            Lapel Pins & Brooch
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/shop"
                            className="text-gray-600 hover:text-gray-800 py-1 block font-normal"
                          >
                            Ties & Pocket Squares
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/shop"
                            className="text-gray-600 hover:text-gray-800 py-1 block font-normal"
                          >
                            Cufflinks & Bracelets
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/shop"
                            className="text-gray-600 hover:text-gray-800 py-1 block font-normal"
                          >
                            Headphones & Speakers
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
              <li className="relative group px-3 py-2">
                <Link to="/shop" className="hover:opacity-50 cursor-pointer">
                  Furniture
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  )
}

export default Navbar
