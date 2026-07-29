import { useState, useEffect } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar";
import Banner from "./Components/Banner";
import Menu from "./Components/Menu";
import FeaturedCate from "./Components/FeaturedCate";
import FeaturedPd from "./Components/FeaturedPd";
import News from "./Components/News";
import Footer from "./Components/Footer";
import Login from "./Components/Login";
import Detail from "./Components/Detail";
import Signup from "./Components/Signup";
import Checkout from "./Payments/Checkout";
import Products from "./Components/Products";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Wishlist from "./Components/Wishlist";
import Categories from "./Products/Categories";
import Macbook from "./Products/Macbook";
import Asus from "./Products/Asus";
import Hp from "./Products/Hp";
import Dell from "./Products/Dell";
import Msi from "./Products/Msi";
import Lenovo from "./Products/Lenovo";
import Pc from "./Products/Pcc";
import Chair from "./Products/Chair";
import Headest from "./Products/Headest";
import Payment from "./Payments/Payment";

import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  const [cartCount, setCartCount] = useState(0);
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("wishlist") || "[]");
    } catch {
      return [];
    }
  });

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  // Automatically update cart count whenever cart changes
  useEffect(() => {
    const totalQty = cart.reduce((total, item) => total + item.qty, 0);
    setCartCount(totalQty);
  }, [cart]);

  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar cartCount={cartCount} wishlistCount={wishlist.length} />
              <Banner />
              <Menu />
              <FeaturedCate />
              <FeaturedPd
                cart={cart}
                setCart={setCart}
                setCartCount={setCartCount}
                wishlist={wishlist}
                setWishlist={setWishlist}
              />
              <News />
              <Footer />
            </>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        <Route
          path="/detail"
          element={
            <>
              <Navbar cartCount={cartCount} wishlistCount={wishlist.length} />
              <Detail
                cart={cart}
                setCart={setCart}
                setCartCount={setCartCount}
                wishlist={wishlist}
                setWishlist={setWishlist}
              />
            </>
          }
        />
        <Route
          path="/checkout"
          element={
            <>
              <Navbar cartCount={cartCount} wishlistCount={wishlist.length} />
              <Checkout cart={cart} setCart={setCart} />
              <Footer />
            </>
          }
        />
        <Route
          path="/products"
          element={
            <>
              <Navbar cartCount={cartCount} wishlistCount={wishlist.length} />
              <Products
                cart={cart}
                setCart={setCart}
                setCartCount={setCartCount}
                wishlist={wishlist}
                setWishlist={setWishlist}
              />
              <Footer />
            </>
          }
        />
        <Route
          path="/about"
          element={
            <>
              <Navbar cartCount={cartCount} wishlistCount={wishlist.length} />
              <About />
            </>
          }
        />
        <Route
          path="/contact"
          element={
            <>
              <Navbar cartCount={cartCount} wishlistCount={wishlist.length} />
              <Contact />
              <Footer />
            </>
          }
        />
        <Route
          path="/categories"
          element={
            <>
              <Navbar cartCount={cartCount} wishlistCount={wishlist.length} />
              <Categories />
              <Footer />
            </>
          }
        />
        <Route
          path="/macbook"
          element={
            <>
              <Navbar cartCount={cartCount} wishlistCount={wishlist.length} />
              <Macbook
                cart={cart}
                setCart={setCart}
                setCartCount={setCartCount}
              />
              <Footer />
            </>
          }
        />
        <Route
          path="/Asus"
          element={
            <>
              <Navbar cartCount={cartCount} wishlistCount={wishlist.length} />
              <Asus cart={cart} setCart={setCart} setCartCount={setCartCount} />
              <Footer />
            </>
          }
        />
        <Route
          path="/Hp"
          element={
            <>
              <Navbar cartCount={cartCount} wishlistCount={wishlist.length} />
              <Hp cart={cart} setCart={setCart} setCartCount={setCartCount} />
              <Footer />
            </>
          }
        />
        <Route
          path="/Dell"
          element={
            <>
              <Navbar cartCount={cartCount} wishlistCount={wishlist.length} />
              <Dell cart={cart} setCart={setCart} setCartCount={setCartCount} />
              <Footer />
            </>
          }
        />
        <Route
          path="/Msi"
          element={
            <>
              <Navbar cartCount={cartCount} wishlistCount={wishlist.length} />
              <Msi cart={cart} setCart={setCart} setCartCount={setCartCount} />
              <Footer />
            </>
          }
        />
        <Route
          path="/Lenovo"
          element={
            <>
              <Navbar cartCount={cartCount} wishlistCount={wishlist.length} />
              <Lenovo
                cart={cart}
                setCart={setCart}
                setCartCount={setCartCount}
              />
              <Footer />
            </>
          }
        />
        <Route
          path="/pc"
          element={
            <>
              <Navbar cartCount={cartCount} wishlistCount={wishlist.length} />
              <Pc cart={cart} setCart={setCart} setCartCount={setCartCount} />
              <Footer />
            </>
          }
        />
        <Route
          path="/chair"
          element={
            <>
              <Navbar cartCount={cartCount} wishlistCount={wishlist.length} />
              <Chair
                cart={cart}
                setCart={setCart}
                setCartCount={setCartCount}
              />
              <Footer />
            </>
          }
        />
        <Route
          path="/Headest"
          element={
            <>
              <Navbar cartCount={cartCount} wishlistCount={wishlist.length} />
              <Headest
                cart={cart}
                setCart={setCart}
                setCartCount={setCartCount}
              />
              <Footer />
            </>
          }
        />
        <Route
          path="/Payments"
          element={
            <>
              <Navbar cartCount={cartCount} wishlistCount={wishlist.length} />
              <Payment />
              <Footer />
            </>
          }
        />
        <Route
          path="/wishlist"
          element={
            <>
              <Navbar cartCount={cartCount} wishlistCount={wishlist.length} />
              <Wishlist
                wishlist={wishlist}
                setWishlist={setWishlist}
                setCart={setCart}
              />
              <Footer />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
