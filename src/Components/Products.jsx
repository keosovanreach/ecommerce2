import React from "react";
import { Link } from "react-router-dom";
function Products({ setCart, wishlist, setWishlist }) {
  const products = [
    {
      id: 1,
      name: "Apple",
      title: "MacBook Pro 14(M4)",
      cpu: "Year",
      cpuname: "2022",
      ram: "RAM",
      ramname: "16GB",
      gpu: "Size",
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
      name: "Apple",
      title: "MacBook Air",
      cpu: "Year",
      cpuname: "2020",
      ram: "RAM",
      ramname: "16GB",
      gpu: "Size",
      gpuname: "14 inch",
      storage: "Storage",
      storagename: "512GB",
      rate: 4,
      price: 999,
      image:
        "https://i.pinimg.com/1200x/d3/18/c5/d318c5256fd2be888d1542a0fd3cec54.jpg",
    },
    {
      id: 3,
      name: "Apple",
      title: "MacBook Air ",
      cpu: "Year",
      cpuname: "2025",
      ram: "RAM",
      ramname: "16GB",
      gpu: "Size",
      gpuname: "13 inch",
      storage: "Storage",
      storagename: "256GB SSD",
      rate: 4,
      price: 1099,
      image:
        "https://i.pinimg.com/1200x/de/92/a6/de92a62680a311091ac710425e7298db.jpg",
      description:
        "The HP Pavilion is a stylish, mid-range laptop designed for everyday use with a balance of performance and affordability.",
    },
    {
      id: 4,
      name: "Apple",
      title: "MacBook Pro (M5)",
      cpu: "Year",
      cpuname: "2025  ",
      ram: "RAM",
      ramname: "16GB",
      gpu: "Size",
      gpuname: "13 inch",
      storage: "Storage",
      storagename: "256GB ",
      rate: 4,
      price: 1599,
      image:
        "https://i.pinimg.com/736x/49/09/81/490981e3c25982541fd5555b170a3bb2.jpg",
      description:
        "This is a powerful gaming laptop setup, designed for gaming, high performance, and visual appeal rather than simple everyday use.",
    },
    {
      id: 5,
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
        "https://i.pinimg.com/1200x/7e/0e/f6/7e0ef69677c7ccd728e358652eb607de.jpg",
      description:
        "The image shows a sleek, modern laptop placed on a wooden desk. The laptop has a thin, minimalist design with a large trackpad and black keyboard. Its screen is on, displaying a lock screen with a forest wallpaper featuring tall trees and sunlight shining through.",
    },
    {
      id: 6,
      name: "Dell",
      title: "Dell 16DC",
      cpu: "CPU",
      cpuname: "Intel Core i5",
      ram: "RAM",
      ramname: "8GB",
      gpu: "GPU",
      gpuname: "RTX 2050",
      storage: "SSD",
      storagename: "256GB",
      rate: 5,
      price: 799,
      image:
        "https://i.pinimg.com/1200x/67/30/6d/67306db71abf96716f09ffdabc6b8380.jpg",
    },
    {
      id: 7,
      name: "Dell",
      title: "Dell Latitude",
      cpu: "CPU",
      cpuname: "Intel Core i5",
      ram: "RAM",
      ramname: "8GB",
      gpu: "GPU",
      gpuname: "RTX 2050",
      storage: "SSD",
      storagename: "256GB",
      rate: 5,
      price: 749,
      image:
        "https://i.pinimg.com/1200x/a0/03/87/a003873caa5f766a850490dcd55ec9a7.jpg",
      description:
        "The HP Pavilion is a stylish, mid-range laptop designed for everyday use with a balance of performance and affordability.",
    },
    {
      id: 8,
      name: "Dell",
      title: "Dell Latitude",
      cpu: "CPU",
      cpuname: "Intel Core i5",
      ram: "RAM",
      ramname: "8GB",
      gpu: "GPU",
      gpuname: "RTX 2050",
      storage: "SSD",
      storagename: "256GB",
      rate: 5,
      price: 799,
      image:
        "https://i.pinimg.com/1200x/28/b0/03/28b003c4d96ba493b26a67dde5d6f708.jpg",
      description:
        "This is a powerful gaming laptop setup, designed for gaming, high performance, and visual appeal rather than simple everyday use.",
    },
    {
      id: 9,
      name: "HP",
      title: "HP Elitebook",
      cpu: "CPU",
      cpuname: "Core i5",
      ram: "RAM",
      ramname: "16GB",
      gpu: "GPU",
      gpuname: "Ryzen 5",
      storage: "Storage",
      storagename: "256GB",
      rate: 3,
      price: 899,
      image:
        "https://i.pinimg.com/1200x/25/0f/27/250f2787865bb62c05284f4c7435742a.jpg",
      description:
        "The image shows a sleek, modern laptop placed on a wooden desk. The laptop has a thin, minimalist design with a large trackpad and black keyboard. Its screen is on, displaying a lock screen with a forest wallpaper featuring tall trees and sunlight shining through.",
    },
    {
      id: 10,
      name: "HP",
      title: "HP Pavilion 14",
      cpu: "CPU",
      cpuname: "Core i5-12th Gen",
      ram: "RAM",
      ramname: "8GB",
      gpu: "Screan Size",
      gpuname: "14-inch FHD Display",
      storage: "SSD",
      storagename: "512GB",
      rate: 3,
      price: 699,
      image:
        "https://i.pinimg.com/1200x/7c/39/94/7c39947c1f72ce00c704526f50e6a30e.jpg",
    },
    {
      id: 11,
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
      price: 599,
      image:
        "https://i.pinimg.com/1200x/98/ae/17/98ae17521e62a7141275957f0b0bb378.jpg",
      description:
        "The HP Pavilion is a stylish, mid-range laptop designed for everyday use with a balance of performance and affordability.",
    },
    {
      id: 12,
      name: "HP",
      title: "HP 830 G6 i5.",
      cpu: "CPU",
      cpuname: " Intel Core i5 8th ",
      ram: "RAM",
      ramname: "8GB",
      gpu: "Screan Size",
      gpuname: "13 inches touch screen.",
      storage: "SSD",
      storagename: "256GB",
      rate: 3,
      price: 499,
      image:
        "https://i.pinimg.com/1200x/7c/a3/34/7ca3342c39c5ac8d84f3a5e308225c53.jpg",
      description:
        "This is a powerful gaming laptop setup, designed for gaming, high performance, and visual appeal rather than simple everyday use.",
    },
    {
      id: 13,
      name: "Asus",
      title: "Asus TUF GAMING A15",
      cpu: "CPU",
      cpuname: " Intel Core i7",
      ram: "RAM",
      ramname: "16GB",
      gpu: "GPU",
      gpuname: "RTX 4060",
      storage: "Storage",
      storagename: "1TB NvMe SSD",
      rate: 4,
      price: 1199,
      image:
        "https://i.pinimg.com/1200x/45/55/c0/4555c04663e7db57054960c82cd126c3.jpg",
      description:
        "The image shows a sleek, modern laptop placed on a wooden desk. The laptop has a thin, minimalist design with a large trackpad and black keyboard. Its screen is on, displaying a lock screen with a forest wallpaper featuring tall trees and sunlight shining through.",
    },
    {
      id: 14,
      name: "Asus",
      title: "Asus Rog Zephyrus G14",
      cpu: "CPU",
      cpuname: " Intel Core i7",
      ram: "RAM",
      ramname: "16GB",
      gpu: "GPU",
      gpuname: "RTX 4060",
      storage: "Storage",
      storagename: "1TB NvMe SSD",
      rate: 4,
      price: 1399,
      image:
        "https://i.pinimg.com/1200x/bb/5c/03/bb5c036b84cf44777dc068cc72ade0a3.jpg",
    },
    {
      id: 15,
      name: "Asus",
      title: "Asus Zenbook 14 OLED",
      cpu: "CPU",
      cpuname: "Intel Core Ultra 9",
      ram: "RAM",
      ramname: "32GB",
      gpu: "GPU",
      gpuname: "RTX 4060",
      storage: "SSD",
      storagename: "1TB ",
      rate: 4,
      price: 1499,
      image:
        "https://i.pinimg.com/1200x/af/d7/25/afd72595075cffba014dc637eb00b9fb.jpg",
      description:
        "The HP Pavilion is a stylish, mid-range laptop designed for everyday use with a balance of performance and affordability.",
    },
    {
      id: 16,
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
    {
      id: 17,
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
      id: 18,
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
      id: 19,
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
      price: 2499,
      image:
        "https://i.pinimg.com/1200x/e5/ae/21/e5ae212c7e7f3d6e31ffe41e9dd7b830.jpg",
      description:
        "The HP Pavilion is a stylish, mid-range laptop designed for everyday use with a balance of performance and affordability.",
    },
    {
      id: 20,
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
    {
      id: 24,
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
      price: 999,
      image:
        "https://i.pinimg.com/1200x/32/63/69/3263697a2aa103047f2fd94a4d57a8f6.jpg",
      description:
        "The image shows a sleek, modern laptop placed on a wooden desk. The laptop has a thin, minimalist design with a large trackpad and black keyboard. Its screen is on, displaying a lock screen with a forest wallpaper featuring tall trees and sunlight shining through.",
    },
    {
      id: 21,
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
      price: 1099,
      image:
        "https://i.pinimg.com/1200x/00/96/94/0096945850ad0399a44bc244b04cc86c.jpg",
    },
    {
      id: 22,
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
      price: 899,
      image:
        "https://i.pinimg.com/1200x/3f/dd/57/3fdd57237bbeca8c9a4890091a3bd545.jpg",
      description:
        "The HP Pavilion is a stylish, mid-range laptop designed for everyday use with a balance of performance and affordability.",
    },
    {
      id: 23,
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
      price: 1299,
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
    <div className="bg-gray-50 w-full py-12 mt-10">
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

export default Products;
