import { useState } from 'react'
import { Link } from 'react-router-dom'
import { CgProfile } from 'react-icons/cg'
import { BsBoxSeam } from 'react-icons/bs'
import { GoPlus } from 'react-icons/go'
import { IoCloseOutline } from 'react-icons/io5'
import { FaEye, FaRegAddressCard } from 'react-icons/fa'
import { addressData } from '../../components/data'

const Profile = () => {
  // tabs state

  const [activeTab, setActiveTab] = useState('profile')
  // const [activePaymentTab, setActivePaymentTab] = useState('visa')
  const [showForm, setShowForm] = useState(false)
  const [paymentOption, setPaymentOption] = useState('home')
  const [address, setAddress] = useState(addressData)

  const removeAddress = (id) => {
    setAddress(address.filter((address) => address.id !== id))
  }

  const handleTabsClick = (tabId) => {
    setActiveTab(tabId)
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  // const handlePaymentsClick = (tabId) => {
  //   setActivePaymentTab(tabId)
  // }

  const handlePaymentOptionChange = (option) => {
    setPaymentOption(option)
  }

  const toggleForm = () => {
    setShowForm(!showForm)
  }

  return (
    <div id="profile" className="py-16">
      <div className="grid grid-cols-1 md:grid-cols-12 grid-flow-row">
        <div className="col-span-3">
          <div className="flex items-center pl-3 gap-3">
            <div className="flex flex-wrap flex-col">
              <h3 className="font-poppins text-xl font-semibold text-black/80">
                Hello, John!
              </h3>
              <span className="font-poppins text-base font-medium text-black/80">
                john@test.com
              </span>
            </div>
          </div>
          <div className="py-6">
            <ul
              className="flex flex-col gap-1"
              id="default-tab"
              data-tabs-toggle="#default-tab-content"
              role="tablist"
            >
              <li
                className={`flex gap-3 font-poppins text-lg font-medium text-left py-4 pl-6 rounded-lg cursor-pointer ${activeTab === 'profile' ? 'text-black shadow-lg' : 'text-content shadow-none'}`}
                onClick={() => handleTabsClick('profile')}
                id="profile-tab"
                data-tabs-target="#profile"
                type="button"
                role="tab"
                aria-controls="profile"
                aria-selected={activeTab === 'profile'}
              >
                <CgProfile size={27} />
                Profile
              </li>
              <li
                className={`flex gap-3 font-poppins text-lg font-medium text-left py-4 pl-6 rounded-lg cursor-pointer ${activeTab === 'orders' ? 'text-black shadow-lg' : 'text-content shadow-none'}`}
                onClick={() => handleTabsClick('orders')}
                id="orders-tab"
                data-tabs-target="#orders"
                type="button"
                role="tab"
                aria-controls="orders"
                aria-selected={activeTab === 'orders'}
              >
                <BsBoxSeam size={27} />
                Orders
              </li>
              <li
                className={`flex gap-3 font-poppins text-lg font-medium text-left py-4 pl-6 rounded-lg cursor-pointer ${activeTab === 'address' ? 'text-black shadow-lg' : 'text-content shadow-none'}`}
                onClick={() => handleTabsClick('address')}
                id="address-tab"
                data-tabs-target="#address"
                type="button"
                role="tab"
                aria-controls="address"
                aria-selected={activeTab === 'address'}
              >
                <FaRegAddressCard size={27} />
                Manage Addresses
              </li>
              {/* <li
                className={`flex gap-3 font-poppins text-lg font-medium text-left py-4 pl-6 rounded-lg cursor-pointer ${activeTab === 'paymentmethod' ? 'text-black shadow-lg' : 'text-content shadow-none'}`}
                onClick={() => handleTabsClick('paymentmethod')}
                id="paymentmethod-tab"
                data-tabs-target="#paymentmethod"
                type="button"
                role="tab"
                aria-controls="paymentmethod"
                aria-selected={activeTab === 'paymentmethod'}
              >
                <MdOutlinePayment size={27} />
                Payment Method
              </li> */}
            </ul>
          </div>
        </div>
        <div
          className={`${activeTab === 'profile' || activeTab === 'paymentmethod' ? 'col-span-9' : 'col-span-9'}`}
          id="default-tab-content"
        >
          {/* <h3 className="font-poppins text-center font-bold text-2xl text-content">
            My Profile
          </h3> */}
          <div
            className={`pl-7 flex justify-center ${activeTab !== 'profile' ? 'hidden' : ''}`}
            id="profile"
            role="tabpanel"
            aria-labelledby="profile-tab"
          >
            <div className="flex">
              <div className="flex items-center justify-center p-12">
                <div className="mx-auto w-full bg-white">
                  <h3 className="font-poppins text-center font-bold text-2xl text-content pb-5">
                    My Profile
                  </h3>
                  <form>
                    <div className="flex flex-col md:flex-row gap-0 min-[768px]:gap-5">
                      <div className="mb-5">
                        <label className="mb-3 block text-base font-poppins font-medium text-content">
                          First Name
                        </label>
                        <input
                          type="text"
                          name="firstname"
                          id="firstname"
                          placeholder="First Name"
                          className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-poppins font-medium text-content outline-none focus:border-border focus:shadow-md"
                        />
                      </div>
                      <div className="mb-5">
                        <label className="mb-3 block text-base font-poppins font-medium text-content">
                          Last Name
                        </label>
                        <input
                          type="text"
                          name="lastname"
                          id="lastname"
                          placeholder="Last Name"
                          className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-poppins font-medium text-content outline-none focus:border-border focus:shadow-md"
                        />
                      </div>
                    </div>
                    <div className="mb-5">
                      <label className="mb-3 block text-base font-poppins font-medium text-content">
                        Username
                      </label>
                      <input
                        type="text"
                        name="username"
                        id="username"
                        placeholder="Username"
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-poppins font-medium text-content outline-none focus:border-border focus:shadow-md"
                      />
                    </div>
                    <div className="mb-5">
                      <label className="mb-3 block text-base font-poppins font-medium text-content">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phonenumber"
                        id="phonenumber"
                        placeholder="7405171037"
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-poppins font-medium text-content outline-none focus:border-border focus:shadow-md"
                      />
                    </div>
                    <div className="mb-5">
                      <label className="mb-3 block text-base font-poppins font-medium text-content">
                        Tax ID No.
                      </label>
                      <input
                        type="text"
                        name="taxid"
                        id="taxid"
                        placeholder="MH895451AJ76"
                        className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-poppins font-medium text-content outline-none focus:border-border focus:shadow-md"
                      />
                    </div>

                    <div className="text-center">
                      <button className="hover:shadow-form rounded-md bg-black py-3 px-7 text-center text-base font-poppins font-medium tracking-wider text-white outline-none">
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          {/* orders tab */}
          <div
            className={`pl-7 ${activeTab !== 'orders' ? 'hidden' : ''}`}
            id="orders"
            role="tabpanel"
            aria-labelledby="orders-tab"
          >
            <h3 className="pb-3 font-poppins font-bold text-2xl text-content">
              Orders
            </h3>
            <div>
              <div className="sm:block hidden overflow-x-auto font-poppins">
                <table className="w-full text-sm text-left text-content">
                  <thead className="text-sm text-content capitalize border-b border-table">
                    <tr>
                      <th scope="col" className="px-6 py-3">
                        Order ID
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Price
                      </th>
                      <th scope="col" className="px-6 py-3 flex justify-center">
                        Date & Time
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Status
                      </th>
                      <th scope="col" className="px-6 py-3">
                        View Order
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-white border-b border-table">
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                      >
                        #12345600
                      </th>
                      <td className="px-6 py-4">$250</td>
                      <td className="px-6 py-4 flex flex-col items-center">
                        <span>At 5.45 pm</span>
                        <span>December 12, 2023</span>
                      </td>
                      <td className="px-6 py-4">
                        <span className="bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded">
                          Delivered
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <Link to="/orderdetail">
                          <FaEye size={26} className="mx-auto" />
                        </Link>
                      </td>
                    </tr>
                    <tr className="bg-white border-b border-table">
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                      >
                        #12345600
                      </th>
                      <td className="px-6 py-4">$250</td>
                      <td className="px-6 py-4 flex flex-col items-center">
                        <span>At 5.45 pm</span>
                        <span>December 12, 2023</span>
                      </td>
                      <td className="px-6 py-4">
                        <span className="bg-pink-200 text-pink-500 text-xs font-medium me-2 px-2.5 py-0.5 rounded">
                          Cancelled
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <Link to="/orderdetail">
                          <FaEye size={26} className="mx-auto" />
                        </Link>
                      </td>
                    </tr>
                    <tr className="bg-white border-b border-table">
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                      >
                        #12345600
                      </th>
                      <td className="px-6 py-4">$250</td>
                      <td className="px-6 py-4 flex flex-col items-center">
                        <span>At 5.45 pm</span>
                        <span>December 12, 2023</span>
                      </td>
                      <td className="px-6 py-4">
                        <span className="bg-orange-200 text-[#F87401] text-xs text-nowrap font-medium me-2 px-2.5 py-0.5 rounded">
                          Delivered Today
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <Link to="/orderdetail">
                          <FaEye size={26} className="mx-auto" />
                        </Link>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="responsive-table block sm:hidden space-y-5">
                <Link
                  to="/orderdetail"
                  className="flex flex-col items-center bg-white border border-table rounded-lg shadow hover:bg-gray-100"
                >
                  <div className="flex flex-col justify-between p-4 leading-normal rounded-l border-l-[5px] border-green-500 font-poppins w-full gap-5">
                    <div className="flex flex-wrap justify-between">
                      <h3 className="text-content text-md font-semibold">
                        #12354680
                      </h3>
                      <span className="bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 my-auto rounded">
                        Delivered
                      </span>
                    </div>
                    <div className="flex flex-row items-start justify-between">
                      <div className="divide-x divide-content space-x-3">
                        <span className="text-content text-sm font-normal">
                          2024-01-03
                        </span>
                        <span className="text-content text-sm font-normal pl-3">
                          05:10 PM
                        </span>
                      </div>
                      <div>
                        <span className="text-content text-sm font-semibold mr-11">
                          $896
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
                <Link
                  to="/orderdetail"
                  className="flex flex-col items-center bg-white border border-table rounded-lg shadow hover:bg-gray-100"
                >
                  <div className="flex flex-col justify-between p-4 leading-normal rounded-l border-l-[5px] border-pink-500 font-poppins w-full gap-5">
                    <div className="flex flex-wrap justify-between">
                      <h3 className="text-content text-md font-semibold">
                        #12354680
                      </h3>
                      <span className="bg-pink-200 text-pink-500 text-xs font-medium me-2 px-2.5 py-0.5 my-auto rounded">
                        Cancelled
                      </span>
                    </div>
                    <div className="flex flex-row items-start justify-between">
                      <div className="divide-x divide-content space-x-3">
                        <span className="text-content text-sm font-normal">
                          2024-01-03
                        </span>
                        <span className="text-content text-sm font-normal pl-3">
                          05:10 PM
                        </span>
                      </div>
                      <div>
                        <span className="text-content text-sm font-semibold mr-11">
                          $896
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
                <Link
                  to="/orderdetail"
                  className="flex flex-col items-center bg-white border border-table rounded-lg shadow hover:bg-gray-100"
                >
                  <div className="flex flex-col justify-between p-4 leading-normal rounded-l border-l-[5px] border-[#F87401] font-poppins w-full gap-5">
                    <div className="flex flex-wrap justify-between">
                      <h3 className="text-content text-md font-semibold">
                        #12354680
                      </h3>
                      <span className="bg-orange-200 text-[#F87401] text-xs font-medium me-2 px-2.5 py-0.5 w-20 text-center rounded">
                        Delivered Today
                      </span>
                    </div>
                    <div className="flex flex-row items-start justify-between">
                      <div className="divide-x divide-content space-x-3">
                        <span className="text-content text-sm font-normal">
                          2024-01-03
                        </span>
                        <span className="text-content text-sm font-normal pl-3">
                          05:10 PM
                        </span>
                      </div>
                      <div>
                        <span className="text-content text-sm font-semibold mr-11">
                          $896
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
          {/* address tab */}
          <div
            className={`pl-7 ${activeTab !== 'address' ? 'hidden' : ''}`}
            id="address"
            role="tabpanel"
            aria-labelledby="address-tab"
          >
            <h3 className="font-poppins font-bold text-2xl text-content">
              Manage Addresses
            </h3>
            <div>
              <div
                className="mt-5 border border-border rounded gap-3 p-3"
                data-modal-target="crud-modal"
                data-modal-toggle="crud-modal"
              >
                <div className="flex cursor-pointer" onClick={toggleForm}>
                  <GoPlus size={25} />
                  <span className="uppercase text-content text-base font-medium font-poppins">
                    add a new address
                  </span>
                </div>
                {/* Address Form Started */}
                {showForm && (
                  <div>
                    <form className="w-full max-w-lg">
                      <div className="flex flex-wrap mb-2 mt-6">
                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                          <label className="block tracking-wide text-black font-poppins text-base font-medium mb-2">
                            Name
                          </label>
                          <input
                            className="appearance-none block w-full bg-gray-200 text-gray border border-content rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                            id="grid-first-name"
                            type="text"
                            placeholder="Jane"
                          />
                        </div>
                        <div className="w-full md:w-1/2 px-3">
                          <label className="block tracking-wide text-black font-poppins text-base font-medium mb-2">
                            Mobile Number
                          </label>
                          <input
                            className="appearance-none block w-full bg-gray-200 text-gray border border-content rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            id="grid-last-name"
                            type="text"
                            placeholder="+91 111 222 3334"
                          />
                        </div>
                      </div>
                      <div className="flex flex-wrap mb-5">
                        <div className="w-full px-3">
                          <label className="block tracking-wide text-black font-poppins text-base font-medium mb-2">
                            Address Line 1
                          </label>
                          <input
                            className="appearance-none block w-full bg-gray-200 text-gray border border-content rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            id="grid-password"
                            type="text"
                            placeholder="New Address"
                          />
                          {/* <p className="text-gray-600 text-xs italic">
                            Please add area and street only
                          </p> */}
                        </div>
                        <div className="w-full px-3">
                          <label className="block tracking-wide text-black font-poppins text-base font-medium mb-2">
                            Address Line 2
                          </label>
                          <input
                            className="appearance-none block w-full bg-gray-200 text-gray border border-content rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            id="grid-password"
                            type="text"
                            placeholder="New Address"
                          />
                          <p className="text-gray-600 text-xs italic">
                            Please add area and street only
                          </p>
                        </div>
                      </div>
                      <div className="flex flex-wrap mb-2">
                        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                          <label className="block tracking-wide text-black font-poppins text-base font-medium mb-2">
                            City
                          </label>
                          <input
                            className="appearance-none block w-full bg-gray-200 text-gray border border-content rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            id="grid-city"
                            type="text"
                            placeholder="Ahmedabad"
                          />
                        </div>
                        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                          <label className="block tracking-wide text-black font-poppins text-base font-medium mb-2">
                            State
                          </label>
                          <div className="relative">
                            <select
                              className="block appearance-none w-full bg-gray-200 border border-content text-gray py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                              id="grid-state"
                            >
                              <option>Gujarat</option>
                              <option>Uttarakhand</option>
                              <option>Telangana</option>
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                              <svg
                                className="fill-current h-4 w-4"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                              >
                                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                              </svg>
                            </div>
                          </div>
                        </div>
                        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                          <label className="block tracking-wide text-black font-poppins text-base font-medium mb-2">
                            Zip
                          </label>
                          <input
                            className="appearance-none block w-full bg-gray-200 text-gray border border-content rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            id="grid-zip"
                            type="text"
                            placeholder="90210"
                          />
                        </div>
                      </div>
                      <div className="w-full md:w-1/2 pt-5 ml-3">
                        <label className="block tracking-wide text-black font-poppins text-base font-medium mb-2">
                          Address Type
                        </label>
                        <div className="flex gap-3">
                          <div className="flex gap-3 items-center py-3">
                            <input
                              type="radio"
                              id="onlinePayment"
                              name="addressOption"
                              value="home"
                              className="accent-slate-800 outline-none"
                              checked={paymentOption === 'home'}
                              onChange={() => handlePaymentOptionChange('home')}
                            />
                            <label
                              htmlFor="onlinePayment"
                              className="text-base font-poppins text-black"
                            >
                              Home
                            </label>
                          </div>
                          <div className="flex gap-3 items-center">
                            <input
                              type="radio"
                              id="cod"
                              name="addressOption"
                              value="office"
                              className="accent-slate-800 outline-none"
                              checked={paymentOption === 'office'}
                              onChange={() =>
                                handlePaymentOptionChange('office')
                              }
                            />
                            <label
                              htmlFor="cod"
                              className="text-base font-poppins text-black"
                            >
                              Office
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="text-center">
                        <button className="border-none font-poppins font-normal rounded-lg bg-black text-white text-base tracking-wider px-10 py-2">
                          Save
                        </button>
                      </div>
                    </form>
                  </div>
                )}
              </div>
              {/* Address Form Ended */}
              {address.map((item, index) => (
                <div
                  className="relative mt-5 border border-border px-3 py-5 rounded"
                  id="address-home"
                  key={index}
                >
                  <div className="bg-blue-100 inline-flex justify-between font-poppins text-content text-xs font-medium px-2.5 py-0.5 rounded ml-2">
                    {item.type}
                  </div>
                  <div className="absolute right-0 bottom-20 p-3">
                    <IoCloseOutline
                      className="cursor-pointer"
                      size={25}
                      onClick={() => removeAddress(item.id)}
                    />
                  </div>
                  <div className="mt-2 pl-3 text-content text-base font-medium">
                    {item.name}
                  </div>
                  <div className="mt-2 pl-3 text-content text-base font-normal">
                    {item.address}
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* payment method tab */}
          {/* <div
            className={`pl-7 ${activeTab !== 'paymentmethod' ? 'hidden' : ''}`}
            id="paymentmethod"
            role="tabpanel"
            aria-labelledby="paymentmethod-tab"
          >
            <h3 className="font-poppins font-bold text-2xl text-content">
              Payment Method
            </h3>
            <div className="flex gap-10 py-5">
              <div
                className="cursor-pointer"
                onClick={() => handlePaymentsClick('visa')}
                id="visa-tab"
                data-tabs-target="#visa"
                type="button"
                role="tab"
                aria-controls="visa"
                aria-selected={activeTab === 'visa'}
              >
                <img
                  src={visa}
                  alt="Payment via Visa"
                  height={100}
                  width={100}
                  className={`${activePaymentTab === 'visa' ? 'shadow-inner' : 'shadow-xl'} rounded-xl p-5`}
                />
              </div>
              <div
                className="cursor-pointer"
                onClick={() => handlePaymentsClick('paypal')}
                id="paypal-tab"
                data-tabs-target="#paypal"
                type="button"
                role="tab"
                aria-controls="paypal"
                aria-selected={activeTab === 'paypal'}
              >
                <img
                  src={paypal}
                  alt="Payment via PayPal"
                  height={120}
                  width={120}
                  className={`${activePaymentTab === 'paypal' ? 'shadow-inner' : 'shadow-xl'} rounded-xl p-5`}
                />
              </div>
            </div>
            <div
              className={`flex-col rounded-lg shadow-lg pl-7 pb-7 ${activePaymentTab !== 'visa' ? 'hidden' : ''}`}
              id="visa"
              role="tabpanel"
              aria-labelledby="visa-tab"
            >
              <div className="flex gap-5">
                <div>
                  <label className="text-gray font-poppins text-lg font-normal">
                    Name on card
                  </label>
                  <br />
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="py-2 px-2 w-[460px] border border-border rounded-lg text-lg"
                  />
                </div>
              </div>
              <div className="flex gap-5 pt-5">
                <div>
                  <label className="text-gray font-poppins text-lg font-normal">
                    Card Number
                  </label>
                  <br />
                  <input
                    type="number"
                    placeholder="0000 0000 0000 0000"
                    className="py-2 px-2 w-[460px] border border-border rounded-lg text-lg"
                  />
                </div>
              </div>
              <div className="flex gap-5 pt-5">
                <div>
                  <label className="text-gray font-poppins text-lg font-normal">
                    Expiration Date
                  </label>
                  <br />
                  <input
                    type="month"
                    placeholder="MM/YYYY"
                    className="py-2 px-2 w-56 text-gray border border-border rounded-lg text-lg"
                  />
                </div>
                <div>
                  <label className="text-gray font-poppins text-lg font-normal">
                    Security Code
                  </label>
                  <br />
                  <input
                    type="number"
                    placeholder="000"
                    className="py-2 px-2 border border-border rounded-lg text-lg"
                  />
                </div>
              </div>
              <div className="text-center pt-6">
                <button className="border-none font-poppins font-normal rounded-lg bg-black text-white text-lg tracking-wider px-10 py-2">
                  Submit
                </button>
              </div>
            </div>
            <div
              className={`flex-col rounded-lg shadow-lg pl-7 pb-7 ${activePaymentTab !== 'paypal' ? 'hidden' : ''}`}
              id="paypal"
              role="tabpanel"
              aria-labelledby="paypal-tab"
            >
              <div className="flex gap-5">
                <div>
                  <label className="text-gray font-poppins text-lg font-normal">
                    Paypal ID
                  </label>
                  <br />
                  <input
                    type="number"
                    placeholder="0000 0000 0000 0000"
                    className="py-2 px-2 w-[460px] border border-border rounded-lg text-lg"
                  />
                </div>
              </div>
              <div className="flex gap-5 pt-5">
                <div>
                  <label className="text-gray font-poppins text-lg font-normal">
                    Paypal Username
                  </label>
                  <br />
                  <input
                    type="text"
                    placeholder="johndoe"
                    className="py-2 px-2 w-[460px] border border-border rounded-lg text-lg"
                  />
                </div>
              </div>
              <div className="flex gap-5 pt-5">
                <div>
                  <label className="text-gray font-poppins text-lg font-normal">
                    Expiration Date
                  </label>
                  <br />
                  <input
                    type="month"
                    placeholder="MM/YYYY"
                    className="py-2 px-2 w-56 text-gray border border-border rounded-lg text-lg"
                  />
                </div>
                <div>
                  <label className="text-gray font-poppins text-lg font-normal">
                    Security Code
                  </label>
                  <br />
                  <input
                    type="number"
                    placeholder="000"
                    className="py-2 px-2 border border-border rounded-lg text-lg"
                  />
                </div>
              </div>
              <div className="text-center pt-6">
                <button className="border-none font-poppins font-normal rounded-lg bg-black text-white text-lg tracking-wider px-10 py-2">
                  Submit
                </button>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  )
}

export default Profile
