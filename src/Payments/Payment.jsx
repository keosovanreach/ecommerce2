import React from "react";
import { useLocation } from "react-router-dom";

function Payment() {
  const location = useLocation();
  const orderData = location.state || {};

  const {
    cart = [],
    customerInfo = {},
    address = {},
    paymentMethod = "",
    delivery = "",
    subtotal = 0,
    discount = 0,
    shipping = 0,
    total = 0,
  } = orderData;

  return (
    <div className="w-full min-h-screen bg-gray-50 text-gray-800">
      <div className="mx-auto max-w-4xl px-4 py-8 py-12 sm:px-6 lg:px">
        <h1 className="text-3xl font-bold text-center mb-8 mt-8 text-gray-900" >
          Complete Your Payment
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Order Summary */}
          <div className="lg:col-span-2">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-4 text-gray-900">
                Order Summary
              </h2>

              {/* Order Items */}
              <div className="space-y-3 mb-6">
                {cart.map((item) => (
                  <div
                    key={item.id}
                    className="flex justify-between items-center border-b pb-2"
                  >
                    <div className="flex items-center space-x-3">
                      <img
                        src={item.image}
                        className="w-12 h-12 object-cover rounded"
                        alt={item.name}
                      />
                      <div>
                        <p className="font-medium">{item.name}</p>
                        <p className="text-sm text-gray-500">Qty: {item.qty}</p>
                      </div>
                    </div>
                    <p className="font-semibold">
                      ${(item.price * item.qty).toLocaleString()}
                    </p>
                  </div>
                ))}
              </div>

              {/* Pricing */}
              <div className="border-t pt-4 space-y-2">
                <div className="flex justify-between">
                  <span>Subtotal:</span>
                  <span>${subtotal.toLocaleString()}</span>
                </div>
                {discount > 0 && (
                  <div className="flex justify-between text-green-600">
                    <span>Discount:</span>
                    <span>-${(subtotal * discount).toLocaleString()}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span>Shipping:</span>
                  <span>${shipping.toLocaleString()}</span>
                </div>
                <div className="border-t pt-2 flex justify-between font-bold text-lg">
                  <span>Total:</span>
                  <span>${total.toLocaleString()}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Payment Details */}
          <div className="space-y-6">
           
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-semibold mb-3">Customer</h3>
              <p className="text-sm">
                {customerInfo.firstName} {customerInfo.lastName}
              </p>
              <p className="text-sm text-gray-600">{customerInfo.email}</p>
            </div>

            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-semibold mb-3">Shipping</h3>
              <p className="text-sm">{address.street}</p>
              <p className="text-sm">
                {address.city}, {address.state} {address.zipCode}
              </p>
              <p className="text-sm text-gray-600 capitalize">
                {delivery} Delivery
              </p>
            </div>

            {/* Payment Method */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-semibold mb-3">Payment</h3>
              <p className="text-sm capitalize">{paymentMethod}</p>
            </div>

           
            <a
              href={`https://link.payway.com.kh/aba?id=EB2717207E25&dynamic=true&source_caller=sdk&pid=af_app_invites&link_action=abaqr&shortlink=60oajmze&amount=${total.toLocaleString()}&af_from_app=true&acc=005036627&af_siteid=968860649&userid=EB2717207E25&code=420400&c=abaqr&af_referrer_uid=1741003022679-5382451`}
              target="_blank"
            >
              <button
                className="w-full bg-green-600 text-white py-4 px-6 rounded-lg font-semibold hover:bg-green-700 transition duration-200 text-lg"
                onClick={() => alert("Payment successful!")}
              >
                Pay ${total.toLocaleString()}
              </button>
            </a>

            <p className="text-center text-xs text-gray-500">
              Secure payment powered by SSL encryption
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
