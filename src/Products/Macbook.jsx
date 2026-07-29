import React from "react";
import { Link } from "react-router-dom";
function Macbook({ setCart }) {
  const products = [
    {
      id: 1,
      name: "Apple",
      title: "MacBook Pro 14(M4)",
      cpu: "Year",
      cpuname: "2022",
      ram: "RAM",
      ramname: "16GB",
      gpu: "Size",
      gpuname: "14 inch",
      storage: "Storage",
      storagename: "512GB",
      rate: 4,
      price: 610,
      image:
        "https://i.pinimg.com/1200x/b7/4f/a4/b74fa4bf86acd729116eaaa784d88f13.jpg",
      description:
        "The image shows a sleek, modern laptop placed on a wooden desk. The laptop has a thin, minimalist design with a large trackpad and black keyboard. Its screen is on, displaying a lock screen with a forest wallpaper featuring tall trees and sunlight shining through.",
    },
    {
      id: 2,
      name: "Apple",
      title: "MacBook Air",
      cpu: "Year",
      cpuname: "2020",
      ram: "RAM",
      ramname: "16GB",
      gpu: "Size",
      gpuname: "14 inch",
      storage: "Storage",
      storagename: "512GB",
      rate: 4,
      price: 799,
      image:
        "https://i.pinimg.com/1200x/d3/18/c5/d318c5256fd2be888d1542a0fd3cec54.jpg",
    },
    {
      id: 3,
      name: "Apple",
      title: "MacBook Air ",
      cpu: "Year",
      cpuname: "2025",
      ram: "RAM",
      ramname: "16GB",
      gpu: "Size",
      gpuname: "13 inch",
      storage: "Storage",
      storagename: "256GB SSD",
      rate: 4,
      price: 549,
      image:
        "https://i.pinimg.com/1200x/de/92/a6/de92a62680a311091ac710425e7298db.jpg",
      description:
        "The HP Pavilion is a stylish, mid-range laptop designed for everyday use with a balance of performance and affordability.",
    },
    {
      id: 4,
      name: "Apple",
      title: "MacBook Pro (M5)",
      cpu: "Year",
      cpuname: "2025  ",
      ram: "RAM",
      ramname: "16GB",
      gpu: "Size",
      gpuname: "13 inch",
      storage: "Storage",
      storagename: "256GB ",
      rate: 4,
      price: 1150,
      image:
        "https://i.pinimg.com/736x/49/09/81/490981e3c25982541fd5555b170a3bb2.jpg",
      description:
        " ប្រើសំរាប់ ការងារការិយាល័យ ការរៀនតាមអនឡាញ ការងាររដ្ឋបាល ផ្នែកគណនេយ្យ កាត់ត រូបភាព វិដិអូ កំរិតមធ្យម ចាក់ភ្លេង ។ល។",
    },
    {
      id: 5,
      name: "Apple",
      title: "MacBook Pro (M5)",
      cpu: "Year",
      cpuname: "2025  ",
      ram: "RAM",
      ramname: "16GB",
      gpu: "Size",
      gpuname: "13 inch",
      storage: "Storage",
      storagename: "256GB ",
      rate: 4,
      price: 449,
      image:
        "https://i.pinimg.com/1200x/38/0b/f5/380bf5a47baf79d2a4ffcdf6a7362e8a.jpg",
      description:
        "The image shows a sleek, modern laptop placed on a wooden desk. The laptop has a thin, minimalist design with a large trackpad and black keyboard. Its screen is on, displaying a lock screen with a forest wallpaper featuring tall trees and sunlight shining through.",
    },
    {
      id: 6,
      name: "Apple",
      title: "MacBook Pro 16(M4)",
      cpu: "Year",
      cpuname: "2025  ",
      ram: "RAM",
      ramname: "16GB",
      gpu: "Size",
      gpuname: "13 inch",
      storage: "Storage",
      storagename: "256GB ",
      rate: 4,
      price: 610,
      image:
        "https://i.pinimg.com/1200x/09/51/ee/0951ee936783e1d82dcdc6a452b7088a.jpg",
      description:
        " ប្រើសំរាប់ ការងារការិយាល័យ ការរៀនតាមអនឡាញ ការងាររដ្ឋបាល ផ្នែកគណនេយ្យ កាត់ត រូបភាព វិដិអូ កំរិតមធ្យម ចាក់ភ្លេង ។ល។",
    },
    {
      id: 7,
      name: "Apple",
      title: "MacBook Pro 16(M4)",
      cpu: "Year",
      cpuname: "2025  ",
      ram: "RAM",
      ramname: "16GB",
      gpu: "Size",
      gpuname: "13 inch",
      storage: "Storage",
      storagename: "256GB ",
      rate: 4,
      price: 249,
      image:
        "https://i.pinimg.com/1200x/be/17/e0/be17e0d708b04b4c6ff058b2a505a367.jpg",
      description:
        " ប្រើសំរាប់ ការងារការិយាល័យ ការរៀនតាមអនឡាញ ការងាររដ្ឋបាល ផ្នែកគណនេយ្យ កាត់ត រូបភាព វិដិអូ កំរិតមធ្យម ចាក់ភ្លេង ។ល។",
    },
    {
      id: 8,
      name: "Apple",
      title: "MacBook Pro ",
      cpu: "CPU",
      cpuname: "M2 Pro",
      ram: "RAM",
      ramname: "16GB",
      gpu: "Size",
      gpuname: "13 inch",
      storage: "Storage",
      storagename: "512GB ",
      rate: 4,
      price: 559,
      image:
        "https://images.khmer24.co/26-02-08/-macbook-pro-793859177054741590060144-j.jpg",
      description:
        " ប្រើសំរាប់ ការងារការិយាល័យ ការរៀនតាមអនឡាញ ការងាររដ្ឋបាល ផ្នែកគណនេយ្យ កាត់ត រូបភាព វិដិអូ កំរិតមធ្យម ចាក់ភ្លេង ។ល។",
    },
    {
      id: 9,
      name: "Apple",
      title: "MacBook Air ",
      cpu: "CPU",
      cpuname: "Intel Core i5",
      ram: "RAM",
      ramname: "8GB",
      gpu: "Size",
      gpuname: "13 inch",
      storage: "Storage",
      storagename: "128GB ",
      rate: 4,
      price: 249,
      image:
        "https://images.khmer24.co/26-02-21/macbook-air-2017-study-amp-working--709862177163897719260679-b.jpg",
      description:
        "The image shows a sleek, modern laptop placed on a wooden desk. The laptop has a thin, minimalist design with a large trackpad and black keyboard. Its screen is on, displaying a lock screen with a forest wallpaper featuring tall trees and sunlight shining through.",
    },
    {
      id: 10,
      name: "Apple",
      title: "MacBook Air M1 2020 ",
      cpu: "CPU",
      cpuname: "Intel Core i5",
      ram: "RAM",
      ramname: "8GB",
      gpu: "Size",
      gpuname: "13 inch",
      storage: "Storage",
      storagename: "128GB ",
      rate: 4,
      price: 1199,
      image:
        "https://images.khmer24.co/26-02-26/macbook-air-m1-2020-13-2-5k-290063177208947416703095-d.jpg",
      description:
        "ស្តុកទើបមកដល់ MacBook Air M1 ស្អាត  សំរាប់ការងាររដ្ធបាល រៀន online កាត់តរូបភាព ថ្មកាន់បានយូ ស្រួលយក តាមខ្លួន ធានាថាអ្នកនឹងពេញចិត្ត។",
    },
    {
      id: 11,
      name: "Apple",
      title: "MacBook Pro M2 Pro",
      cpu: "CPU",
      cpuname: "M2 Pro",
      ram: "RAM",
      ramname: "16GB",
      gpu: "Size",
      gpuname: "13 inch",
      storage: "Storage",
      storagename: "512GB ",
      rate: 4,
      price: 1150,
      image:
        "https://images.khmer24.co/26-02-13/macbook-pro-m2-pro-ram-16g-512g-36283177097683589033858-h.jpg",
      description:
        " The image shows a sleek, modern laptop placed on a wooden desk. The laptop has a thin, minimalist design with a large trackpad and black keyboard. Its screen is on, displaying a lock screen with a forest wallpaper featuring tall trees and sunlight shining through.",
    },
    {
      id: 12,
      name: "Apple",
      title: "MacBook Pro14",
      cpu: "CPU",
      cpuname: "Other",
      ram: "RAM",
      ramname: "16GB",
      gpu: "Size",
      gpuname: "14 inch",
      storage: "Storage",
      storagename: "1TB ",
      rate: 4,
      price: 1718,
      image:
        "https://images.khmer24.co/26-02-13/apple-macbook-pro14-spaceblack-40891177095442650801637-b.jpg",
      description:
        "M5 CHIP-19C-10G/ RAM:16GB/Storage: 1TB PCIE /Screen Size:  14.2 LIQUID RETINA XDR DISPLAY /MACOS.",
    },
    {
      id: 13,
      name: "Apple",
      title: "MacBook Pro 16",
      cpu: "CPU",
      cpuname: "intel Core i9",
      ram: "RAM",
      ramname: "32GB",
      gpu: "Size",
      gpuname: "16 inch",
      storage: "Storage",
      storagename: "1TB ",
      rate: 4,
      price: 1718,
      image:
        "https://images.khmer24.co/25-12-17/macbook-pro-16-2019-32gb-1tb-188542176594314226893784-b.jpg",
      description: "I want to sell my MacBook Pro 16" + " Year 2019.",
    },
    {
      id: 14,
      name: "Apple",
      title: "MacBook Air M2",
      cpu: "CPU",
      cpuname: "M2",
      ram: "RAM",
      ramname: "16GB",
      gpu: "Size",
      gpuname: "13 inch",
      storage: "Storage",
      storagename: "256GB ",
      rate: 4,
      price: 799,
      image:
        "https://images.khmer24.co/26-03-28/macbook-air-m2-new-promotion-799--42276177470776165967098-b.jpg",
      description: `Apple AIr M2 New PROMOTION 799$ 16GB RAM 256GB Storage 2022 Model. We
      have stock at DAVY COMPUTER`,
    },
    {
      id: 15,
      name: "Apple",
      title: "MacBook Air Retina 13 inch",
      cpu: "CPU",
      cpuname: "intel Core i5",
      ram: "RAM",
      ramname: "8GB",
      gpu: "Size",
      gpuname: "13 inch",
      storage: "Storage",
      storagename: "256GB ",
      rate: 4,
      price: 420,
      image:
        "https://images.khmer24.co/26-01-31/macbook-air-retina-13-inch-2020-space-gray-from-usa-100187176985013389259135-b.jpg",
      description:
        "Graphics - Intel Iris Plus Graphics 15.36 MB - ផ្ញើរមកពីអាមេរិក​ អត់ចេះប្រើ    នៅថ្មីស្អាត  95​   មានកាសស្តាប់តាមខ្លួន  មានប្រអប់  មានកាតធានា  មានសាកថ្ម  មានកាសស្តាប់តាមខ្លួន  មានប្រអប់  មានកាតធានា  មានសាកថ្ម  មានកាសស្តាប់តាមខ្លួន  មានប្រអប់  មានកាតធានា  មានសាកថ្ម  មានកាសស្តាប់តាមខ្លួន  មានប្រអប់  មានកាតធានា  មានសាកថ្ម",
    },
    {
      id: 16,
      name: "Apple",
      title: "MacBook Pro 16",
      cpu: "CPU",
      cpuname: "intel Core i9",
      ram: "RAM",
      ramname: "32GB",
      gpu: "Size",
      gpuname: "13 inch",
      storage: "Storage",
      storagename: "512GB ",
      rate: 4,
      price: 670,
      image:
        "https://images.khmer24.co/25-10-09/-macbook-pro-16-i9-ram-32gb-gpu-4gb-ssd-720--178877175998344222465231-b.jpg",
      description:
        "ម៉ាស៊ីនស្អាតដូចថ្មី សមត្ថភាពខ្លាំង សម្រាប់អ្នកចង់បាន MacBook ដើម្បីធ្វើការរូបភាព វីដេអូ និង Multitask ខ្លាំងៗ!",
    },
    {
      id: 17,
      name: "Apple",
      title: "MacBook Air M1",
      cpu: "CPU",
      cpuname: "M1",
      ram: "RAM",
      ramname: "8GB",
      gpu: "Size",
      gpuname: "13 inch",
      storage: "Storage",
      storagename: "512GB ",
      rate: 4,
      price: 440,
      image:
        "https://images.khmer24.co/26-04-03/macbook-air-m1-99--1235449177519560391647104-b.jpg",
      description:
        "Macbook Air M1 នៅស្អាត សំណុំZin ប្រើការងារបានធម្មតា សម្រាប់ការងារការិយាល័យ កាត់តរូបភាព វីដេអូ និង Multitask ខ្លាំងៗ!",
    },
    {
      id: 18,
      name: "Apple",
      title: "MacBook Pro 2020",
      cpu: "CPU",
      cpuname: "intel Core i7",
      ram: "RAM",
      ramname: "8GB",
      gpu: "Size",
      gpuname: "13 inch",
      storage: "Storage",
      storagename: "512GB ",
      rate: 4,
      price: 590,
      image:
        "https://images.khmer24.co/26-03-08/99-macbook-pro-2020-13-inch-intel-core-i7-32gb-ram-512gb-hard-drive-422293177294695879915670-b.jpg",
      description: "Have Charger and 1 month warranty.",
    },
    {
      id: 19,
      name: "Apple",
      title: "MacBook Pro 2016",
      cpu: "CPU",
      cpuname: "intel Core i5",
      ram: "RAM",
      ramname: "8GB",
      gpu: "Size",
      gpuname: "13 inch",
      storage: "Storage",
      storagename: "512GB ",
      rate: 4,
      price: 430,
      image:
        "https://images.khmer24.co/24-07-25/sell-macbook-pro-2016-104890172192167982581569-b.jpg",
      description: "Hello I have MacBook Pro 2016 for sale for 430$ only.",
    },
    {
      id: 20,
      name: "Apple",
      title: "MacBook Pro M1",
      cpu: "CPU",
      cpuname: "M1",
      ram: "RAM",
      ramname: "16GB",
      gpu: "Size",
      gpuname: "13 inch",
      storage: "Storage",
      storagename: "512GB ",
      rate: 4,
      price: 730,
      image:
        "https://images.khmer24.co/26-02-08/macbook-pro-m1-945698177052867422983349-g.jpg",
      description: "",
    },
    {
      id: 20,
      name: "Apple",
      title: "MacBook Pro 13",
      cpu: "CPU",
      cpuname: "M2",
      ram: "RAM",
      ramname: "16GB",
      gpu: "Size",
      gpuname: "13 inch",
      storage: "Storage",
      storagename: "512GB ",
      rate: 4,
      price: 499,
      image:
        "https://images.khmer24.co/26-03-19/macbook-pro-13-2020-1233235177392705319692873-d.jpg",
      description:
        "MacBook Pro 13 inch 2020 (M1) ស្អាត99% មានកាសស្តាប់តាមខ្លួន មានប្រអប់ មានកាតធានា មានសាកថ្ម មានកាសស្តាប់តាមខ្លួន មានប្រអប់ មានកាតធានា មានសាកថ្ម មានកាសស្តាប់តាមខ្លួន មានប្រអប់ មានកាតធានា មានសាកថ្ម",
    },
    {
      id: 21,
      name: "Apple",
      title: "MacBook M1 Pro",
      cpu: "CPU",
      cpuname: "M1 Pro",
      ram: "RAM",
      ramname: "16GB",
      gpu: "Size",
      gpuname: "16 inch",
      storage: "Storage",
      storagename: "512GB ",
      rate: 4,
      price: 499,
      image:
        "https://images.khmer24.co/25-11-24/macbook-m1-pro-1230761176397202647785314-b.jpg",
      description:
        "MacBook Pro 16 inch M1 Pro 2021 ស្អាត99% មានកាសស្តាប់តាមខ្លួន មានប្រអប់ មានកាតធានា មានសាកថ្ម មានកាសស្តាប់តាមខ្លួន មានប្រអប់ មានកាតធានា មានសាកថ្ម មានកាសស្តាប់តាមខ្លួន មានប្រអប់ មានកាតធានា មានសាកថ្ម",
    },
    {
      id: 22,
      name: "Apple",
      title: "Macbook AIr ",
      cpu: "CPU",
      cpuname: "Air Core i5",
      ram: "RAM",
      ramname: "8GB",
      gpu: "Size",
      gpuname: "16 inch",
      storage: "Storage",
      storagename: "256GB ",
      rate: 4,
      price: 399,
      image:
        "https://images.khmer24.co/26-03-19/macbook-air-secondhand-promotion-399--42276177390217514419894-b.jpg",
      description:
        "MacBook Air Secondhand PROMOTION 399$ 8GB RAM 256GB Storage 2020 Model. We have stock at DAVY COMPUTER",
    },
    {
      id: 23,
      name: "Apple",
      title: "Macbook Air M2  ",
      cpu: "CPU",
      cpuname: "M2",
      ram: "RAM",
      ramname: "16GB",
      gpu: "Size",
      gpuname: "16 inch",
      storage: "Storage",
      storagename: "256GB ",
      rate: 4,
      price: 399,
      image:
        "https://images.khmer24.co/26-03-28/macbook-air-m2-new-promotion-799--42276177470776165967098-b.jpg",
      description: " MacBook Air M2 New PROMOTION 399$ 16GB RAM 256GB Storage 2022 Model. We have stock at DAVY COMPUTER",
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
        <h1 className="text-xl sm:text-2xl md:text-4xl font-bold">Macbook</h1>
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

export default Macbook;
