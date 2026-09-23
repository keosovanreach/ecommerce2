import React from "react";
import { Link } from "react-router-dom";
function Asus({ setCart }) {
  const products = [
    {
      id: 1,
      name: "Asus",
      title: "Asus GL553 (2017)",
      cpu: "CPU",
      cpuname: "core i7",
      ram: "RAM",
      ramname: "16GB",
      gpu: "Size",
      gpuname: "15 inch",
      storage: "Storage",
      storagename: "512GB",
      rate: 4,
      price: 335,
      image:
        "https://i.pinimg.com/736x/e2/e8/26/e2e826e82d3055c95814c57510ad70aa.jpg",
      description:
        "The image shows a sleek, modern laptop placed on a wooden desk. The laptop has a thin, minimalist design with a large trackpad and black keyboard. Its screen is on, displaying a lock screen with a forest wallpaper featuring tall trees and sunlight shining through.",
    },
    {
      id: 2,
      name: "Asus",
      title: "Asus Tuf gaming FX504",
      cpu: "CPU",
      cpuname: "core i7",
      ram: "RAM",
      ramname: "16GB",
      gpu: "Size",
      gpuname: "15 inch",
      storage: "Storage",
      storagename: "512GB",
      rate: 4,
      price: 349,
      image:
        "https://images.khmer24.co/25-12-29/asus-tuf-gaming-fx504-gaming-amp-design--709862176699588071661235-b.jpg",
      description:
        "Tប្រើសំរាប់ គូសប្លង់ សរសេរកូដ ឌីហ្សាញ កាត់ត រូបភាព វិដិអូ ធ្វើភ្លេង ផ្នែកIT ផ្នែកសំណង់ ស្ថាបត្យកម្ម ផ្នែកអគ្គិសនី លេងហ្គេម ។ល។ ",
    },
    {
      id: 3,
      name: "Asus",
      title: "Asus VivoBook",
      cpu: "CPU",
      cpuname: "core i5",
      ram: "RAM",
      ramname: "8GB",
      gpu: "Size",
      gpuname: "14 inch",
      storage: "Storage",
      storagename: "256GB",
      rate: 4,
      price: 299,
      image:
        "https://i.pinimg.com/736x/f4/ea/75/f4ea75553c1f924d0a1a10214aefbdd1.jpg",
      description:
        "The image shows a sleek, modern laptop placed on a wooden desk. The laptop has a thin, minimalist design with a large trackpad and black keyboard. Its screen is on, displaying a lock screen with a forest wallpaper featuring tall trees and sunlight shining through.",
    },
    {
      id: 4,
      name: "Asus",
      title: "Asus Vivobook Pro15-Q533",
      cpu: "CPU",
      cpuname: "core i7",
      ram: "RAM",
      ramname: "16GB",
      gpu: "Size",
      gpuname: "15 inch",
      storage: "Storage",
      storagename: "1TB NvMe SSD",
      rate: 4,
      price: 979,
      image:
        "https://images.khmer24.co/25-01-18/asus-vivobook-pro15-q533-vga-rtx3050-6gb-32116173717256676876693-b.jpg",
      description:
        "The image shows a sleek, modern laptop placed on a wooden desk. The laptop has a thin, minimalist design with a large trackpad and black keyboard. Its screen is on, displaying a lock screen with a forest wallpaper featuring tall trees and sunlight shining through.",
    },
    {
      id: 5,
      name: "Asus",
      title: "Asus X505BP 15.6",
      cpu: "CPU",
      cpuname: "core i7",
      ram: "RAM",
      ramname: "8GB",
      gpu: "Size",
      gpuname: "15 inch",
      storage: "Storage",
      storagename: "256GB SSD",
      rate: 4,
      price: 199,
      image:
        "https://images.khmer24.co/26-04-07/asus-x505bp-15-6--290063177553720228449393-b.jpg",
      description:
        "The image shows a sleek, modern laptop placed on a wooden desk. The laptop has a thin, minimalist design with a large trackpad and black keyboard. Its screen is on, displaying a lock screen with a forest wallpaper featuring tall trees and sunlight shining through.",
    },
    {
      id: 6,
      name: "Asus",
      title: "Asus Rog Strix G731 ",
      cpu: "CPU",
      cpuname: "core i7",
      ram: "RAM",
      ramname: "8GB",
      gpu: "Size",
      gpuname: "17 inch",
      storage: "Storage",
      storagename: "256GB SSD",
      rate: 4,
      price: 679,
      image:
        "https://images.khmer24.co/26-02-04/asus-rog-strix-g731-gaming-amp-design--709862177018455237469657-b.jpg",
      description:
        "The image shows a sleek, modern laptop placed on a wooden desk. The laptop has a thin, minimalist design with a large trackpad and black keyboard. Its screen is on, displaying a lock screen with a forest wallpaper featuring tall trees and sunlight shining through.",
    },
    {
      id: 7,
      name: "Asus",
      title: "ASUS TUF FX505GT",
      cpu: "CPU",
      cpuname: "core i7",
      ram: "RAM",
      ramname: "8GB",
      gpu: "Size",
      gpuname: "16 inch",
      storage: "Storage",
      storagename: "256GB SSD",
      rate: 4,
      price: 499,
      image:
        "https://images.khmer24.co/26-02-03/asus-tuf-fx505gt-1251028177008334850891015-b.jpg",
      description:
        "The image shows a sleek, modern laptop placed on a wooden desk. The laptop has a thin, minimalist design with a large trackpad and black keyboard. Its screen is on, displaying a lock screen with a forest wallpaper featuring tall trees and sunlight shining through.",
    },
    {
      id: 8,
      name: "Asus",
      title: "Asus Rog Strix G731",
      cpu: "CPU",
      cpuname: "core i7",
      ram: "RAM",
      ramname: "8GB",
      gpu: "Size",
      gpuname: "16 inch",
      storage: "Storage",
      storagename: "256GB SSD",
      rate: 4,
      price: 679,
      image:
        "https://i.pinimg.com/1200x/3c/dc/cc/3cdccc12b52dddd29e5903dc51799e82.jpg",
      description:
        "This is a powerful gaming laptop setup, designed for gaming, high performance, and visual appeal rather than simple everyday use.",
    },
    {
      id: 9,
      name: "Asus",
      title: "ASUS Adolbook",
      cpu: "CPU",
      cpuname: "core i5",
      ram: "RAM",
      ramname: "8GB",
      gpu: "Size",
      gpuname: "14 inch",
      storage: "Storage",
      storagename: "256GB SSD",
      rate: 4,
      price: 340,
      image:
        "https://images.khmer24.co/26-03-17/asus-adolbook-1128154177371674027135058-b.jpg",
      description: `តូចស្អាតស្រួលដាក់តាមខ្លួន
        មានប្រអប់ មានកាតធានា មានសាកថ្ម មានកាសស្តាប់តាមខ្លួន មានប្រអប់ មានកាតធានា មានសាកថ្ម មានកាសស្តាប់តាមខ្លួន មានប្រអប់ មានកាតធានា មានសាកថ្ម`,
    },
    {
      id: 10,
      name: "Asus",
      title: "ASUS Adolbook",
      cpu: "CPU",
      cpuname: "core i5",
      ram: "RAM",
      ramname: "8GB",
      gpu: "Size",
      gpuname: "14 inch",
      storage: "Storage",
      storagename: "256GB SSD",
      rate: 4,
      price: 340,
      image:
        "https://i.pinimg.com/1200x/7c/39/94/7c39947c1f72ce00c704526f50e6a30e.jpg",
      description: "A sleek and lightweight laptop perfect for on-the-go use.",
    },
    {
      id: 11,
      name: "Asus",
      title: "Asus TUF Gaming A15",
      cpu: "CPU",
      cpuname: "Ryzen 7",
      ram: "RAM",
      ramname: "16GB",
      gpu: "GPU",
      gpuname: "RTX 4060",
      storage: "Storage",
      storagename: "512GB SSD",
      rate: 4,
      price: 1099,
      image:
        "https://i.pinimg.com/1200x/45/55/c0/4555c04663e7db57054960c82cd126c3.jpg",
      description:
        "A powerful gaming laptop designed for high performance and visual appeal.",
    },
    {
      id: 12,
      name: "Asus",
      title: "Asus Rog Zephyrus G14",
      cpu: "CPU",
      cpuname: "Ryzen 9",
      ram: "RAM",
      ramname: "16GB",
      gpu: "GPU",
      gpuname: "RTX 4060",
      storage: "Storage",
      storagename: "1TB SSD",
      rate: 5,
      price: 1499,
      image:
        "https://i.pinimg.com/1200x/bb/5c/03/bb5c036b84cf44777dc068cc72ade0a3.jpg",
      description:
        "A compact and powerful gaming laptop with premium build quality.",
    },
    {
      id: 13,
      name: "Asus",
      title: "Asus Zenbook 14 OLED",
      cpu: "CPU",
      cpuname: "Intel Core Ultra 9",
      ram: "RAM",
      ramname: "32GB",
      gpu: "GPU",
      gpuname: "Intel Iris Xe",
      storage: "SSD",
      storagename: "1TB",
      rate: 4,
      price: 1299,
      image:
        "https://i.pinimg.com/1200x/af/d7/25/afd72595075cffba014dc637eb00b9fb.jpg",
      description: "A stunning OLED laptop with exceptional display quality.",
    },
    {
      id: 14,
      name: "Asus",
      title: "Asus ROG",
      cpu: "CPU",
      cpuname: "Ryzen 7",
      ram: "RAM",
      ramname: "16GB",
      gpu: "GPU",
      gpuname: "RTX 3050",
      storage: "Storage",
      storagename: "512GB SSD",
      rate: 4,
      price: 899,
      image:
        "https://i.pinimg.com/1200x/3a/b6/60/3ab660ab8133e49eb75950df727aa9e3.jpg",
      description:
        "A powerful gaming laptop setup for high performance and visual appeal.",
    },
    {
      id: 15,
      name: "Asus",
      title: "Asus ExpertBook",
      cpu: "CPU",
      cpuname: "Intel Core i5",
      ram: "RAM",
      ramname: "8GB",
      gpu: "GPU",
      gpuname: "Intel UHD",
      storage: "Storage",
      storagename: "256GB SSD",
      rate: 4,
      price: 599,
      image:
        "https://i.pinimg.com/1200x/11/a4/a1/11a4a1b5e222369b655f7eea0e056f99.jpg",
      description: "A professional business laptop with reliable performance.",
    },
    {
      id: 16,
      name: "Asus",
      title: "Asus ExpertBook B5",
      cpu: "CPU",
      cpuname: "Intel Core i5",
      ram: "RAM",
      ramname: "8GB",
      gpu: "GPU",
      gpuname: "Intel UHD",
      storage: "Storage",
      storagename: "256GB SSD",
      rate: 4,
      price: 599,
      image:
        "https://i.pinimg.com/1200x/3e/fe/20/3efe20b2977e592412520b55c4a543bf.jpg",
      description: "A professional business laptop with reliable performance.",
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
          Asus
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

export default Asus;
