import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Detail({ setCart, wishlist, setWishlist }) {
  const location = useLocation();
  const navigate = useNavigate();
  const product = location.state?.product;

  const [qty, setQty] = useState(1);

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center mt-10">
        <p className="text-xl text-gray-400">No product selected</p>
        <button
          onClick={() => navigate(-1)}
          className="ml-4 px-4 py-2 bg-pink-500 rounded hover:bg-red-600 transition"
        >
          Go Back
        </button>
      </div>
    );
  }

  const price = product.price;

  // Handle Add to Cart
  const handleAddToCart = () => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + qty } : item,
        );
      } else {
        return [...prevCart, { ...product, qty }];
      }
    });
    alert("Added to cart!");
  };

  const handleWishlistToggle = () => {
    setWishlist((prevWishlist) => {
      const exists = prevWishlist.some((item) => item.id === product.id);
      if (exists) {
        return prevWishlist.filter((item) => item.id !== product.id);
      }
      return [...prevWishlist, product];
    });
  };

  const isWishlisted = wishlist.some((item) => item.id === product.id);

  return (
    <div
      id="detail"
      className="min-h-screen bg-gray-300 text-black flex items-center justify-center px-4 py-10"
    >
      <div className="max-w-5xl w-full p-6 md:p-10 grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
        {/* Product Image */}
        <div className="flex justify-center">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-[430px] max-w-md object-cover rounded-lg"
          />
        </div>

        {/* Product Details */}
        <div className="space-y-4">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
            {product.name}
          </h1>

          <div className="flex items-center text-yellow-500 space-x-1">
            {"★".repeat(product.rate) +
              "☆".repeat(5 - product.rate).slice(0, 5)}
            <span className="text-sm text-gray-600 ml-2">
              4.5/5 (124 reviews)
            </span>
          </div>

          <p className="text-2xl font-bold text-green-600">${price}</p>

          {/* Description */}
          <h2 className="text-lg font-semibold text-gray-800">Description</h2>
          <p className="text-gray-600 text-sm">{product.description}</p>

          {/* Specs */}
          <div className="grid grid-cols-2 gap-2 text-sm text-gray-700 border-t border-gray-300 pt-4">
            <p className="text-gray-600 text-xs grid grid-cols-2 gap-2">
              <strong>{product.cpu}:</strong> {product.cpuname}
            </p>
            <p className="text-gray-600 text-xs grid grid-cols-2 gap-2">
              <strong>{product.ram}:</strong> {product.ramname}
            </p>
            <p className="text-gray-600 text-xs grid grid-cols-2 gap-2">
              <strong>{product.gpu}:</strong> {product.gpuname}
            </p>
            <p className="text-gray-600 text-xs grid grid-cols-2 gap-2">
              <strong>{product.storage}:</strong> {product.storagename}
            </p>
          </div>

          {/* Quantity */}
          <div>
            <p className="font-poppins text-gray-600">Quantity: {qty}</p>
            <div className="flex items-center gap-2 mt-1 border border-gray-900 rounded-lg w-max px-1 py-0">
              <button
                onClick={() => setQty(Math.max(1, qty - 1))}
                className="text-gray-700 px-3 py-1 rounded-lg hover:bg-gray-400 transition"
              >
                -
              </button>
              <span className="text-lg">{qty}</span>
              <button
                onClick={() => setQty(qty + 1)}
                className="text-gray-700 px-3 py-1 rounded-lg hover:bg-gray-400 transition"
              >
                +
              </button>
            </div>

            {/* Total */}
            <div className="grid grid-cols-2 gap-2 mt-4">
              <h1 className="text-lg font-bold">Total: </h1>
              <span className="text-red-600 font-bold text-lg">
                ${(price * qty).toLocaleString()}
              </span>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-2 md:pt-4">
              <button
                onClick={handleAddToCart}
                className="flex-1 bg-indigo-600 text-white py-3 rounded-xl font-semibold hover:bg-indigo-700 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
              >
                Add to Cart
              </button>

              <button
                className={`flex-1 border py-3 rounded-xl font-semibold transition cursor-pointer ${
                  isWishlisted
                    ? "border-red-500 bg-red-50 text-red-600"
                    : "border-gray-500 hover:bg-red-600 hover:text-white"
                }`}
                onClick={handleWishlistToggle}
              >
                {isWishlisted ? "♥ Added to Wishlist" : "♡ Add to Wishlist"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Detail;
