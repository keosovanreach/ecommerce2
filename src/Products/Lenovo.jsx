import React from "react";
import { Link } from "react-router-dom";
function Lenovo({ setCart }) {
  const products = [
    {
      id: 1,
      name: "Lenovo",
      title: "Lenovo X1 Carbon",
      cpu: "CPU",
      cpuname: "Intel Evo core i7",
      ram: "RAM",
      ramname: "16GB",
      gpu: "Size",
      gpuname: "14 inch",
      storage: "Storage",
      storagename: "512GB",
      rate: 4,
      price: 1,
      image:
        "https://i.pinimg.com/1200x/32/63/69/3263697a2aa103047f2fd94a4d57a8f6.jpg",
      description:
        "The image shows a sleek, modern laptop placed on a wooden desk. The laptop has a thin, minimalist design with a large trackpad and black keyboard. Its screen is on, displaying a lock screen with a forest wallpaper featuring tall trees and sunlight shining through.",
    },
    {
      id: 2,
      name: "Lenovo",
      title: "Lenovo X1 Carbon",
      cpu: "CPU",
      cpuname: "Intel Evo core i7",
      ram: "RAM",
      ramname: "16GB",
      gpu: "Size",
      gpuname: "14 inch",
      storage: "Storage",
      storagename: "512GB",
      rate: 4,
      price: 1,
      image:
        "https://i.pinimg.com/1200x/00/96/94/0096945850ad0399a44bc244b04cc86c.jpg",
    },
    {
      id: 3,
      name: "Lenovo",
      title: "Lenovo",
      cpu: "CPU",
      cpuname: "Intel Evo core i7",
      ram: "RAM",
      ramname: "16GB",
      gpu: "Size",
      gpuname: "14 inch",
      storage: "Storage",
      storagename: "512GB",
      rate: 4,
      price: 1,
      image:
        "https://i.pinimg.com/1200x/3f/dd/57/3fdd57237bbeca8c9a4890091a3bd545.jpg",
      description:
        "The HP Pavilion is a stylish, mid-range laptop designed for everyday use with a balance of performance and affordability.",
    },
    {
      id: 4,
      name: "Lenovo",
      title: "Lenovo",
      cpu: "CPU",
      cpuname: "Intel Evo core i7",
      ram: "RAM",
      ramname: "16GB",
      gpu: "Size",
      gpuname: "14 inch",
      storage: "Storage",
      storagename: "512GB",
      rate: 4,
      price: 1,
      image:
        "https://i.pinimg.com/736x/17/03/70/17037053c50c4577b5ebca492831dd1c.jpg",
      description:
        "This is a powerful gaming laptop setup, designed for gaming, high performance, and visual appeal rather than simple everyday use.",
    },
    {
      id: 5,
      name: "Lenovo",
      title: "Lenovo X1 Carbon",
      cpu: "CPU",
      cpuname: "Intel Evo core i7",
      ram: "RAM",
      ramname: "16GB",
      gpu: "Size",
      gpuname: "14 inch",
      storage: "Storage",
      storagename: "512GB",
      rate: 4,
      price: 1,
      image:
        "https://i.pinimg.com/1200x/32/63/69/3263697a2aa103047f2fd94a4d57a8f6.jpg",
      description:
        "The image shows a sleek, modern laptop placed on a wooden desk. The laptop has a thin, minimalist design with a large trackpad and black keyboard. Its screen is on, displaying a lock screen with a forest wallpaper featuring tall trees and sunlight shining through.",
    },
    {
      id: 6,
      name: "Lenovo",
      title: "Lenovo X1 Carbon",
      cpu: "CPU",
      cpuname: "Intel Evo core i7",
      ram: "RAM",
      ramname: "16GB",
      gpu: "Size",
      gpuname: "14 inch",
      storage: "Storage",
      storagename: "512GB",
      rate: 4,
      price: 1,
      image:
        "https://i.pinimg.com/1200x/00/96/94/0096945850ad0399a44bc244b04cc86c.jpg",
    },
    {
      id: 7,
      name: "Lenovo",
      title: "Lenovo",
      cpu: "CPU",
      cpuname: "Intel Evo core i7",
      ram: "RAM",
      ramname: "16GB",
      gpu: "Size",
      gpuname: "14 inch",
      storage: "Storage",
      storagename: "512GB",
      rate: 4,
      price: 1,
      image:
        "https://i.pinimg.com/1200x/3f/dd/57/3fdd57237bbeca8c9a4890091a3bd545.jpg",
      description:
        "The HP Pavilion is a stylish, mid-range laptop designed for everyday use with a balance of performance and affordability.",
    },
    {
      id: 8,
      name: "Lenovo",
      title: "Lenovo",
      cpu: "CPU",
      cpuname: "Intel Evo core i7",
      ram: "RAM",
      ramname: "16GB",
      gpu: "Size",
      gpuname: "14 inch",
      storage: "Storage",
      storagename: "512GB",
      rate: 4,
      price: 1,
      image:
        "https://i.pinimg.com/736x/17/03/70/17037053c50c4577b5ebca492831dd1c.jpg",
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
        <h1 className="text-xl sm:text-2xl md:text-4xl font-bold">Lenovo</h1>
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

export default Lenovo;
