import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar({ cartCount, wishlistCount }) {
  const [open, setOpen] = useState(false);

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
    { name: "Categories", path: "/categories" },
  ];

  return (
    <div className="flex justify-between items-center h-[50px] bg-white px-4 lg:px-20 fixed top-0 w-full z-50 shadow space-x-4">
      <h1 className="text-2xl font-poppins font-bold text-blue-500 ">
        TechStore
      </h1>

      <div className="hidden md:flex items-center space-x-8 font-bold font-poppins">
        <ul className="flex space-x-6 text-black">
          {menuItems.map((item) => (
            <li
              key={item.name}
              className="cursor-pointer hover:text-blue-500 active:hover:text-blue-500"
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
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-2 py-0.5 mt-1 mr-2 rounded-md items-center cursor-pointer active:hover:bg-blue-600 ">
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
          </div>
        </div>

        <div className="hidden md:flex flex items-center space-x-4 ">
          <div className="relative">
            <Link to="/wishlist">
              <i className="fa-solid fa-heart cursor-pointer active:text-red-500 hover:text-red-500 transition-transform hover:scale-110"></i>
            </Link>
            {wishlistCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                {wishlistCount}
              </span>
            )}
          </div>

          <div className="relative">
            <Link to="/checkout">
              <i className="fa-solid fa-cart-shopping cursor-pointer active:text-blue-500 hover:text-blue-500 transition-transform hover:scale-110"></i>
            </Link>
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                {cartCount}
              </span>
            )}
          </div>

          <div>
            <Link to="/login">
              <i className=" fa-solid fa-user cursor-pointer active:text-blue-500 hover:text-blue-500 transition-transform hover:scale-110"></i>
            </Link>
          </div>
        </div>
      </div>

      <div className="relative md:hidden">
        <button className="text-black text-3xl" onClick={() => setOpen(!open)}>
          ☰
        </button>

        {cartCount > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
            {cartCount}
          </span>
        )}
      </div>

      {/* Mobile Menu */}
      {open && (
        <>
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={() => setOpen(false)}
          ></div>
          <div
            className={`fixed top-0 left-0 h-full w-80 bg-white shadow-lg transform ${open ? "translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out z-50`}
          >
            <div className="flex justify-between items-center p-4 border-b">
              <h1 className="text-xl font-bold text-blue-500">TechStore</h1>
              <button
                className="text-black text-2xl"
                onClick={() => setOpen(false)}
              >
                ✕
              </button>
            </div>
            <div className="p-4">
              <div className="flex items-center border-2 border-gray-300 rounded-md mb-4">
                <i className="fa-solid fa-magnifying-glass mt-1 mx-2"></i>
                <input
                  type="text"
                  placeholder="Search categories..."
                  className="flex-grow px-2 py-2 rounded-md outline-none text-black bg-white"
                />
              </div>
              <ul className="space-y-4">
                {menuItems.map((item) => (
                  <li key={item.name} onClick={() => setOpen(false)}>
                    <Link
                      className="block py-2 text-black hover:text-blue-500 transition"
                      to={item.path}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="flex items-center space-x-4 mt-6 pt-4 border-t">
                <div className="relative">
                  <Link to="/wishlist" onClick={() => setOpen(false)}>
                    <i className="fa-solid fa-heart cursor-pointer hover:text-red-500 transition-transform hover:scale-110"></i>
                  </Link>
                  {wishlistCount > 0 && (
                    <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                      {wishlistCount}
                    </span>
                  )}
                </div>
                <div className="relative">
                  <Link to="/checkout" onClick={() => setOpen(false)}>
                    <i className="fa-solid fa-cart-shopping cursor-pointer hover:text-blue-500 transition-transform hover:scale-110"></i>
                  </Link>
                  {cartCount > 0 && (
                    <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                      {cartCount}
                    </span>
                  )}
                </div>
                <Link to="/login" onClick={() => setOpen(false)}>
                  <i className="fa-solid fa-user cursor-pointer hover:text-blue-500 transition-transform hover:scale-110"></i>
                </Link>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Navbar;
