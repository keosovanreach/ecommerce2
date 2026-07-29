import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const images = [
  "https://i.pinimg.com/1200x/bb/97/be/bb97be9f00af7edcc86bcec219f10d9c.jpg",
  "https://i.pinimg.com/1200x/4e/8a/e1/4e8ae1a800063b96d46f3925f5fe1d33.jpg",
  "https://i.pinimg.com/736x/45/64/2c/45642c928fd7fd4db1999fa6b3fac71b.jpg",
  "https://i.pinimg.com/1200x/90/5e/5c/905e5cb074b13a6f75692239810f142a.jpg",
  "https://i.pinimg.com/1200x/4e/1c/10/4e1c104bdb5a12bc851829f2316ce928.jpg",
  "https://i.pinimg.com/736x/b3/8c/a8/b38ca8b09f171494925310f78608c0aa.jpg",
];
const productImages = [
  "https://i.pinimg.com/736x/05/81/b3/0581b31a4d729106fb90005d79329b69.jpg",
  "https://i.pinimg.com/1200x/c9/85/97/c9859714f6d488ec3b7a3489e9294d99.jpg",
  "https://i.pinimg.com/736x/73/95/63/73956397e3a39e5af522d51d600ebb34.jpg",
  "https://i.pinimg.com/1200x/2d/a3/0e/2da30e1daa7ce54565576b4976e6262d.jpg",
  "https://i.pinimg.com/1200x/09/89/c7/0989c78981693c5e389327f32a53839a.jpg",
  "https://i.pinimg.com/1200x/cb/39/7f/cb397f12e07d7daa43b64baabfb1ae7e.jpg",
];

export default function Banner() {
  const [bgIndex, setBgIndex] = useState(0);
  const [productIndex, setProductIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setProductIndex((prev) => (prev + 1) % productImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-auto md:mt-0 xl:mt-0 mt-2 md:pt-0 xl:pt-0 relative overflow-hidden ">
      <div className="banner relative w-full h-screen xs:h-[600px] min-h-[500px]">
        <img
          src={images[bgIndex]}
          className="w-full h-full object-cover transition-all duration-1000"
          alt="banner background"
        />
        <div className="absolute inset-0 bg-black/60"></div>
        {/* </div> */}

        <div className="absolute inset-0 flex items-center  ">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8  xs:px-4 ">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-center sm:py-16 xs:py-20">
              <div className="text-center lg:text-left px-4 sm:px-0 md:mt-0 mt-4 sm:pt-20 ">
                <div className="inline-block border text-amber-50 border-white px-4 py-1.5 sm:px-5 sm:py-0.5 rounded-full mb-2 sm:mb-2 text-sm sm:text-base xs:px-4 text-xs xs:text-sm  ">
                  Professional Grade
                </div>

                <h1 className="text-2xl sm:text-3xl text-white md:text-4xl lg:text-5xl font-bold mb-2 leading-tight xs:text-2xl ">
                  Premium Laptops & Workstations
                </h1>

                <p className="text-sm sm:text-base md:text-lg text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto lg:mx-0 text-xs xs:text-sm max-w-xs">
                  Powerful laptops for developers, designers, and business
                  professionals. Experience unmatched performance and
                  reliability.
                </p>

                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start mb-4 sm:mb-6">
                  <button
                    className="bg-white text-black px-5 sm:px-6 py-2.5 sm:py-3 rounded-md 
    hover:bg-blue-600 hover:text-white 
    active:bg-blue-700 active:text-white 
    transition-all duration-300 text-sm sm:text-base font-medium"
                  >
                    Explore Laptops
                  </button>
                  <Link to="/products">
                    <button
                      className="border border-white text-amber-50 px-5 sm:px-6 py-2.5 sm:py-3 rounded-md 
    hover:bg-white hover:text-black 
    active:bg-gray-200 active:text-black 
    transition-all duration-300 text-sm sm:text-base font-medium cursor-pointer"
                    >
                      View All Products
                    </button>
                  </Link>
                </div>

                <div className="grid grid-cols-3 gap-3 sm:gap-4 max-w-md mx-auto lg:mx-0 mt-1 mb-2 sm:mb-2 xs:gap-3">
                  {[
                    { value: "50K+", label: "Laptops Sold" },
                    { value: "30+", label: "Top Brands" },
                    { value: "2 Years", label: "Warranty" },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="bg-white/10 p-3 sm:p-4 rounded-xl backdrop-blur-md text-center hover:bg-white/20 transition-all duration-300 xs:p-3 xs:text-xs active:hover:bg-white/20 cursor-pointer"
                    >
                      <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-1 text-amber-50 text-sm xs:text-lg">
                        {item.value}
                      </h2>
                      <p className="text-xs sm:text-sm text-gray-300 xs:text-xs ">
                        {item.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Image Section */}
              <div className="flex justify-center lg:justify-end px-4 sm:px-0">
                <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
                  <img
                    src={productImages[productIndex]}
                    alt="product showcase"
                    className="w-full h-[200] max-h-[150px] sm:max-h-[200px] md:max-h-[200px]
                     lg:max-h-[300px] rounded-xl sm:rounded-2xl shadow-2xl object-cover 
                     transform hover:scale-[1.02] transition-all duration-500 xs:max-w-[180px] 
                     active:hover:scale-[1.02] cursor-pointer"
                  />
                  <div className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 w-16 h-16 sm:w-20 sm:h-20 rounded-full blur-lg"></div>
                  <div className="absolute -bottom-3 -left-3 sm:-bottom-4 sm:-left-4 w-16 h-16 sm:w-20 sm:h-20 bg-purple-500/20 rounded-full blur-lg"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* 
     button slider */}
      <div className="absolute bottom-4 sm:bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              setBgIndex(i);
              setProductIndex(i);
            }}
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all xs:w-2 xs:h-2 ${
              bgIndex === i ? "bg-white w-6 sm:w-8" : "bg-white/50"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
