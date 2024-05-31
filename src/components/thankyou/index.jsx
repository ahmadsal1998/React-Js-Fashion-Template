import { Link } from 'react-router-dom'
import { Thankyou } from '../../assets/images/index'
import { MdShoppingCartCheckout } from 'react-icons/md'
import { RiHomeSmileLine } from 'react-icons/ri'
import { useEffect } from 'react'

const ThankYou = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }, [])

  return (
    <div className="py-7 md:py-20">
      <img
        src={Thankyou}
        alt="Thank You For Shopping"
        className="h-auto w-auto mx-auto"
      />
      <p className="mt-5 text-lg md:text-2xl text-content text-center">
        Thank you for your order! We appreciate your support and look forward to
        serving you again.
      </p>
      <div className="flex justify-center">
        <Link to="/shop">
          <button className="flex gap-3 items-center rounded-lg border-none outline-none bg-black shadow-lg text-white font-poppins text-base font-normal px-6 py-3 mx-auto my-5">
            Continue Shopping <MdShoppingCartCheckout size={26} />
          </button>
        </Link>
      </div>
      <div className="flex justify-center">
        <Link to="/">
          <button className="flex gap-3 items-center rounded-lg border-none outline-none bg-black shadow-lg text-white font-poppins text-base font-normal px-11 py-3 mx-auto my-0">
            Back to home <RiHomeSmileLine size={26} />
          </button>
        </Link>
      </div>
    </div>
  )
}

export default ThankYou
