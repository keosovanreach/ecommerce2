import React from "react";
import { Link } from "react-router-dom";
function Chair({ setCart }) {
  const products = [
    {
      id: 1,
      name: "Gaming Chair",
      title: "MSI Gaming Chair",
      cpu: "Material",
      cpuname: "PU Leather",
      ram: "Color",
      ramname: "Black / Red",
      gpu: "Type",
      gpuname: "Racing Style",
      storage: "Weight",
      storagename: "25kg",
      rate: 4,
      price: 199,
      image:
        "https://images.openai.com/static-rsc-4/dzVFBT4vOuFPoIcfwzlFYz6xHOmqgrvhBl8A09rbi_p0w0oS2shYKniIXoKXWRwY5rH5d3wzOq_lSwinIOcqBqhkXVQVrz5LtloRgcvBIwNWMBvTJEJjih9x3XDULE2SMStFNbl5P6-Qy-NZCgj-eCsdzja2WBKlBNz74mxIZmA?purpose=inline",
      description:
        "A stylish and comfortable gaming chair with a racing-style design, black and red PU leather, adjustable armrests, and a supportive high-back structure. Perfect for gaming, studying, and working.",
    },
    {
      id: 2,
      name: "Razer",
      title: "Razer Iskur V2",
      cpu: "Material",
      cpuname: "Synthetic Leather",
      ram: "Color",
      ramname: "Black",
      gpu: "Type",
      gpuname: "Ergonomic",
      storage: "Weight",
      storagename: "26kg",
      rate: 5,
      price: 499,
      image:
        "https://images.openai.com/static-rsc-4/H5fehjNapN9FXd1KedubGQf1Z7cGbfJq7zrot1Q4Gr36uQt_1c7cc6rcCwmXNdi7HBA0efeUU7bMUi5J40UYgoPyYk1nhweZMYdeq4yPs2xyO77z0zlBasv1XXBO6ePB6n0uH-qdv6fUal3CHxP9MjyLHYg2UACuMyH7NtEbZBE?purpose=inline",
      description:
        "A premium ergonomic gaming chair designed with adjustable lumbar support, comfortable cushioning, and a durable synthetic leather finish. It is suitable for long gaming and working sessions.",
    },

    {
      id: 3,
      name: "Secretlab",
      title: "Secretlab TITAN Evo",
      cpu: "Material",
      cpuname: "Leatherette",
      ram: "Color",
      ramname: "Black",
      gpu: "Type",
      gpuname: "Racing Style",
      storage: "Weight",
      storagename: "33kg",
      rate: 5,
      price: 549,
      image:
        "https://images.openai.com/static-rsc-4/lLH1fkSe2xuKCzXYTuvb98legDjYrcV6hQGfjrfPxAMLi3Y8PZC5Bie2yMqF98MKDltOjfRn-ehAKaGaWUJcn4fOenoQaWCf5tDXUx3VeGXE_ykJ3PkXHzsEqgQgHNlWpe8evlh615fp_lCQDeomPaRdGsrXINc4van-_1i84qh9EIC0JqkWZWJIYcso-Fgb?purpose=fullsize",
      description:
        "A comfortable gaming chair with a high-back design, adjustable armrests, reclining support, and a durable leatherette finish.",
    },

    {
      id: 4,
      name: "Corsair",
      title: "Corsair TC100 Relaxed",
      cpu: "Material",
      cpuname: "Fabric",
      ram: "Color",
      ramname: "Black / Gray",
      gpu: "Type",
      gpuname: "Relaxed Gaming",
      storage: "Weight",
      storagename: "24kg",
      rate: 4,
      price: 299,
      image:
        "https://images.openai.com/static-rsc-4/sQwxJ_OUiHiYXMFkNjdVKL3hISUDuZDZS1mIahGJCpzjHFM7at3XwNz6j3EGVzDh5EBMYWSGLn1iwOMgx3RrUd9Z0IabJG29iHHnJxnVPsFO9uq53LA6Tgl6IHRtSOFOaph3WpzMwVlVc6KtKYmV8Or4m_4e-aV5LaWGYuOSTYE?purpose=inline",
      description:
        "A spacious gaming chair with a relaxed seating position, soft fabric upholstery, adjustable armrests, and a supportive high-back design.",
    },

    {
      id: 5,
      name: "AndaSeat",
      title: "AndaSeat Kaiser 3",
      cpu: "Material",
      cpuname: "PVC Leather",
      ram: "Color",
      ramname: "Black / Red",
      gpu: "Type",
      gpuname: "Ergonomic",
      storage: "Weight",
      storagename: "28kg",
      rate: 4,
      price: 399,
      image:
        "https://images.openai.com/static-rsc-4/ayQ6ySYcfQeGEcNFPX6InjR7fxA4rrORLeTcgNbAOHoQzhEJRebVEf9dtr2j1_oyRG5rr30SCswtTulpvU7O6_PioYSmWJTsb7GNtOWgCDzWf3ObUn9c7xpgGrar8T2_poyw8TQpyofoDbwJVyXF3TxK9KJpd9Z6oo0wjDrNCCw?purpose=inline",
      description:
        "A sturdy ergonomic gaming chair featuring a high-back design, adjustable lumbar support, magnetic headrest, and comfortable cushioning.",
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
          Gaming Chairs
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

export default Chair;
