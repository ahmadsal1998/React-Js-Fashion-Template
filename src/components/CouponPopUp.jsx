import { useState } from 'react'
import { RiCloseLine } from 'react-icons/ri'

const CouponPopUp = ({ onClose }) => {
  const [appliedCoupon, setAppliedCoupon] = useState('')

  const handleApplyCoupon = (coupon) => {
    setAppliedCoupon(coupon)
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-800 bg-opacity-50">
      <div className="bg-white rounded-lg shadow-xl w-96">
        <div className="flex justify-between items-center px-6 py-4 bg-gray-200 rounded-t-lg">
          <h2 className="text-lg font-poppins text-black font-bold">
            Select a Coupon
          </h2>
          <button onClick={onClose} className="text-content">
            <RiCloseLine size={24} />
          </button>
        </div>
        {appliedCoupon && (
          <div className="bg-green-100 text-green-800 font-poppins px-4 py-2 rounded-b-lg">
            Coupon "{appliedCoupon}" Applied
          </div>
        )}
        <div className="px-6 py-4">
          <ul className="divide-y divide-gray">
            <li className="py-3">
              <div className="flex justify-between items-center">
                <div>
                  <span className="font-semibold text-gray-800">GET20</span>
                  <p className="text-sm text-gray-500">Get 20% off</p>
                </div>
                <button
                  onClick={() => handleApplyCoupon('GET20')}
                  className="px-3 py-1 text-black ring-1 ring-content rounded-lg focus:outline-none focus:ring-2 focus:ring-content"
                >
                  Apply
                </button>
              </div>
            </li>
            <li className="py-3">
              <div className="flex justify-between items-center">
                <div>
                  <span className="font-semibold text-gray-800">SALE50</span>
                  <p className="text-sm text-gray-500">Get 50% off</p>
                </div>
                <button
                  onClick={() => handleApplyCoupon('SALE50')}
                  className="px-3 py-1 text-black ring-1 ring-content rounded-lg focus:outline-none focus:ring-2 focus:ring-content"
                >
                  Apply
                </button>
              </div>
            </li>
            <li className="py-3">
              <div className="flex justify-between items-center">
                <div>
                  <span className="font-semibold text-gray-800">FREESHIP</span>
                  <p className="text-sm text-gray-500">Free shipping</p>
                </div>
                <button
                  onClick={() => handleApplyCoupon('FREESHIP')}
                  className="px-3 py-1 text-black ring-1 ring-content rounded-lg focus:outline-none focus:ring-2 focus:ring-content"
                >
                  Apply
                </button>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default CouponPopUp
