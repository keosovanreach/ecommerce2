import React from "react";
import { Link } from "react-router-dom";
function Dell({ setCart }) {
  const products = [
    {
      id: 1,
      name: "Dell",
      title: "Dell XPS 15",
      cpu: "CPU",
      cpuname: "Core i7",
      ram: "RAM",
      ramname: "16GB",
      gpu: "GPU",
      gpuname: "RTX 4050",
      storage: "SSD",
      storagename: "512GB",
      rate: 5,
      price: 1499,
      image:
        "https://i.pinimg.com/1200x/96/b8/19/96b819a2057454cd507198c2a60557e3.jpg",
      description:
        "A premium ultrabook with stunning OLED display and powerful performance.",
    },
    {
      id: 2,
      name: "Dell",
      title: "Dell XPS 13",
      cpu: "CPU",
      cpuname: "Core i5",
      ram: "RAM",
      ramname: "8GB",
      gpu: "GPU",
      gpuname: "Intel Iris Xe",
      storage: "SSD",
      storagename: "256GB",
      rate: 4,
      price: 999,
      image:
        "https://i.pinimg.com/1200x/68/6c/62/686c62e9940dec3da4e8d7d27d749297.jpg",
      description:
        "A compact and lightweight laptop for professionals on the go.",
    },
    {
      id: 3,
      name: "Dell",
      title: "Dell Latitude 5540",
      cpu: "CPU",
      cpuname: "Core i5",
      ram: "RAM",
      ramname: "16GB",
      gpu: "GPU",
      gpuname: "Intel UHD",
      storage: "SSD",
      storagename: "512GB",
      rate: 4,
      price: 899,
      image:
        "https://i.pinimg.com/1200x/d5/38/ec/d538ec05e2db325ef05996ab01d1e6c9.jpg",
      description:
        "A reliable business laptop with essential features for productivity.",
    },
    {
      id: 4,
      name: "Dell",
      title: "Dell Latitude 5440",
      cpu: "CPU",
      cpuname: "Core i7",
      ram: "RAM",
      ramname: "16GB",
      gpu: "GPU",
      gpuname: "Intel Iris Xe",
      storage: "SSD",
      storagename: "512GB",
      rate: 4,
      price: 1099,
      image:
        "https://i.pinimg.com/1200x/86/1a/c9/861ac998206290f8aa35dfbc8fb00251.jpg",
      description: "A powerful business laptop with excellent build quality.",
    },
    {
      id: 5,
      name: "Dell",
      title: "Dell Inspiron 15",
      cpu: "CPU",
      cpuname: "Core i5",
      ram: "RAM",
      ramname: "8GB",
      gpu: "GPU",
      gpuname: "Intel UHD",
      storage: "SSD",
      storagename: "256GB",
      rate: 4,
      price: 549,
      image:
        "https://i.pinimg.com/1200x/e9/1e/79/e91e7973869ab015ce3bc99129c2cbf8.jpg",
      description: "An affordable everyday laptop for home and office use.",
    },
    {
      id: 6,
      name: "Dell",
      title: "Dell Inspiron 14",
      cpu: "CPU",
      cpuname: "Ryzen 5",
      ram: "RAM",
      ramname: "8GB",
      gpu: "GPU",
      gpuname: "AMD Radeon",
      storage: "SSD",
      storagename: "256GB",
      rate: 4,
      price: 499,
      image:
        "https://i.pinimg.com/736x/b8/83/44/b88344244069a1ce4474009b8871af7e.jpg",
      description: "A compact and affordable laptop for everyday tasks.",
    },
    {
      id: 7,
      name: "Dell",
      title: "Dell Vostro 5620",
      cpu: "CPU",
      cpuname: "Core i5",
      ram: "RAM",
      ramname: "8GB",
      gpu: "GPU",
      gpuname: "Intel Iris Xe",
      storage: "SSD",
      storagename: "512GB",
      rate: 4,
      price: 649,
      image:
        "https://i.pinimg.com/736x/48/f2/02/48f202b2167a2c5e0c661ead737a1238.jpg",
      description:
        "A business laptop with reliable performance and security features.",
    },
    {
      id: 8,
      name: "Dell",
      title: "Dell Vostro 3520",
      cpu: "CPU",
      cpuname: "Core i3",
      ram: "RAM",
      ramname: "8GB",
      gpu: "GPU",
      gpuname: "Intel UHD",
      storage: "SSD",
      storagename: "256GB",
      rate: 3,
      price: 399,
      image:
        "https://i.pinimg.com/736x/6f/81/c0/6f81c099ba2a3e8f180ad5fb64479d55.jpg",
      description: "An entry-level business laptop for basic office tasks.",
    },
    {
      id: 9,
      name: "Dell",
      title: "Dell Precision 5570",
      cpu: "CPU",
      cpuname: "Core i7",
      ram: "RAM",
      ramname: "16GB",
      gpu: "GPU",
      gpuname: "RTX A1000",
      storage: "SSD",
      storagename: "512GB",
      rate: 5,
      price: 1899,
      image:
        "https://i.pinimg.com/1200x/b0/cc/ac/b0ccac7d39c3c73b59160bb8f3fd581e.jpg",
      description:
        "A mobile workstation for professionals needing high performance.",
    },
    {
      id: 10,
      name: "Dell",
      title: "Dell Precision 5570",
      cpu: "CPU",
      cpuname: "Core i9",
      ram: "RAM",
      ramname: "32GB",
      gpu: "GPU",
      gpuname: "RTX A2000",
      storage: "SSD",
      storagename: "1TB",
      rate: 5,
      price: 2499,
      image:
        "https://i.pinimg.com/1200x/1a/b0/bd/1ab0bd81637476dd6d9c04042cdfb71c.jpg",
      description: "A high-end mobile workstation for demanding workloads.",
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
        <h1 className="text-xl sm:text-2xl md:text-4xl font-bold">Dell</h1>
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

export default Dell;
