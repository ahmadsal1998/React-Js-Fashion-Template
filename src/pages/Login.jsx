import { FcGoogle } from 'react-icons/fc'
import { facebook, signUpGirl } from '../assets/images/index'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div id="login">
      <div className="py-12">
        <div className="mx-7 md:mx-12 lg:mx-24 2xl:mx-36">
          <div className="border border-[#DBDBDB]">
            <div className="grid grid-cols-1 md:grid-cols-2 grid-flow-row">
              <div>
                <img
                  src={signUpGirl}
                  alt="Girl in red"
Fashionista                  className="object-cover h-full hidden md:block"
                />
              </div>
              <div className="pl-7 py-7 space-y-7">
                <div>
                  <h3 className="text-content font-poppins text-4xl font-normal md:pl-7">
                    
                  </h3>
                </div>
                <div>
                  <span className="text-black font-poppins text-xl font-normal md:pl-7">
                    Sign In To Fashionista
                  </span>
                </div>
                <div className="flex flex-wrap justify-center gap-5 pt-2 mx-5 xs:mx-0">
                  <div className="border border-gray flex gap-2 rounded-lg px-3 py-1">
                    <FcGoogle className="h-8 w-8 my-auto" />
                    <p className="text-black font-poppins text-base font-normal my-auto">
                      Sign in via Google
                    </p>
                  </div>
                  <div className="border border-gray flex gap-2 rounded-lg px-3 py-1">
                    <img
                      src={facebook}
                      alt="Sign with facebook"
                      className="h-8 w-8"
                    />
                    <p className="text-black font-poppins text-base font-normal my-auto">
                      Sign in via Facebook
                    </p>
                  </div>
                </div>
                <div className="flex justify-center pt-3">
                  <h4 className="text-secondary font-poppins text-2xl font-semibold">
                    - OR -
                  </h4>
                </div>
                <div className="pt-5">
                  <form className="space-y-10">
                    <div className="flex flex-wrap justify-center gap-5">
                      <input
                        type="email"
                        placeholder="Email Address"
                        className="outline-none border-b border-border text-base 2xl:mx-7"
                        autoFocus
                      />
                      <input
                        type="password"
                        placeholder="Password"
                        className="outline-none border-b border-border text-base 2xl:mx-7"
                      />
                    </div>
                    <div className="flex flex-col items-center text-center">
                      <button className="border-none font-poppins font-normal rounded-lg bg-black text-white text-lg tracking-wider px-14 py-2">
                        Log In
                      </button>
                      <Link to="/signup">
                        <button className="font-poppins border border-black rounded-lg bg-transparent text-black text-lg tracking-wide font-normal px-6 py-2 my-2">
                          Register Now
                        </button>
                      </Link>
                    </div>
                    <p className="text-end font-semibold text-black font-poppins text-base pt-2 px-5">
                      <Link to="/forgetpassword">Forgot Password?</Link>
                    </p>
                    <div className="text-start">
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

export default Login
