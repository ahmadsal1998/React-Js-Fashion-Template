import { useEffect } from 'react'
import { GoChevronRight } from 'react-icons/go'
import { Link } from 'react-router-dom'

const TermsAndConditions = () => {
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
      <div className="py-7 p-4 font-poppins text-content">
        <div className="my-auto px-5 py-7 lg:pt-7 lg:pb-14 sm:px-0 mx-auto text-center">
          <span className="text-black font-poppins text-3xl md:text-4xl font-normal capitalize mt-4 md:mt-0">
            Terms &amp; Conditions
          </span>
          <div className="breadcrumb flex text-center justify-center text-black font-poppins text-sm md:text-base font-normal gap-1 md:gap-3 mt-0 md:mt-1">
            <Link to="/">Home</Link>
            <GoChevronRight className="my-auto" />
            <span>Terms &amp; Conditions</span>
          </div>
        </div>
        <p className="mb-4">Last updated: {currentDate}</p>
        <p className="mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis
          lorem ut libero malesuada feugiat. Proin eget tortor risus. Vestibulum
          ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia
          curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit
          amet ligula.
        </p>
        <h2 className="text-black text-xl font-semibold mt-4 mb-2">
          1. Acceptance of Terms
        </h2>
        <p className="mb-4">
          By accessing or using the website, you agree to be bound by these
          Terms &amp; Conditions and all applicable laws and regulations.
        </p>
        <h2 className="text-black text-xl font-semibold mt-4 mb-2">2. Use License</h2>
        <p className="mb-4">
          Permission is granted to temporarily download one copy of the
          materials on the website for personal, non-commercial transitory
          viewing only.
        </p>
        <h2 className="text-black text-xl font-semibold mt-4 mb-2">3. Disclaimer</h2>
        <p className="mb-4">
          The materials on the website are provided "as is". The website makes
          no warranties, expressed or implied, and hereby disclaims and negates
          all other warranties.
        </p>
        <h2 className="text-black text-xl font-semibold mt-4 mb-2">4. Limitations</h2>
        <p className="mb-4">
          In no event shall the website be liable for any damages arising out of
          the use or inability to use the materials on the website.
        </p>
        <h2 className="text-black text-xl font-semibold mt-4 mb-2">5. Governing Law</h2>
        <p className="mb-4">
          These terms and conditions are governed by and construed in accordance
          with the laws of your country.
        </p>
        <h2 className="text-black text-xl font-semibold mt-4 mb-2">Contact Us</h2>
        <p className="mb-4">
          If you have any questions about these Terms &amp; Conditions, please
          contact us at
          <Link to="mailto:info@example.com"> info@example.com</Link>.
        </p>
      </div>
    </div>
  )
}

export default TermsAndConditions
