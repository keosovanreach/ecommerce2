import React from "react";
import { Link } from "react-router-dom";






const categories = [
  { 

    name: "Macbook",
    Qty: "limited",
    btn: "Shop Now",
    path: "/Macbook",
    img: "https://i.pinimg.com/1200x/99/21/a4/9921a4864d55bf6c3a8680a2aeb07c6a.jpg",
  },

  {
    name: "ASUS",
    Qty: "Limited",
    btn: "Shop Now",
    path: "/Asus",
    img: "https://i.pinimg.com/1200x/3a/b6/60/3ab660ab8133e49eb75950df727aa9e3.jpg",
  },
  {
    name: "HP",
    Qty: "limited",
    btn: "Shop Now",
    path: "/Hp",
    img: "https://i.pinimg.com/1200x/98/ae/17/98ae17521e62a7141275957f0b0bb378.jpg",
  },
  {
    name: "DELL",
    Qty: "limited",
    btn: "Shop Now",
    path: "/Dell",
    img: "https://i.pinimg.com/1200x/b6/c7/05/b6c7055514a2e8fbb5f5cfd73699b095.jpg",
  },
  {
    name: "MSI",
    Qty: "limited",
    btn: "Shop Now",
    path: "/Msi",
    img: "https://i.pinimg.com/736x/5d/7f/14/5d7f14b70cf3f2dcd93a6559700a5aa4.jpg",
  },
  {
    name: "Lenovo",
    Qty: "limited",
    btn: "Shop Now",
    path: "/Lenovo",
    img: "https://i.pinimg.com/736x/ef/65/69/ef65693b3edc3c290dae903663be7146.jpg",
  },
  {
    name: "PC",
    Qty: "limited",
    btn: "Shop Now",
    path: "/Pc",
    img: "https://i.pinimg.com/1200x/c1/e9/28/c1e928db470b03545471b4a78441f666.jpg",
  },
  {
    name: "Chairs & Tables",
    Qty: "limited",
    btn: "Shop Now",
    path: "/Chair ",
    img: "https://i.pinimg.com/736x/1e/2c/e8/1e2ce81114cd16db30c9f458d28bf5fe.jpg",
  },
  {
    name: "Headset Gaming ",
    Qty: "limited",
    btn: "Shop Now",
    path: "/Headest",
    img: "https://i.pinimg.com/736x/4d/98/31/4d9831b96079e375eef87e646d810677.jpg",
  },
];

function Categories() {
  return (
    <div className="bg-white w-full py-10 h-100vh items-center">
      {/* Title */}
      <div className="text-center mb-8 px-4 mt-10">
        <h1 className="text-2xl md:text-4xl font-bold"> Categories</h1>
        <p className="text-gray-500 text-sm md:text-base">
          Explore our featured categories
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 px-4 md:px-12">
        {categories.map((cat, index) => (
          <div
            key={index}
            className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition cursor-pointer"
          >
            
              <img
                src={cat.img}
                alt={cat.name}
                className="w-full h-24 sm:h-32 md:h-44 lg:h-56 object-cover transform transition duration-300 group-hover:scale-110 active:scale-110"
              />
           

            <div className="absolute inset-0 bg-black/20 flex flex-col justify-end p-4 cursor-pointer">
              <h2 className="text-white text-lg font-bold">{cat.name}</h2>
              <p className="text-gray-200 text-sm">{cat.Qty}</p>
              <Link to={cat.path}>
                <button className="mt-2 bg-white text-black px-2 py-1 text-xs sm:px-3 sm:py-1 sm:text-sm md:px-4 md:py-2 md:text-base rounded-full w-fit hover:bg-black hover:text-white transition active:bg-black active:text-white cursor-pointer">
                  {cat.btn}
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Categories;
