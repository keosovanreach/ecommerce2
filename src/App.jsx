import { useState, useEffect } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar";
import Banner from "./Components/Banner";

import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";



function App() {
  const [cartCount, setCartCount] = useState(0);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <Router>
      <Navbar cartCount={cartCount}/>
      <Routes>
        <Route path="/" element={<Banner />} />
      
      </Routes>
      
      
      
    </Router>
  );
}

export default App;
