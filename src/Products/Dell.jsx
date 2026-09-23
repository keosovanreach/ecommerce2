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
     <div className="bg-gray-50 w-full py-12 mt-10">
       {/* Title */}
       <div className="text-center mb-10 px-4">
         <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900">
           Dell
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

export default Dell;
