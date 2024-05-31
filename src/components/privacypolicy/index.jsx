import { useEffect } from 'react'
import { GoChevronRight } from 'react-icons/go'
import { Link } from 'react-router-dom'

const PrivacyPolicy = () => {
  const currentDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }, [])

  return (
    <div>
      <div className="my-auto px-5 py-7 lg:py-11 sm:px-0 mx-auto text-center">
        <span className="text-black font-poppins text-3xl md:text-4xl font-normal capitalize mt-4 md:mt-0">
          Privacy Policy
        </span>
        <div className="breadcrumb flex text-center justify-center text-black font-poppins text-sm md:text-base font-normal gap-1 md:gap-3 mt-0 md:mt-1">
          <Link to="/">Home</Link>
          <GoChevronRight className="my-auto" />
          <span>Privacy Policy</span>
        </div>
      </div>
      <div className="py-7 font-poppins text-content">
        <p className="mb-4">Last updated: {currentDate}</p>
        <p className="mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis
          lorem ut libero malesuada feugiat. Proin eget tortor risus. Vestibulum
          ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia
          curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit
          amet ligula.
        </p>
        <h2 className="text-black text-xl font-semibold mt-4 mb-2">
          Information We Collect
        </h2>
        <p className="mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis
          lorem ut libero malesuada feugiat. Proin eget tortor risus. Vestibulum
          ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia
          curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit
          amet ligula.
        </p>
        <h2 className="text-black text-xl font-semibold mt-4 mb-2">
          How We Use Your Information
        </h2>
        <p className="mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis
          lorem ut libero malesuada feugiat. Proin eget tortor risus. Vestibulum
          ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia
          curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit
          amet ligula.
        </p>
        <h2 className="text-black text-xl font-semibold mt-4 mb-2">Cookies</h2>
        <p className="mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis
          lorem ut libero malesuada feugiat. Proin eget tortor risus. Vestibulum
          ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia
          curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit
          amet ligula.
        </p>
        <h2 className="text-black text-xl font-semibold mt-4 mb-2">Your Choices</h2>
        <p className="mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis
          lorem ut libero malesuada feugiat. Proin eget tortor risus. Vestibulum
          ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia
          curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit
          amet ligula.
        </p>
        <h2 className="text-black text-xl font-semibold mt-4 mb-2">Contact Us</h2>
        <p className="mb-4">
          If you have any questions about this Privacy Policy, please contact us
          at
          <Link to="mailto:info@example.com"> info@example.com</Link>.
        </p>
      </div>
    </div>
  )
}

export default PrivacyPolicy
