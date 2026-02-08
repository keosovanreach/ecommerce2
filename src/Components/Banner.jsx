import { useState, useEffect } from "react";

const images = [
  "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
  "https://images.unsplash.com/photo-1512436991641-6745cdb1723f",
  "https://i.pinimg.com/736x/51/67/57/516757507992eca687b015ccb6ef2342.jpg",
];
const image = [
  "https://i.pinimg.com/736x/51/67/57/516757507992eca687b015ccb6ef2342.jpg",
  "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
  "https://images.unsplash.com/photo-1512436991641-6745cdb1723f",
];

export default function Banner() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % image.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-screen relative overflow-hidden">
      <img
        src={images[index]}
        className="w-full h-full object-cover transition-all duration-1000"
        alt="banner"
      />

      <div className="absolute inset-0 bg-black/60"></div>

      <div className="absolute inset-0 flex items-center">
        <div className="max-w-6xl mx-auto px-6 text-white grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <div className="inline-block border border-white px-3 py-1 rounded-full mb-4">
              Professional Grade
            </div>

            <h1 className="text-4xl sm:text-6xl font-bold mb-4">
              Premium Laptops & Workstations
            </h1>

            <p className="text-lg sm:text-xl text-gray-300 mb-6">
              Powerful laptops for developers, designers, and business
              professionals.
            </p>

            <div className="flex gap-4 flex-wrap">
              <button className="bg-white text-black px-6 py-2 rounded-md hover:bg-blue-600 hover:text-white transition">
                Explore Laptops
              </button>

              <button className="border border-white px-6 py-2 rounded-md hover:bg-white hover:text-black transition">
                View All Products
              </button>
            </div>

            <div className="mt-6 grid grid-cols-3 gap-4">
              {[
                { value: "50K+", label: "Laptops Sold" },
                { value: "30+", label: "Top Brands" },
                { value: "2 Years", label: "Warranty" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-white/10 p-3 rounded-xl backdrop-blur-md text-center"
                >
                  <h2 className="text-xl font-bold">{item.value}</h2>
                  <p className="text-sm text-gray-300">{item.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="W md:flex justify-center sm:justify-end md:items-center ">
            <img
              src={image[index]}
              alt="product"
              className="w-[500px] h-[300px] rounded-xl shadow-2xl items-center transform hover:scale-105 hover:bg-white transition duration-500 cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
