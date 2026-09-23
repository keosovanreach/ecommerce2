import React from "react";
import { DiScriptcs } from "react-icons/di";
import { Link } from "react-router-dom";

function FeaturedPd({ setCart, wishlist, setWishlist }) {
  const products = [
    {
      id: 1,
      name: "Apple",
      title: "MacBook Pro 14(M4)",
      cpu: "Year",
      cpuname: "2022",
      ram: "RAM",
      ramname: "16GB",
      gpu: "Screan Size",
      gpuname: "14 inch",
      storage: "Storage",
      storagename: "512GB",
      rate: 4,
      price: 1499,
      image:
        "https://i.pinimg.com/1200x/b7/4f/a4/b74fa4bf86acd729116eaaa784d88f13.jpg",
      description:
        "The image shows a sleek, modern laptop placed on a wooden desk. The laptop has a thin, minimalist design with a large trackpad and black keyboard. Its screen is on, displaying a lock screen with a forest wallpaper featuring tall trees and sunlight shining through.",
    },

    {
      id: 2,
      name: "Dell",
      title: "Dell XPS",
      cpu: "CPU",
      cpuname: "Intel i5",
      ram: "RAM",
      ramname: "8GB",
      gpu: "GPU",
      gpuname: "RTX 3050",
      storage: "Storage",
      storagename: "256GB",
      rate: 5,
      price: 899,
      image:
        "https://i.pinimg.com/1200x/93/71/73/93717343ede05c65fafb6509eba04211.jpg",
    },

    {
      id: 3,
      name: "HP",
      title: "HP Pavilion",
      cpu: "CPU",
      cpuname: "Ryzen 5",
      ram: "RAM",
      ramname: "8GB",
      gpu: "GPU",
      gpuname: "Ryzen 5",
      storage: "Storage",
      storagename: "256GB",
      rate: 3,
      price: 699,
      image:
        "https://i.pinimg.com/1200x/98/ae/17/98ae17521e62a7141275957f0b0bb378.jpg",
      description:
        "The HP Pavilion is a stylish, mid-range laptop designed for everyday use with a balance of performance and affordability.",
    },

    {
      id: 4,
      name: "Asus",
      title: "Asus ROG",
      cpu: "CPU",
      cpuname: "Ryzen 7",
      ram: "RAM",
      ramname: "8GB",
      gpu: "GPU",
      gpuname: "Ryzen 7",
      storage: "Storage",
      storagename: "256GB",
      rate: 4,
      price: 1299,
      image:
        "https://i.pinimg.com/1200x/3a/b6/60/3ab660ab8133e49eb75950df727aa9e3.jpg",
      description:
        "This is a powerful gaming laptop setup, designed for gaming, high performance, and visual appeal rather than simple everyday use.",
    },
  ];

  const handleAddToCart = (product) => {
    setCart((prevCart) => {
      const exist = prevCart.find((item) => item.id === product.id);
      if (exist) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item,
        );
      } else {
        return [...prevCart, { ...product, qty: 1 }];
      }
    });
  };

  const toggleWishlist = (product) => {
    setWishlist((prevWishlist) => {
      const exists = prevWishlist.some((item) => item.id === product.id);
      if (exists) {
        return prevWishlist.filter((item) => item.id !== product.id);
      }
      return [...prevWishlist, product];
    });
  };

  return (
    <div className="bg-gray-50 w-full py-12 ">
      {/* Title */}
      <div className="text-center mb-10 px-4">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900">
          Featured Products
        </h1>

        <div className="w-16 h-1 bg-blue-500 mx-auto mt-3 rounded-full"></div>

        <p className="text-gray-500 text-sm sm:text-base mt-3">
          Our top picks for this month
        </p>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6 px-3 sm:px-5 md:px-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="group relative rounded-2xl bg-white shadow-sm hover:shadow-xl border border-gray-100 overflow-hidden transition-all duration-300 hover:-translate-y-1 min-h-[390px]"
          >
            {/* Heart */}
            <button
              onClick={() => toggleWishlist(product)}
              className={`absolute top-3 right-3 z-10 rounded-full px-3 py-1 text-xs transition ${
                wishlist.some((item) => item.id === product.id)
                  ? "bg-red-500 text-white"
                  : "bg-blue-500 text-white"
              }`}
            >
              <i className="fa-solid fa-heart"></i>
            </button>

            {/* Image */}
            <div className="h-44 sm:h-48 bg-gray-50 flex items-center justify-center overflow-hidden">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-full object-contain p-3
                           group-hover:scale-110
                           transition-transform duration-500 cursor-pointer"
              />
            </div>

            {/* Content */}
            <div className="p-3 sm:p-4">
              {/* Brand */}
              <p className="text-blue-500 text-[11px] sm:text-xs font-semibold uppercase tracking-wide">
                {product.name}
              </p>

              {/* Product name */}
              <h2 className="text-gray-900 text-sm sm:text-base font-bold mt-1 line-clamp-1">
                {product.title}
              </h2>

              {/* Rating */}
              <div className="flex items-center gap-2 mt-2">
                <div className="text-yellow-400 text-xs sm:text-sm">
                  {"★".repeat(product.rate)}
                  {"☆".repeat(5 - product.rate)}
                </div>

                <span className="text-gray-400 text-[10px] sm:text-xs">
                  ({product.rate}.0)
                </span>
              </div>

              {/* Specifications */}
              <div className="grid grid-cols-2 gap-x-2 gap-y-2 mt-3">
                <div className="bg-gray-50 rounded-md px-2 py-1.5">
                  <p className="text-gray-400 text-[9px] sm:text-[10px]">
                    {product.cpu}
                  </p>
                  <p className="text-gray-700 text-[10px] sm:text-xs font-medium truncate">
                    {product.cpuname}
                  </p>
                </div>

                <div className="bg-gray-50 rounded-md px-2 py-1.5">
                  <p className="text-gray-400 text-[9px] sm:text-[10px]">
                    {product.ram}
                  </p>
                  <p className="text-gray-700 text-[10px] sm:text-xs font-medium truncate">
                    {product.ramname}
                  </p>
                </div>

                <div className="bg-gray-50 rounded-md px-2 py-1.5">
                  <p className="text-gray-400 text-[9px] sm:text-[10px]">
                    {product.gpu}
                  </p>
                  <p className="text-gray-700 text-[10px] sm:text-xs font-medium truncate">
                    {product.gpuname}
                  </p>
                </div>

                <div className="bg-gray-50 rounded-md px-2 py-1.5">
                  <p className="text-gray-400 text-[9px] sm:text-[10px]">
                    {product.storage}
                  </p>
                  <p className="text-gray-700 text-[10px] sm:text-xs font-medium truncate">
                    {product.storagename}
                  </p>
                </div>
              </div>

              {/* Bottom */}
              <div className="flex items-center justify-between mt-4 pt-3 border-t border-gray-100">
                {/* Price */}
                <div>
                  <p className="text-[10px] text-gray-400">Price</p>
                  <p className="text-gray-900 font-extrabold text-base sm:text-lg">
                    ${product.price}
                  </p>
                </div>

                {/* Buttons */}
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleAddToCart(product)}
                    className="w-9 h-9 sm:w-10 sm:h-10
                               bg-blue-500 text-white rounded-lg
                               flex items-center justify-center
                               hover:bg-blue-600
                               active:scale-95
                               transition-all duration-200
                               cursor-pointer shadow-sm"
                  >
                    <i className="fa-solid fa-cart-shopping text-xs"></i>
                    <i className="fa-solid fa-plus text-[8px] ml-0.5"></i>
                  </button>

                  <Link to="/detail" state={{ product }}>
                    <button
                      className="w-9 h-9 sm:w-10 sm:h-10
                                 bg-gray-100 text-gray-600 rounded-lg
                                 flex items-center justify-center
                                 hover:bg-gray-200 hover:text-gray-900
                                 transition-all duration-200
                                 cursor-pointer"
                    >
                      <i className="fa-solid fa-eye text-xs"></i>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FeaturedPd;
