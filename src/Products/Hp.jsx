import React from "react";
import { Link } from "react-router-dom";
function Hp({ setCart }) {
  const products = [
    {
      id: 1,
      name: "HP",
      title: "HP Elitebook 840",
      cpu: "CPU",
      cpuname: "Core i5",
      ram: "RAM",
      ramname: "16GB",
      gpu: "GPU",
      gpuname: "Intel UHD",
      storage: "Storage",
      storagename: "256GB SSD",
      rate: 4,
      price: 799,
      image:
        "https://i.pinimg.com/1200x/25/0f/27/250f2787865bb62c05284f4c7435742a.jpg",
      description:
        "A professional business laptop with reliable performance and sleek design.",
    },
    {
      id: 2,
      name: "HP",
      title: "HP Pavilion 14",
      cpu: "CPU",
      cpuname: "Core i5-12th Gen",
      ram: "RAM",
      ramname: "8GB",
      gpu: "GPU",
      gpuname: "Intel Iris Xe",
      storage: "SSD",
      storagename: "512GB",
      rate: 4,
      price: 699,
      image:
        "https://i.pinimg.com/1200x/7c/39/94/7c39947c1f72ce00c704526f50e6a30e.jpg",
      description:
        "A stylish, mid-range laptop designed for everyday use with balanced performance.",
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
      gpuname: "AMD Radeon",
      storage: "Storage",
      storagename: "256GB SSD",
      rate: 4,
      price: 549,
      image:
        "https://i.pinimg.com/1200x/98/ae/17/98ae17521e62a7141275957f0b0bb378.jpg",
      description:
        "The HP Pavilion is a stylish, mid-range laptop designed for everyday use.",
    },
    {
      id: 4,
      name: "HP",
      title: "HP 830 G6",
      cpu: "CPU",
      cpuname: "Intel Core i5 8th Gen",
      ram: "RAM",
      ramname: "8GB",
      gpu: "GPU",
      gpuname: "Intel UHD 620",
      storage: "SSD",
      storagename: "256GB",
      rate: 4,
      price: 649,
      image:
        "https://i.pinimg.com/736x/8c/36/ed/8c36ed74099c267a0315bd186e1fdb70.jpg",
      description:
        "A compact business laptop with 13-inch touch screen and reliable performance.",
    },
    {
      id: 5,
      name: "HP",
      title: "HP Spectre x360",
      cpu: "CPU",
      cpuname: "Core i7",
      ram: "RAM",
      ramname: "16GB",
      gpu: "GPU",
      gpuname: "Intel Iris Xe",
      storage: "SSD",
      storagename: "512GB",
      rate: 5,
      price: 1299,
      image:
        "https://i.pinimg.com/1200x/25/57/2b/25572bd3217db727564fb7720904d3b9.jpg",
      description:
        "A premium 2-in-1 convertible laptop with stunning OLED display.",
    },
    {
      id: 6,
      name: "HP",
      title: "HP Omen 16",
      cpu: "CPU",
      cpuname: "Core i7",
      ram: "RAM",
      ramname: "16GB",
      gpu: "GPU",
      gpuname: "RTX 4060",
      storage: "Storage",
      storagename: "1TB SSD",
      rate: 5,
      price: 1499,
      image:
        "https://i.pinimg.com/1200x/8c/72/f6/8c72f64210f100d752012262283dc4b5.jpg",
      description:
        "A powerful gaming laptop with high performance and visual appeal.",
    },
    {
      id: 7,
      name: "HP",
      title: "HP Victus 15",
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
        "https://i.pinimg.com/1200x/f5/70/fa/f570fa3586c085d11c2a15b499aed5e7.jpg",
      description:
        "An affordable gaming laptop for casual gamers and students.",
    },
    {
      id: 8,
      name: "HP",
      title: "HP Envy 15",
      cpu: "CPU",
      cpuname: "Core i7",
      ram: "RAM",
      ramname: "16GB",
      gpu: "GPU",
      gpuname: "RTX 3050 Ti",
      storage: "SSD",
      storagename: "1TB",
      rate: 4,
      price: 1099,
      image:
        "https://i.pinimg.com/1200x/5a/15/3f/5a153fcba1b4de56ecd80a5c9a09566c.jpg",
      description: "A sleek and powerful laptop for creative professionals.",
    },
    {
      id: 9,
      name: "HP",
      title: "HP ProBook 450",
      cpu: "CPU",
      cpuname: "Core i5",
      ram: "RAM",
      ramname: "8GB",
      gpu: "GPU",
      gpuname: "Intel UHD",
      storage: "Storage",
      storagename: "256GB SSD",
      rate: 4,
      price: 599,
      image:
        "https://i.pinimg.com/1200x/e0/7e/b5/e07eb5a9e41779ba0d38274fe572d39b.jpg",
      description:
        "A reliable business laptop with essential features for productivity.",
    },
    {
      id: 10,
      name: "HP",
      title: "HP ZBook Studio",
      cpu: "CPU",
      cpuname: "Core i9",
      ram: "RAM",
      ramname: "32GB",
      gpu: "GPU",
      gpuname: "RTX 4080",
      storage: "Storage",
      storagename: "2TB SSD",
      rate: 5,
      price: 2499,
      image:
        "https://i.pinimg.com/736x/30/09/5e/30095eb79ebacad276bd8c941ff86be5.jpg",
      description:
        "A mobile workstation for professionals needing maximum performance.",
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
        <h1 className="text-xl sm:text-2xl md:text-4xl font-bold">HP</h1>
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

export default Hp;
