import React from "react";

import {
  FaShippingFast,
  FaHeadset,
  FaShieldAlt,
  FaDollarSign,
} from "react-icons/fa";

const icons = [
  <FaShippingFast />,
  <FaHeadset />,
  <FaShieldAlt />,
  <FaDollarSign />,
];


function Menu() {
  const data = [
    { value: "Free Shipping", label: "On order over $500" },
    { value: "2 Years Warranty", label: "On selling product" },
    { value: "24/7 Support", label: "Online support" },
    { value: "Best Price", label: "Price guarantee" },
  ];

  return (
    <div className="w-full bg-white py-4 md:py-8">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
        {data.map((item, i) => (
          <div key={i} className="flex flex-col items-center">
           
            <div className="w-12 h-12 bg-amber-200 rounded-full flex items-center justify-center mb-2">
              <span className="text-lg font-bold">{icons[i]}</span>
            </div>

         
            <h1 className="font-bold text-sm md:text-lg">{item.value}</h1>
            <p className="text-xs md:text-sm text-gray-600">{item.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Menu;
