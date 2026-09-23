import React from "react";
import { Link } from "react-router-dom";
function Msi({ setCart }) {
  const products = [
    {
      id: 1,
      name: "MSI",
      title: "MSI Cyborg 15 A13UC ",
      cpu: "CPU",
      cpuname: "Core™ i5-13420H",
      ram: "RAM",
      ramname: "8GB DDR5",
      gpu: "Size",
      gpuname: "15.6 FHD 144Hz",
      storage: "Storage",
      storagename: "512GB",
      rate: 4,
      price: 899,
      image:
        "https://i.pinimg.com/736x/76/cc/c6/76ccc6aea93d8e4ddd7ee24d178f5df3.jpg",
      description:
        "The MSI Cyborg 15 A13UC is a powerful gaming laptop designed for immersive gameplay and high-performance tasks.",
    },
    {
      id: 2,
      name: "MSI",
      title: "MSI Stealth",
      cpu: "CPU",
      cpuname: "Core™ Ultra 9",
      ram: "RAM",
      ramname: "DDR5 16GB",
      gpu: "Size",
      gpuname: "18 inch",
      storage: "Storage",
      storagename: "1TB SSD",
      rate: 4,
      price: 1799,
      image:
        "https://res.cloudinary.com/dzuu0ngc8/image/upload/v1783420061/products/j2geii2ve5dll2qlwdp2.jpg",
      description:
        "The MSI Stealth is a sleek and powerful gaming laptop designed for gamers who want high performance in a portable form factor.",
    },
    {
      id: 3,
      name: "MSI",
      title: "MSI Crosshair 16 HX E14W ",
      cpu: "CPU",
      cpuname: "Intel Core i7",
      ram: "RAM",
      ramname: "16GB",
      gpu: "Size",
      gpuname: "16 inch",
      storage: "Storage",
      storagename: "1TB SSD",
      rate: 4,
      price: 1599,
      image:
        "https://res.cloudinary.com/dzuu0ngc8/image/upload/v1783418907/products/r5gubl71q4rsg8s8ezii.jpg",
      description:
        "The MSI Crosshair 16 HX E14W is a high-performance gaming laptop designed for immersive gameplay and demanding tasks.",
    },
    {
      id: 4,
      name: "MSI",
      title: "MSI Cyborg 15 Max C2W",
      cpu: "CPU",
      cpuname: "Intel® Core™ 7",
      ram: "RAM",
      ramname: "16GB",
      gpu: "Size",
      gpuname: "15.6 inch",
      storage: "Storage",
      storagename: "2TB SSD",
      rate: 4,
      price: 1299,
      image:
        "https://res.cloudinary.com/dzuu0ngc8/image/upload/v1782283939/products/eivnopgz4cza8labgjo6.jpg",
      description:
        "The MSI Cyborg 15 Max C2W is a high-performance gaming laptop designed for immersive gameplay and demanding tasks.",
    },
    {
      id: 5,
      name: "MSI",
      title: "MSI Stealth 16 AI+ B3W",
      cpu: "CPU",
      cpuname: " Intel® Core™ Ultra 9",
      ram: "RAM",
      ramname: "DDR5 16GB",
      gpu: "GPU",
      gpuname: "RTX™ 5060 GDDR7 8GB",
      storage: "Storage",
      storagename: "1TB SSD",
      rate: 5,
      price: 1899,
      image:
        "https://res.cloudinary.com/dzuu0ngc8/image/upload/v1782284033/products/gydkgrmgrzbkpejcyvou.png",
      description:
        "The image shows a sleek, modern laptop placed on a wooden desk. The laptop has a thin, minimalist design with a large trackpad and black keyboard. Its screen is on, displaying a lock screen with a forest wallpaper featuring tall trees and sunlight shining through.",
    },
    {
      id: 6,
      name: "MSI",
      title: "MSI Titan 18 HX Dragon",
      cpu: "CPU",
      cpuname: "Intel® Core™ Ultra 9",
      ram: "RAM",
      ramname: "16GB",
      gpu: "GPU",
      gpuname: " RTX™ 5090 GDDR7 24GB",
      storage: "SSD",
      storagename: "256GB",
      rate: 5,
      price: 4999,
      image:
        "https://res.cloudinary.com/dzuu0ngc8/image/upload/v1783420330/products/kb5w6s3sbvvbjippgjsc.jpg",
      description:
        "The MSI Titan 18 HX Dragon is a high-performance gaming laptop designed for immersive gameplay and demanding tasks.",
    },

    {
      id: 7,
      name: "MSI",
      title: "MSI Raider ",
      cpu: "CPU",
      cpuname: "Intel Core i7",
      ram: "RAM",
      ramname: "16GB",
      gpu: "GPU",
      gpuname: "RTX 3050",
      storage: "Storage",
      storagename: "512GB",
      rate: 5,
      price: 1499,
      image:
        "https://i.pinimg.com/1200x/fd/31/55/fd31554337ac4b06a87fa386c57aba4f.jpg",
      description:
        "The image shows a sleek, modern laptop placed on a wooden desk. The laptop has a thin, minimalist design with a large trackpad and black keyboard. Its screen is on, displaying a lock screen with a forest wallpaper featuring tall trees and sunlight shining through.",
    },
    {
      id: 8,
      name: "MSI",
      title: "MSI",
      cpu: "CPU",
      cpuname: "Intel Core i7",
      ram: "RAM",
      ramname: "16GB",
      gpu: "GPU",
      gpuname: "RTX 3050",
      storage: "Storage",
      storagename: "512GB",
      rate: 5,
      price: 1199,
      image:
        "https://i.pinimg.com/1200x/21/ba/40/21ba40a8511a3df2053b544ccea35b00.jpg",
    },
    {
      id: 9,
      name: "MSI",
      title: "MSI Creator 15",
      cpu: "CPU",
      cpuname: "Intel Core i7",
      ram: "RAM",
      ramname: "16GB",
      gpu: "GPU",
      gpuname: "RTX 4080",
      storage: "Storage",
      storagename: "1TB NvMe SSD",
      rate: 5,
      price: 1699,
      image:
        "https://i.pinimg.com/1200x/e5/ae/21/e5ae212c7e7f3d6e31ffe41e9dd7b830.jpg",
      description:
        "The HP Pavilion is a stylish, mid-range laptop designed for everyday use with a balance of performance and affordability.",
    },
    {
      id: 10,
      name: "MSI",
      title: "MSI",
      cpu: "CPU",
      cpuname: "Intel Core i7",
      ram: "RAM",
      ramname: "16GB",
      gpu: "GPU",
      gpuname: "RTX 3050",
      storage: "Storage",
      storagename: "1TB SSD",
      rate: 5,
      price: 1299,
      image:
        "https://i.pinimg.com/1200x/62/06/16/620616077ad7bb3d51b1c9eea7e49384.jpg",
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

  return (
    <div className="bg-gray-50 w-full py-12 mt-10">
      {/* Title */}
      <div className="text-center mb-10 px-4">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900">
          Msi Gaming
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
              className="absolute top-3 right-3 w-9 h-9 bg-white/90 backdrop-blur-sm
                         text-blue-500 rounded-full shadow-md z-10
                         flex items-center justify-center
                         hover:bg-blue-500 hover:text-white transition-all duration-300"
            >
              <i className="fa-solid fa-heart text-sm"></i>
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

export default Msi;
