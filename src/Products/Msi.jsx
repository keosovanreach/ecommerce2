import React from "react";
import { Link } from "react-router-dom";
function Msi({ setCart }) {
  const products = [
    {
      id: 1,
      name: "Apple",
      title: "Msi Pro 14(M4)",
      cpu: "Year",
      cpuname: "2022",
      ram: "RAM",
      ramname: "16GB",
      gpu: "Size",
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
      name: "Apple",
      title: "Msi Air",
      cpu: "Year",
      cpuname: "2020",
      ram: "RAM",
      ramname: "16GB",
      gpu: "Size",
      gpuname: "14 inch",
      storage: "Storage",
      storagename: "512GB",
      rate: 4,
      price: 1,
      image:
        "https://i.pinimg.com/1200x/d3/18/c5/d318c5256fd2be888d1542a0fd3cec54.jpg",
    },
    {
      id: 3,
      name: "Apple",
      title: "Msi Air ",
      cpu: "Year",
      cpuname: "2025",
      ram: "RAM",
      ramname: "16GB",
      gpu: "Size",
      gpuname: "13 inch",
      storage: "Storage",
      storagename: "256GB SSD",
      rate: 4,
      price: 1,
      image:
        "https://i.pinimg.com/1200x/de/92/a6/de92a62680a311091ac710425e7298db.jpg",
      description:
        "The HP Pavilion is a stylish, mid-range laptop designed for everyday use with a balance of performance and affordability.",
    },
    {
      id: 4,
      name: "Apple",
      title: "Msi Pro (M5)",
      cpu: "Year",
      cpuname: "2025  ",
      ram: "RAM",
      ramname: "16GB",
      gpu: "Size",
      gpuname: "13 inch",
      storage: "Storage",
      storagename: "256GB ",
      rate: 4,
      price: 1,
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
      price: 1,
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
      price: 1,
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
      price: 1,
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
      price: 1,
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
      price: 1,
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
      price: 1,
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
      price: 1,
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
      price: 1,
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
      price: 1,
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
      price: 1,
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
      price: 1,
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
      price: 1,
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
      price: 1,
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
      price: 1,
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
      price: 1,
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
      price: 1,
      image:
        "https://i.pinimg.com/1200x/62/06/16/620616077ad7bb3d51b1c9eea7e49384.jpg",
      description:
        "This is a powerful gaming laptop setup, designed for gaming, high performance, and visual appeal rather than simple everyday use.",
    },
    {
      id: 20,
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
      price: 1,
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
      price: 1,
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

      <div className="col-span-2 text-center mt-6 bg-blue-800 py-2 rounded w-[200px] mx-auto hover:bg-blue-900 transition cursor-pointer active:bg-blue-900 active:text-white">
        <p className="text-white text-sm md:text-base">View all products</p>
      </div>
    </div>
  );
}

export default Msi;
