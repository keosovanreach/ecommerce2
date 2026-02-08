
import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar({ cartCount }) {
  const [open, setOpen] = useState(false);

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
    { name: "Categories", path: "/categories" },
  ];

  return (
    <div className="flex justify-between items-center h-[70px] bg-white px-4 lg:px-20 fixed top-0 w-full z-50 shadow space-x-4">
      <h1 className="text-2xl font-poppins font-bold text-blue-500">
        TechStore
      </h1>

      <div className="hidden md:flex items-center space-x-8">
        <ul className="flex space-x-6 text-black">
          {menuItems.map((item) => (
            <li
              key={item.name}
              className="cursor-pointer hover:text-blue-500 font-bold transition-transform hover:scale-110"
            >
              <Link to={item.path}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex items-center space-x-4">
        <div className="hidden lg:flex item-center max-w-md w-full mx-3 border-2  border-gray-300 rounded-md">
          <i className="fa-solid fa-magnifying-glass mt-3 mx-2"></i>
          <input
            type="text"
            placeholder="Search categories..."
            className=" flex-grow px-4 py-1.5 rounded-md outline-none text-black bg-white"
          />
          <div>
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-2 py-0.5 mt-1 mr-2 rounded-md items-center">
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
          </div>
        </div>

        <div className="hidden md:flex flex items-center space-x-4 ">
          <div>
            <i className=" fa-solid fa-cart-shopping cursor-pointer active:text-blue-500  hover:text-blue-500 transition-transform hover:scale-110"></i>
          </div>
          <div>
            <i className=" fa-solid fa-user cursor-pointer active:text-blue-500 hover:text-blue-500 transition-transform hover:scale-110"></i>
          </div>
        </div>
      </div>

      <button
        className="md:hidden text-black text-3xl"
        onClick={() => setOpen(!open)}
      >
        ☰
      </button>

      {open && (
        <div className="fixed top-0 left-0 w-full h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex flex-col items-center justify-center z-50">
          <button
            className="absolute top-4 right-4 text-black text-3xl"
            onClick={() => setOpen(false)}
          >
            ✕
          </button>
          

          <ul className="flex flex-col items-center space-y-6 text-2xl font-bold text-white font-poppins ">
            {menuItems.map((item) => (
              <li key={item.name} onClick={() => setOpen(false)}>
                <Link className="hover:text-blue-500" to={item.path}>
                  {item.name}
                </Link>
              </li>
            ))}
            <div className=" flex items-center space-x-4 ">
              <div className=" relative">
                <i className="fa-solid fa-cart-shopping cursor-pointer active:text-blue-500  hover:text-blue-500 transition-transform hover:scale-110"></i>
              </div>
              <div className=" relative">
                <i className="fa-solid fa-user cursor-pointer active:text-blue-500 hover:text-blue-500 transition-transform hover:scale-110"></i>
              </div>
            </div>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Navbar;
