import { useEffect } from 'react'
import { GoChevronRight } from 'react-icons/go'
import { LuClock4 } from 'react-icons/lu'
import { PiPhoneCall } from 'react-icons/pi'
import { SlLocationPin } from 'react-icons/sl'
import { Link } from 'react-router-dom'

const ContactUs = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }, [])

  return (
    <div>
      <div id="contact" className="font-poppins">
        <div className="mx-auto max-w-7xl px-4 py-5 sm:px-6 lg:px-8 lg:pt-7 lg:pb-14">
          <div className="my-auto px-5 py-7 lg:pt-7 lg:pb-11 sm:px-0 mx-auto text-center">
            <span className="text-black font-poppins text-3xl md:text-4xl font-normal capitalize mt-4 md:mt-0">
              Contact Us
            </span>
            <div className="breadcrumb flex text-center justify-center text-black font-poppins text-sm md:text-base font-normal gap-1 md:gap-3 mt-0 md:mt-1">
              <Link to="/">Home</Link>
              <GoChevronRight className="my-auto" />
              <span>Contact Us</span>
            </div>
          </div>
          <div className="flex items-stretch justify-center">
            <div className="grid md:grid-cols-2">
              <div className="h-full pr-6">
                <p className="invisible mt-0 mb-0">
                  Class aptent taciti sociosqu ad litora torquent per conubia
                  nostra, per inceptos himenaeos. Duis nec ipsum orci. Ut
                  scelerisque sagittis ante, ac tincidunt sem venenatis ut.
                </p>
                <ul className="mb-6 md:mb-0">
                  <li className="flex">
                    <div className="flex h-10 w-10 items-center justify-center rounded bg-black/10 text-black">
                      <SlLocationPin size={26} />
                    </div>
                    <div className="ml-4 mb-4">
                      <h3 className="mb-2 text-lg font-semibold leading-6 text-black">
                        Our Address
                      </h3>
                      <p className="text-gray-600">
                        1230 Maecenas Street Donec Road
                      </p>
                      <p className="text-gray-600">New York, EEUU</p>
                    </div>
                  </li>
                  <li className="flex">
                    <div className="flex h-10 w-10 items-center justify-center rounded bg-black/10 text-black">
                      <PiPhoneCall size={27} />
                    </div>
                    <div className="ml-4 mb-4">
                      <h3 className="mb-2 text-lg font-semibold leading-6 text-black">
                        Contact
                      </h3>
                      <p className="text-gray-600">Mobile: +1 (123) 456-7890</p>
                      <p className="text-gray-600">Mail: test@example.com</p>
                    </div>
                  </li>
                  <li className="flex">
                    <div className="flex h-10 w-10 items-center justify-center rounded bg-black/10 text-black">
                      <LuClock4 size={25} />
                    </div>
                    <div className="ml-4 mb-4">
                      <h3 className="mb-2 text-lg font-semibold leading-6 text-black">
                        Working hours
                      </h3>
                      <p className="text-gray-600 dark:text-slate-400">
                        Monday - Friday: 08:00 - 17:00
                      </p>
                      <p className="text-gray-600 dark:text-slate-400">
                        Saturday &amp; Sunday: 08:00 - 12:00
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="card h-fit max-w-6xl p-5 md:p-12" id="form">
                <h2 className="mb-4 text-2xl font-bold text-black">
                  Ready to Get Started?
                </h2>
                <form id="contactForm">
                  <div className="mb-6">
                    <div className="mx-0 mb-1 sm:mb-4">
                      <div className="mx-0 mb-1 sm:mb-4">
                        <label
                          for="name"
                          className="pb-1 text-xs uppercase tracking-wider"
                        ></label>
                        <input
                          type="text"
                          id="name"
                          autocomplete="given-name"
                          placeholder="Your name"
                          className="mb-2 w-full rounded-md border border-border outline-none py-2 pl-2 pr-4 focus:shadow-md sm:mb-0"
                          name="name"
                        />
                      </div>
                      <div className="mx-0 mb-1 sm:mb-4">
                        <label
                          for="email"
                          className="pb-1 text-xs uppercase tracking-wider"
                        ></label>
                        <input
                          type="email"
                          id="email"
                          autocomplete="email"
                          placeholder="Your email address"
                          className="mb-2 w-full rounded-md border border-border outline-none py-2 pl-2 pr-4 focus:shadow-md sm:mb-0"
                          name="email"
                        />
                      </div>
                    </div>
                    <div className="mx-0 mb-1 sm:mb-4">
                      <label
                        for="textarea"
                        className="pb-1 text-xs uppercase tracking-wider"
                      ></label>
                      <textarea
                        id="textarea"
                        name="textarea"
                        cols="30"
                        rows="5"
                        placeholder="Write your message..."
                        className="mb-2 w-full rounded-md border border-border outline-none py-2 pl-2 pr-4 focus:shadow-md sm:mb-0"
                      ></textarea>
                    </div>
                  </div>
                  <div className="text-center">
                    <button
                      type="submit"
                      className="bg-black text-white px-6 py-3 font-xl rounded-md sm:mb-0"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactUs
