import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Footer from '../components/footer'
import Navbar from '../components/header/Navbar'
import Instagram from '../components/instagram'
import ProductList from '../components/product'
import ProductDetail from '../components/product/ProductDetail'
import Home from '../pages/Home'
import Shop from '../pages/shop'
import SignUp from '../pages/SignUp'
import Login from '../pages/Login'
import ForgetPassword from '../pages/ForgetPassword'
import ConfirmPassword from '../pages/ConfirmPassword'
import NewPassword from '../pages/NewPassword'
import Profile from '../pages/profile'
import Cart from '../components/cart'
import Checkout from '../components/checkout'
import Wishlist from '../components/wishlist'
import NotFound from '../components/404/NotFound'
import OrderDetail from '../components/orderdetail'
import ThankYou from '../components/thankyou'
import AboutUs from '../components/about'
import TermsAndConditions from '../components/terms'
import PrivacyPolicy from '../components/privacypolicy'
import ContactUs from '../components/contactus'


const PageRoutes = () => {
  const Layout = ({ children, isHome }) => {
    return (
      <>
        <div className="mx-7 md:mx-12 lg:mx-24 2xl:mx-36">
          <Navbar />
          {children}
        </div>
        <div>{isHome && <Instagram />}</div>
        <div className="border border-[#eee]"></div>
        <div className="mx-7 md:mx-12 lg:mx-24 2xl:mx-36">
          <Footer />
        </div>
      </>
    )
  }

  return (
    
    <Router >
      <Routes>
        <Route
          path="/"
          element={
            <Layout isHome>
              <Home />
            </Layout>
          }
        />

        <Route path="signup" element={<SignUp />} />

        <Route path="login" element={<Login />} />

        <Route path="forgetpassword" element={<ForgetPassword />} />

        <Route path="confirmpassword" element={<ConfirmPassword />} />

        <Route path="newpassword" element={<NewPassword />} />

        {/* Product Routes */}
        <Route
          path="product/*"
          element={
            <Layout>
              <ProductList />
            </Layout>
          }
        />
        <Route
          path="product/:id"
          element={
            <Layout>
              <ProductDetail />
            </Layout>
          }
        />

        {/* Shop Routes */}
        <Route
          path="shop"
          element={
            <Layout>
              <Shop />
            </Layout>
          }
        />

        {/* Profile Routes */}
        <Route
          path="profile"
          element={
            <Layout>
              <Profile />
            </Layout>
          }
        />

        {/* Cart Routes */}
        <Route
          path="cart"
          element={
            <Layout>
              <Cart />
            </Layout>
          }
        />

        {/* Checkout Routes */}
        <Route
          path="checkout"
          element={
            <Layout>
              <Checkout />
            </Layout>
          }
        />

        {/* Wishlist Routes */}
        <Route
          path="wishlist"
          element={
            <Layout>
              <Wishlist />
            </Layout>
          }
        />

        {/* Order Detail Routes */}
        <Route
          path="/orderdetail"
          element={
            <Layout>
              <OrderDetail />
            </Layout>
          }
        />

        {/* 404 Routes */}
        <Route
          path="*"
          element={
            <Layout>
              <NotFound />
            </Layout>
          }
        />

        {/* Thankyou Routes */}
        <Route
          path="/thankyou"
          element={
            <Layout>
              <ThankYou />
            </Layout>
          }
        />

        {/* About Us Routes */}
        <Route
          path="/aboutus"
          element={
            <Layout>
              <AboutUs />
            </Layout>
          }
        />

        {/* Terms and conditions Routes */}
        <Route
          path="/termsandconditions"
          element={
            <Layout>
              <TermsAndConditions />
            </Layout>
          }
        />

        {/* Privacy policy Routes */}
        <Route
          path="/privacypolicy"
          element={
            <Layout>
              <PrivacyPolicy />
            </Layout>
          }
        />

        {/* Contact us Routes */}
        <Route
          path="/contactus"
          element={
            <Layout>
              <ContactUs />
            </Layout>
          }
        />
      </Routes>
    </Router>
  )
}

export default PageRoutes
