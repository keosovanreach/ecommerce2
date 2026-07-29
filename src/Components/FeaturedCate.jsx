import React from "react";

const categories = [
  {
    name: "Laptops",
    Qty: "limited",
    btn: "Shop Now",
    img: "https://i.pinimg.com/1200x/f6/1a/2c/f61a2cdcf71d1cb0f016d13d7300ab62.jpg",
  },
  {
    name: "PC",
    Qty: "limited",
    btn: "Shop Now",
    img: "https://i.pinimg.com/1200x/c1/e9/28/c1e928db470b03545471b4a78441f666.jpg",
  },
  {
    name: "Chairs & Tables",
    Qty: "limited",
    btn: "Shop Now",
    img: "https://i.pinimg.com/736x/1e/2c/e8/1e2ce81114cd16db30c9f458d28bf5fe.jpg",
  },
  {
    name: "Headset Gaming ",
    Qty: "limited",
    btn: "Shop Now",
    img: "https://i.pinimg.com/736x/4d/98/31/4d9831b96079e375eef87e646d810677.jpg",
  },
];

function FeaturedCate() {
  return (
    <div className="bg-white w-full py-10">
      {/* Title */}
      <div className="text-center mb-8 px-4">
        <h1 className="text-2xl md:text-4xl font-bold">Featured Categories</h1>
        <p className="text-gray-500 text-sm md:text-base">
          Explore our featured categories
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 px-4 md:px-12">
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
              <button className=" mt-2 bg-white text-black px-2 py-1 text-xs sm:px-3 sm:py-1 sm:text-sm md:px-4 md:py-2 md:text-base rounded-full w-fit  hover:bg-black hover:text-white transition active:bg-black active:text-white">
                {cat.btn}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FeaturedCate;
