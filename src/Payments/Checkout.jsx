import React, { useState } from "react";
import { Link } from "react-router-dom";

function Checkout({ cart, setCart }) {
  const [promo, setPromo] = useState("");
  const [discount, setDiscount] = useState(0);

  // Customer Information
  const [customerInfo, setCustomerInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });

  // Shipping Address
  const [address, setAddress] = useState({
    street: "",
    city: "",
    state: "",
    zipCode: "",
    country: "",
  });

  // Payment Method
  const [paymentMethod, setPaymentMethod] = useState("creditCard");
  const [cardDetails, setCardDetails] = useState({
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    nameOnCard: "",
  });

  const [delivery, setDelivery] = useState("standard");

  // Update quantity
  const updateQty = (id, newQty) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, qty: Math.max(1, newQty) } : item,
      ),
    );
  };

  // Remove item
  const removeItem = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  // Apply promo code
  const applyPromo = () => {
    if (promo.trim().toLowerCase() === "save10") {
      setDiscount(0.1);
      alert("Promo applied! 10% off your order.");
    } else {
      setDiscount(0);
      alert("Invalid promo code");
    }
  };

  // Calculations
  const subtotal = cart.reduce(
    (total, item) => total + item.price * item.qty,
    0,
  );

  const shipping = cart.length === 0 ? 0 : delivery === "express" ? 1 : 1;

  const total = subtotal * (1 - discount) + shipping;

  const isFormValid = () => {
    return (
      cart.length > 0 &&
      customerInfo.firstName &&
      customerInfo.lastName &&
      customerInfo.email &&
      customerInfo.phone &&
      address.street &&
      address.city &&
      address.state &&
      address.zipCode &&
      address.country &&
      (paymentMethod === "creditCard"
        ? cardDetails.cardNumber &&
          cardDetails.expiryDate &&
          cardDetails.cvv &&
          cardDetails.nameOnCard
        : true)
    );
  };

  return (
    <div className="w-full min-h-screen bg-gray-50 text-gray-800">
      <div className="mx-auto max-w-7xl px-4 py-8 ">
        <h1 className="text-3xl font-bold text-center mb-8  md:text-4xl text-gray-900 py-10">
          Checkout
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Cart Items */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-4 text-gray-900">
                Your Cart ({cart.length} items)
              </h2>

              {cart.length === 0 ? (
                <p className="text-gray-500 text-center py-8">
                  Your cart is empty.{" "}
                  <Link to="/" className="text-blue-600 hover:underline">
                    Continue shopping
                  </Link>
                </p>
              ) : (
                <div className="space-y-4">
                  {cart.map((item) => (
                    <div
                      key={item.id}
                      className="flex items-center justify-between border-b pb-4"
                    >
                      <div className="flex items-center space-x-4">
                        <img
                          src={item.image}
                          className="w-20 h-20 object-cover rounded-lg"
                          alt={item.name}
                        />
                        <div>
                          <h3 className="font-semibold text-gray-900">
                            {item.name}
                          </h3>
                          <p className="text-sm text-gray-500">
                            {item.category}
                          </p>
                          <p className="text-lg font-bold text-gray-900">
                            ${item.price}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center space-x-4">
                        <div className="flex items-center border rounded-lg">
                          <button
                            onClick={() => updateQty(item.id, item.qty - 1)}
                            className="px-3 py-1 hover:bg-gray-100 rounded-l-lg"
                          >
                            -
                          </button>
                          <span className="px-3 py-1 font-medium">
                            {item.qty}
                          </span>
                          <button
                            onClick={() => updateQty(item.id, item.qty + 1)}
                            className="px-3 py-1 hover:bg-gray-100 rounded-r-lg"
                          >
                            +
                          </button>
                        </div>

                        <p className="font-semibold text-lg w-20 text-right">
                          ${(item.price * item.qty).toLocaleString()}
                        </p>

                        <button
                          onClick={() => removeItem(item.id)}
                          className="text-red-500 hover:text-red-700 p-2"
                        >
                          <svg
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Customer Information */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-4 text-gray-900">
                Customer Information
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="First Name"
                  value={customerInfo.firstName}
                  onChange={(e) =>
                    setCustomerInfo({
                      ...customerInfo,
                      firstName: e.target.value,
                    })
                  }
                  className="border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  value={customerInfo.lastName}
                  onChange={(e) =>
                    setCustomerInfo({
                      ...customerInfo,
                      lastName: e.target.value,
                    })
                  }
                  className="border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="email"
                  placeholder="Email"
                  value={customerInfo.email}
                  onChange={(e) =>
                    setCustomerInfo({ ...customerInfo, email: e.target.value })
                  }
                  className="border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="tel"
                  placeholder="Phone"
                  value={customerInfo.phone}
                  onChange={(e) =>
                    setCustomerInfo({ ...customerInfo, phone: e.target.value })
                  }
                  className="border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            {/* Shipping Address */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-4 text-gray-900">
                Shipping Address
              </h2>
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Street Address"
                  value={address.street}
                  onChange={(e) =>
                    setAddress({ ...address, street: e.target.value })
                  }
                  className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <input
                    type="text"
                    placeholder="City"
                    value={address.city}
                    onChange={(e) =>
                      setAddress({ ...address, city: e.target.value })
                    }
                    className="border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <input
                    type="text"
                    placeholder="State"
                    value={address.state}
                    onChange={(e) =>
                      setAddress({ ...address, state: e.target.value })
                    }
                    className="border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <input
                    type="text"
                    placeholder="ZIP Code"
                    value={address.zipCode}
                    onChange={(e) =>
                      setAddress({ ...address, zipCode: e.target.value })
                    }
                    className="border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <input
                  type="text"
                  placeholder="Country"
                  value={address.country}
                  onChange={(e) =>
                    setAddress({ ...address, country: e.target.value })
                  }
                  className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            {/* Delivery Options */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-4 text-gray-900">
                Delivery Options
              </h2>
              <div className="space-y-3">
                <label className="flex items-center space-x-3 cursor-pointer">
                  <input
                    type="radio"
                    value="standard"
                    checked={delivery === "standard"}
                    onChange={(e) => setDelivery(e.target.value)}
                    className="text-blue-600 focus:ring-blue-500"
                  />
                  <div>
                    <span className="font-medium">Standard Delivery</span>
                    <p className="text-sm text-gray-500">
                      5-7 business days - $1.00
                    </p>
                  </div>
                </label>
                <label className="flex items-center space-x-3 cursor-pointer">
                  <input
                    type="radio"
                    value="express"
                    checked={delivery === "express"}
                    onChange={(e) => setDelivery(e.target.value)}
                    className="text-blue-600 focus:ring-blue-500"
                  />
                  <div>
                    <span className="font-medium">Express Delivery</span>
                    <p className="text-sm text-gray-500">
                      1-2 business days - $1.00
                    </p>
                  </div>
                </label>
              </div>
            </div>

            {/* Payment Method */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-4 text-gray-900">
                Payment Method
              </h2>
              <div className="space-y-4">
                <div className="flex space-x-4">
                  <label className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="radio"
                      value="creditCard"
                      checked={paymentMethod === "creditCard"}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                      className="text-blue-600 focus:ring-blue-500"
                    />
                    <span>Credit Card</span>
                  </label>
                  <label className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="radio"
                      value="ABA"
                      checked={paymentMethod === "ABA"}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                      className="text-blue-600 focus:ring-blue-500"
                    />
                    <span>ABA</span>
                  </label>
                  <label className="flex items-center space-x-2 cursor-pointer">
                    <input
                      type="radio"
                      value="ACLEDA"
                      checked={paymentMethod === "ACLEDA"}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                      className="text-blue-600 focus:ring-blue-500"
                    />
                    <span>ACLEDA</span>
                  </label>
                </div>

                {paymentMethod === "creditCard" && (
                  <div className="space-y-4">
                    <input
                      type="text"
                      placeholder="Card Number"
                      value={cardDetails.cardNumber}
                      onChange={(e) =>
                        setCardDetails({
                          ...cardDetails,
                          cardNumber: e.target.value,
                        })
                      }
                      className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <div className="grid grid-cols-2 gap-4">
                      <input
                        type="text"
                        placeholder="MM/YY"
                        value={cardDetails.expiryDate}
                        onChange={(e) =>
                          setCardDetails({
                            ...cardDetails,
                            expiryDate: e.target.value,
                          })
                        }
                        className="border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                      <input
                        type="text"
                        placeholder="CVV"
                        value={cardDetails.cvv}
                        onChange={(e) =>
                          setCardDetails({
                            ...cardDetails,
                            cvv: e.target.value,
                          })
                        }
                        className="border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <input
                      type="text"
                      placeholder="Name on Card"
                      value={cardDetails.nameOnCard}
                      onChange={(e) =>
                        setCardDetails({
                          ...cardDetails,
                          nameOnCard: e.target.value,
                        })
                      }
                      className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Order Summary Sidebar */}
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md sticky top-4">
              <h2 className="text-xl font-semibold mb-4 text-gray-900">
                Order Summary
              </h2>

              <div className="space-y-2 mb-4">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>${subtotal.toLocaleString()}</span>
                </div>

                {discount > 0 && (
                  <div className="flex justify-between text-green-600">
                    <span>Discount (10%)</span>
                    <span>-${(subtotal * discount).toLocaleString()}</span>
                  </div>
                )}

                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span>${shipping.toLocaleString()}</span>
                </div>
              </div>

              <div className="border-t pt-4 mb-6">
                <div className="flex justify-between text-xl font-bold">
                  <span>Total</span>
                  <span>${total.toLocaleString()}</span>
                </div>
              </div>

              {/* Promo Code */}
              <div className="mb-6">
                <label className="block text-sm font-medium mb-2">
                  Promo Code
                </label>
                <div className="flex">
                  <input
                    type="text"
                    value={promo}
                    onChange={(e) => setPromo(e.target.value)}
                    placeholder="Enter code"
                    className="flex-1 border rounded-l-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <button
                    onClick={applyPromo}
                    className="px-4 bg-blue-600 text-white rounded-r-lg hover:bg-blue-700"
                  >
                    Apply
                  </button>
                </div>
              </div>
              <Link
                to="/Payments"
                state={{
                  cart: cart,
                  customerInfo: customerInfo,
                  address: address,
                  paymentMethod: paymentMethod,
                  delivery: delivery,
                  subtotal: subtotal,
                  discount: discount,
                  shipping: shipping,
                  total: total,
                }}
              >
                <button
                  className={`w-full py-3 rounded-lg font-semibold text-white ${
                    isFormValid()
                      ? "bg-green-600 hover:bg-green-700"
                      : "bg-gray-400 cursor-not-allowed"
                  }`}
                  disabled={!isFormValid()}
                >
                  Complete Order
                </button>
              </Link>
              <Link to="/">
                <p className="text-center mt-4 text-blue-600 hover:underline">
                  ← Continue Shopping
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
