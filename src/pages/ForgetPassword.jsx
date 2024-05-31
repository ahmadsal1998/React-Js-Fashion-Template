import { signUpGirl } from '../assets/images/index'
import { Link } from 'react-router-dom'

const ForgetPassword = () => {
  return (
    <div id="forget-password">
      <div className="py-12">
        <div className="mx-7 md:mx-12 lg:mx-24 2xl:mx-36 2xl:mt-10">
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
                    Forget Password
                  </span>
                </div>
                <div className="pt-5">
                  <form className="space-y-5 md:space-y-5 lg:space-y-10">
                    <div className="flex flex-wrap justify-center gap-5">
                      <input
                        type="text"
                        placeholder="First Name"
                        className="outline-none border-b border-border text-base 2xl:mx-7"
                        autoFocus
                      />
                      <input
                        type="text"
                        placeholder="Last Name"
                        className="outline-none border-b border-border text-base 2xl:mx-7"
                      />
                    </div>
                    <div className="flex flex-wrap justify-center gap-5">
                      <input
                        type="email"
                        placeholder="Email Address"
                        className="outline-none border-b border-border text-base 2xl:mx-7"
                      />
                      <input
                        type="text"
                        placeholder="Phone Number"
                        className="outline-none border-b border-border text-base 2xl:mx-7"
                      />
                    </div>
                    <div className="mx-10 text-center">
                      <button className="border-none font-poppins font-normal rounded-lg bg-black text-white text-base md:text-lg tracking-tight md:tracking-wide px-2 md:px-2 lg:px-7 py-2">
                        Send Confirmation Code
                      </button>
                      <p className="text-black text-center font-poppins text-base font-normal pt-2">
                        Already have an account?
                        <Link className="pl-2" to="/login">
                          Login
                        </Link>
                      </p>
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

export default ForgetPassword
