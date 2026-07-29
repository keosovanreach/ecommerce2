import React from "react";
import { DiScriptcs } from "react-icons/di";
import { Link } from "react-router-dom";

function FeaturedPd({ setCart }) {
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
      price: 1,
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
      price: 1,
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
      price: 1,
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
      price: 1,
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

  return (
    <div className="bg-white w-full py-10">
      {/* Title */}
      <div className="text-center mb-8 px-2 sm:px-4">
        <h1 className="text-xl sm:text-2xl md:text-4xl font-bold">
          Featured Products
        </h1>
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
            <Link to="/detail" state={{ product }}>
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-40 object-cover hover:scale-105 transition-transform duration-300 cursor-pointer"
              />
            </Link>

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
      <Link to="/products">
        <div className="col-span-2 text-center mt-6 bg-blue-800 py-2 rounded w-[200px] mx-auto hover:bg-blue-900 transition cursor-pointer active:bg-blue-900 active:text-white">
          <p className="text-white text-sm md:text-base">View all products</p>
        </div>
      </Link>
    </div>
  );
}

export default FeaturedPd;
