import { GoChevronRight } from 'react-icons/go'
import WishlistCard from './wishlistCard'
import { Link } from 'react-router-dom'

const Wishlist = () => {
  return (
    <div id="wishlist" className="my-10 lg:my-10">
      <div className="my-auto px-5 py-7 lg:py-1 sm:px-0 mx-auto text-center">
        <span className="text-black font-poppins text-3xl md:text-4xl font-normal capitalize mt-4 md:mt-0">
          Your Wishlist
        </span>
        <div className="breadcrumb flex text-center justify-center text-black font-poppins text-sm md:text-base font-normal gap-1 md:gap-3 mt-0 md:mt-1">
          <Link to="/">Home</Link>
          <GoChevronRight className="my-auto" />
          <span>Your Wishlist</span>
        </div>
      </div>
      <div className="py-12">
        <WishlistCard />
      </div>
    </div>
  )
}

export default Wishlist
