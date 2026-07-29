import React from "react";
import { Link } from "react-router-dom";

function Wishlist({ wishlist, setWishlist, setCart }) {
  const handleRemove = (id) => {
    setWishlist((prevWishlist) =>
      prevWishlist.filter((item) => item.id !== id),
    );
  };

  const handleAddToCart = (product) => {
    setCart((prevCart) => {
      const exist = prevCart.find((item) => item.id === product.id);
      if (exist) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item,
        );
      }
      return [...prevCart, { ...product, qty: 1 }];
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 pt-20 px-4 sm:px-6 lg:px-8 pb-16">
      <div className="max-w-7xl mx-auto">
        <div className="rounded-3xl bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 text-white p-8 shadow-xl mb-8 flex flex-col md:flex-row items-start md:items-center justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-blue-100">
              Your wishlist
            </p>
            <h1 className="text-3xl sm:text-4xl font-bold mt-2">
              Save your favorite tech
            </h1>
            <p className="text-blue-100 mt-3 max-w-2xl">
              Keep the products you love close by and move them to your cart
              whenever you are ready.
            </p>
          </div>

          <div className="mt-5 md:mt-0 rounded-2xl bg-white/20 backdrop-blur-sm px-5 py-4 text-center min-w-[140px]">
            <p className="text-3xl font-bold">{wishlist.length}</p>
            <p className="text-sm text-blue-100">items saved</p>
          </div>
        </div>

        {wishlist.length === 0 ? (
          <div className="rounded-3xl border border-dashed border-gray-300 bg-white p-10 text-center shadow-sm">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-red-100 text-red-500 text-3xl">
              <i className="fa-solid fa-heart"></i>
            </div>
            <h2 className="mt-6 text-2xl font-semibold text-gray-800">
              Your wishlist is empty
            </h2>
            <p className="mt-2 text-gray-500">
              Explore products and tap the heart icon to save your favorites.
            </p>
            <Link to="/products">
              <button className="mt-6 rounded-full bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700">
                Continue shopping
              </button>
            </Link>
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {wishlist.map((product) => (
              <div
                key={product.id}
                className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <img
                  src={product.image}
                  alt={product.title}
                  className="h-48 w-full object-cover"
                />

                <div className="p-5">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium text-blue-600">
                      {product.name}
                    </p>
                    <button
                      onClick={() => handleRemove(product.id)}
                      className="rounded-full bg-red-50 p-2 text-red-500 transition hover:bg-red-100"
                    >
                      <i className="fa-solid fa-trash"></i>
                    </button>
                  </div>

                  <h3 className="mt-2 text-lg font-semibold text-gray-900">
                    {product.title}
                  </h3>
                  <p className="mt-2 text-sm text-gray-500 line-clamp-3">
                    {product.description ||
                      "Premium device with outstanding performance and elegant design."}
                  </p>

                  <div className="mt-4 flex items-center justify-between">
                    <p className="text-xl font-bold text-gray-900">
                      ${product.price}
                    </p>
                    <div className="flex gap-2">
                      <button
                        onClick={() => handleAddToCart(product)}
                        className="rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-700"
                      >
                        Add to cart
                      </button>
                      <Link to="/detail" state={{ product }}>
                        <button className="rounded-full border border-gray-300 px-4 py-2 text-sm font-semibold text-gray-700 transition hover:bg-gray-100">
                          View
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Wishlist;
