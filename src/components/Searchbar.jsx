import { BsSearchHeart } from 'react-icons/bs'

const Searchbar = () => {
  return (
    <form className="relative xl:ml-[200px]">
      <BsSearchHeart className="absolute top-2.5 left-2" />
      <input
        type="text"
        className="p-1 pl-8 focus:outline-none shadow-none border border-[#eee] focus:border-black rounded-lg w-auto xs:w-[285px] sm:w-[310px] placeholder:text-secondary"
        placeholder="Search for products and more"
      />
    </form>
  )
}

export default Searchbar
