import { FcGoogle } from 'react-icons/fc'
import { signUpGirl, facebook } from '../assets/images/index'
import { Link } from 'react-router-dom'

const SignUp = () => {
  return (
    <div id="signup">
      <div className="py-12">
        <div className="mx-7 md:mx-12 lg:mx-24 2xl:mx-36">
          <div className="border border-[#DBDBDB]">
            <div className="grid grid-cols-1 md:grid-cols-2 grid-flow-row">
              <div>
                <img
                  src={signUpGirl}
                  alt="Girl in red"
                  className="object-cover h-full hidden md:block"
                />
              </div>
              <div className="flex flex-col justify-center pl-7 py-7 space-y-7">
                <div>
                  <h3 className="text-content text-left font-poppins text-4xl font-normal md:pl-7">
                    Fashionista
                  </h3>
                </div>
                <div>
                  <span className="text-black font-poppins text-xl font-normal md:pl-7">
                    Create Account
                  </span>
                </div>
                <div className="flex flex-wrap justify-center gap-5 pt-2 mx-5 xs:mx-0">
                  <div className="border border-gray flex gap-2 rounded-lg px-3 py-1">
                    <FcGoogle className="h-8 w-8 my-auto" />
                    <p className="text-black font-poppins text-base font-normal my-auto">
                      Sign up via Google
                    </p>
                  </div>
                  <div className="border border-gray flex gap-2 rounded-lg px-3 py-1">
                    <img
                      src={facebook}
                      alt="Sign with facebook"
                      className="h-8 w-8"
                    />
                    <p className="text-black font-poppins text-base font-normal my-auto">
                      Sign up via Facebook
                    </p>
                  </div>
                </div>
                <div className="flex justify-center pt-3">
                  <h4 className="text-secondary font-poppins text-2xl font-semibold">
                    - OR -
                  </h4>
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
                    <div className="flex flex-wrap justify-center gap-5">
                      <input
                        type="password"
                        placeholder="Password"
                        className="outline-none border-b border-border text-base 2xl:mx-7"
                      />
                      <input
                        type="password"
                        placeholder="Confirm Password"
                        className="outline-none border-b border-border text-base 2xl:mx-7"
                      />
                    </div>
                    <div className="text-center">
                      <button className="font-poppins leading-7 font-normal border-none rounded-lg bg-black text-white px-7 py-2">
                        Create Account
                      </button>
                      <p className="text-black font-poppins text-base font-normal pt-2">
                        Already have an account?
                        <Link className="px-2" to="/login">
                          Login
                        </Link>
                      </p>
                    </div>
                    <div className="text-center sm:text-end px-5">
                      <Link
                        className="text-black font-poppins text-base font-normal"
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

export default SignUp
