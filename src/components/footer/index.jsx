import { x, instagram, facebook, linkedin } from '../../assets/images/index'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div>
      <div className="py-5">
        <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 grid-flow-row gap-10">
          <div className="space-y-3">
            <h1 className="text-content text-4xl font-medium font-volkhov">
              <Link to="/">Fashionista</Link>
            </h1>
            <p className="text-content font-normal font-poppins text-sm">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto a
              qui sunt inventore, autem quisquam perferendis officiis hic
              consequuntur
            </p>
          </div>
          <div>
            <ul className="font-poppins space-y-2">
              <li className="uppercase text-black text-lg font-semibold py-2">
                company
              </li>
              <li className="capitalize text-content text-base font-medium pt-0">
                <Link to="/aboutus">about</Link>
              </li>
              <li className="capitalize text-content text-base font-medium">
                <Link to="/aboutus">careers</Link>
              </li>
              <li className="capitalize text-content text-base font-medium">
                <Link to="/aboutus">brand center</Link>
              </li>
              <li className="capitalize text-content text-base font-medium">
                <Link to="/aboutus">blog</Link>
              </li>
            </ul>
          </div>
          <div>
            <ul className="font-poppins space-y-2">
              <li className="uppercase text-black text-lg font-semibold py-2">
                shop by
              </li>
              <li className="capitalize text-content text-base font-medium pt-0">
                <Link to="/shop">women</Link>
              </li>
              <li className="capitalize text-content text-base font-medium">
                <Link to="/shop">men</Link>
              </li>
              <li className="capitalize flex items-center gap-1 text-content text-base font-medium">
                <Link to="/shop">new arrivals</Link>
                <span className="bg-blue-100 font-poppins text-content text-xs font-medium px-2.5 py-0.5 rounded ml-2">
                  New
                </span>
              </li>
              <li className="capitalize text-content text-base font-medium">
                <Link to="/shop">western wear</Link>
              </li>
            </ul>
          </div>
          <div>
            <ul className="font-poppins space-y-2">
              <li className="uppercase text-black text-lg font-semibold py-2">
                legal
              </li>
              <li className="capitalize text-content text-base font-medium pt-0">
                <Link to="/privacypolicy">privacy policy</Link>
              </li>
              <li className="capitalize text-content text-base font-medium">
                <Link to="/termsandconditions">terms & conditions</Link>
              </li>
              <li className="capitalize text-content text-base font-medium">
                <Link to="/contactus">contact us</Link>
              </li>
            </ul>
          </div>
          <div>
            <ul className="font-poppins">
              <li className="capitalize text-black text-lg font-semibold py-2">
                reach out to us
              </li>
              <div className="flex gap-3 items-center py-0 pt-3">
                <li>
                  <Link target="_blank" to="https://twitter.com/">
                    <img
                      src={x}
                      alt="Twitter X"
                      className="h-5 w-5 cursor-pointer"
                    />
                  </Link>
                </li>
                <li>
                  <Link target="_blank" to="https://www.instagram.com/">
                    <img
                      src={instagram}
                      alt="Instagram"
                      className="h-6 w-6 cursor-pointer"
                    />
                  </Link>
                </li>
                <li>
                  <Link target="_blank" to="https://www.facebook.com/">
                    <img
                      src={facebook}
                      alt="Facebook"
                      className="h-8 w-8 cursor-pointer"
                    />
                  </Link>
                </li>
                <li>
                  <Link target="_blank" to="https://www.linkedin.com/">
                    <img
                      src={linkedin}
                      alt="LinkedIn"
                      className="h-7 w-7 cursor-pointer"
                    />
                  </Link>
                </li>
              </div>
            </ul>
          </div>
        </div>
        <p className="text-xs text-gray pt-5 text-center">
          Copyright © 2024 Fashionista. All Rights Reserved.
        </p>
      </div>
    </div>
  )
}

export default Footer
