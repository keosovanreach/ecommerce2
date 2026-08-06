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
      price: 1,
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
      price: 1,
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
      price: 1,
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
      price: 1,
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
      price: 1,
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
      price: 1,
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
      price: 1,
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
      price: 1,
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
      price: 1,
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
      price: 1,
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
    <div className="bg-white w-full py-10 mt-10">
      {/* Title */}
      <div className="text-center mb-8 px-2 sm:px-4">
        <h1 className="text-xl sm:text-2xl md:text-4xl font-bold">MSI</h1>
        <p className="text-gray-500 text-xs sm:text-sm md:text-base">
          Our top picks for this month
        </p>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-6 px-2 sm:px-4 md:px-12">
        {products.map((product) => (
          <div
            key={product.id}
            className="relative rounded-xl shadow-xl overflow-hidden h-[350px]"
          >
            {/* Heart Icon */}
            <span className="absolute top-3 right-3 bg-blue-500 text-white text-xs px-3 py-1 rounded-full z-10">
              <i className="fa-solid fa-heart"></i>
            </span>

            {/* Image */}
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-40 object-cover hover:scale-105 transition-transform duration-300 cursor-pointer"
            />

            {/* Content */}
            <div className="absolute bottom-0 w-full p-2 space-y-2 bg-white">
              <p className="text-blue-500 text-[10px] sm:text-sm">
                {product.name}
              </p>

              <h2 className="text-black text-sm sm:text-base font-bold">
                {product.title}
              </h2>

              {/* Stars */}
              <div className="text-yellow-400 text-xs">
                {"★".repeat(product.rate)}
              </div>

              <div className="space-y-2">
                <div className="space-y-1 grid grid-cols-2 gap-1">
                  <p className="text-gray-600 text-xs">
                    {product.cpu}: {product.cpuname}
                  </p>
                  <p className="text-gray-600 text-xs">
                    {product.ram}: {product.ramname}
                  </p>
                  <p className="text-gray-600 text-xs">
                    {product.gpu}: {product.gpuname}
                  </p>
                  <p className="text-gray-600 text-xs">
                    {product.storage}: {product.storagename}
                  </p>
                </div>

                <div className="grid grid-cols-2">
                  <p className="text-black font-bold text-sm md:text-lg">
                    ${product.price}
                  </p>

                  <div className="flex justify-end">
                    <button
                      onClick={() => handleAddToCart(product)}
                      className="mt-2 bg-blue-500 text-white text-xs px-1 py-1 rounded hover:bg-red-600 active:bg-red-700 transition w-[50px] cursor-pointer"
                    >
                      <i className="fa-solid fa-cart-shopping"></i>{" "}
                      <i className="fa-solid fa-plus"></i>
                    </button>

                    <Link to="/detail" state={{ product }}>
                      <button className="ml-2 mt-2 bg-gray-200 text-gray-600 text-xs px-1 py-1 rounded hover:bg-gray-300 w-[30px] cursor-pointer transition">
                        <i className="fa-solid fa-eye"></i>
                      </button>
                    </Link>
                  </div>
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
