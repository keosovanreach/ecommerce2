import React from "react";
import { Link } from "react-router-dom";
function Headest({ setCart }) {
  const products = [
    {
      id: 1,
      name: "Razer",
      title: "Razer BlackShark V2",
      cpu: "Type",
      cpuname: "Wired",
      ram: "Connection",
      ramname: "3.5mm Jack",
      gpu: "Microphone",
      gpuname: "Detachable",
      storage: "Weight",
      storagename: "262g",
      rate: 5,
      price: 99,
      image:
        "https://i.pinimg.com/1200x/28/a2/1a/28a21aac6d2d5de7ac9316e1a4f54894.jpg",
      description:
        "The Razer BlackShark V2 is a gaming headset designed for clear game audio, comfortable long gaming sessions, and communication with teammates. It features a lightweight design and a detachable microphone.",
    },

    {
      id: 2,
      name: "Logitech",
      title: "Logitech G733 LIGHTSPEED",
      cpu: "Type",
      cpuname: "Wireless",
      ram: "Connection",
      ramname: "2.4GHz Wireless",
      gpu: "Microphone",
      gpuname: "Detachable",
      storage: "Battery",
      storagename: "Up to 29h",
      rate: 4,
      price: 129,
      image:
        "https://i.pinimg.com/736x/0d/86/b1/0d86b14bb6503907498ebff62062ae12.jpg",
      description:
        "The Logitech G733 LIGHTSPEED is a lightweight wireless gaming headset with a comfortable headband, customizable lighting, and a clear microphone for gaming and voice chat.",
    },

    {
      id: 3,
      name: "HyperX",
      title: "HyperX Cloud II",
      cpu: "Type",
      cpuname: "Wired",
      ram: "Connection",
      ramname: "USB / 3.5mm",
      gpu: "Microphone",
      gpuname: "Detachable",
      storage: "Weight",
      storagename: "320g",
      rate: 5,
      price: 89,
      image:
        "https://i.pinimg.com/736x/4d/ae/ae/4daeae139f52a19d4ec6c2caf179369a.jpg",
      description:
        "The HyperX Cloud II is a popular gaming headset featuring comfortable memory foam ear cushions, virtual surround sound, and a detachable noise-cancelling microphone.",
    },

    {
      id: 4,
      name: "SteelSeries",
      title: "SteelSeries Arctis Nova 7",
      cpu: "Type",
      cpuname: "Wireless",
      ram: "Connection",
      ramname: "2.4GHz / Bluetooth",
      gpu: "Microphone",
      gpuname: "Retractable",
      storage: "Battery",
      storagename: "Up to 38h",
      rate: 5,
      price: 179,
      image:
        "https://i.pinimg.com/736x/79/22/a9/7922a90c5098a172a1f1bab2e15b5492.jpg",
      description:
        "The SteelSeries Arctis Nova 7 is a wireless gaming headset with 2.4GHz wireless and Bluetooth connectivity, a retractable microphone, and long battery life.",
    },

    {
      id: 5,
      name: "Corsair",
      title: "Corsair HS80 RGB",
      cpu: "Type",
      cpuname: "Wireless",
      ram: "Connection",
      ramname: "2.4GHz Wireless",
      gpu: "Microphone",
      gpuname: "Flip-to-Mute",
      storage: "Battery",
      storagename: "Up to 20h",
      rate: 4,
      price: 149,
      image:
        "https://i.pinimg.com/736x/9b/35/67/9b3567d86dfea362870b05578c261fff.jpg",
      description:
        "The Corsair HS80 RGB is a wireless gaming headset featuring comfortable memory foam ear cushions, RGB lighting, a flip-to-mute microphone, and immersive gaming audio.",
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
          Headset Gaming
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

export default Headest;
