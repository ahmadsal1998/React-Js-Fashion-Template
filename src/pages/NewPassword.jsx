import { signUpGirl } from '../assets/images/index'
import { Link } from 'react-router-dom'

const NewPassword = () => {
  return (
    <div id="new-password">
      <div className="py-12">
        <div className="mx-7 md:mx-12 lg:mx-24 2xl:mx-36 2xl:mt-14">
          <div className="border border-[#DBDBDB]">
            <div className="grid grid-cols-1 md:grid-cols-2 grid-flow-row">
              <div>
                <img
                  src={signUpGirl}
                  alt="Girl in red"
                  className="object-cover h-full hidden md:block"
                />
              </div>
              <div className="pl-7 py-7 lg:py-16 2xl:py-32 space-y-7">
                <div>
                  <h3 className="text-content font-poppins text-4xl font-normal md:pl-7">
                    Fashionista
                  </h3>
                </div>
                <div>
                  <span className="text-black font-poppins text-xl font-normal md:pl-7">
                    Enter Your New Password
                  </span>
                </div>
                <div className="pt-5">
                  <form className="space-y-5 md:space-y-10">
                    <div className="px-7">
                      <input
                        type="password"
                        placeholder="New Password"
                        className="w-full outline-none border-b border-border text-base"
                        autoFocus
                      />
                    </div>
                    <div className="px-7">
                      <input
                        type="password"
                        placeholder="Confirm Password"
                        className="w-full outline-none border-b border-border text-base"
                      />
                    </div>
                    <div className="mx-10 text-center">
                      <button className="border-none font-poppins font-normal rounded-lg bg-black text-white text-lg tracking-wide px-7 py-2">
                        Submit
                      </button>
                    </div>
                    <div className="text-end">
                      <Link
                        className="text-black font-poppins text-base font-normal px-5"
                        to="/"
                      >
                        Fashionista Terms & Conditions
                      </Link>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewPassword
