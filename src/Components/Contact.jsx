import React from "react";

function Contact() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-20">
      <div className="max-w-7xl mx-auto px-10 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-3xl sm:text-xl font-bold text-gray-800">
            Contact Me
          </h1>

          <form className="space-y-3">
            <label htmlFor="name" className="block text-sm text-gray-700">
              Your Name
            </label>

            <input
              id="name"
              type="text"
              placeholder="Enter Your Name"
              className="w-full px-4 py-2 text-sm rounded-md border border-gray-300 focus:ring-1 focus:ring-blue-500 focus:outline-none"
            />
            <label htmlFor="email" className="block text-sm text-gray-700">
              Your Email
            </label>

            <input
              id="email"
              type="text"
              placeholder="Enter Your Email"
              className="w-full px-4 py-2 text-sm rounded-md border border-gray-300 focus:ring-1 focus:ring-blue-500 focus:outline-none"
            />
            <label
              htmlFor="ProductName"
              className="block text-sm text-gray-700"
            >
              Your Product
            </label>

            <input
              id="product"
              type="text"
              placeholder="Enter Your Product"
              className="w-full px-4 py-2 text-sm rounded-md border border-gray-300 focus:ring-1 focus:ring-blue-500 focus:outline-none"
            />
            <label htmlFor="message" className="block text-sm text-gray-700">
              Message
            </label>

            <textarea
              id="message"
              rows="4"
              placeholder="Enter Your Message"
              className="w-full px-4 py-2 text-sm rounded-md border border-gray-300 focus:ring-1 focus:ring-blue-500 focus:outline-none"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-blue-500 py-2 rounded-md cursor-pointer hover:bg-blue-600 transition duration-300"
            >
              <span className="flex items-center justify-center space-x-2 text-white">
                Send Message
              </span>
            </button>
          </form>
        </div>
        <div className="space-y-6">
          <h1 className="text-3xl md:text-2xl sm:text-xl text-gray-800 font-bold">
            Get In Touch
          </h1>
          <p className="text-gray-600 leading-relaxed">
            I'm always open to discussing new projects, creative ideas or
            opportunities to be part of your visions.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <a href="tel:077263481">
              <p className="flex items-center space-x-2 ">
                <i className="fa-solid fa-phone text-lg md:text-base sm:text-sm text-orange-500"></i>
                <span className="text-lg font-semibold text-gray-600 md:text-base sm:text-sm">
                  077 263 481
                </span>
              </p>
            </a>
            <a href="mailto:Rech168@gmail.com">
              <p className="flex items-center space-x-2">
                <i className="fa-solid fa-envelope text-lg md:text-base sm:text-sm text-orange-500"></i>
                <span className="text-100px font-semibold text-gray-600 md:text-base sm:text-sm">
                  Rech168@gmail.com
                </span>
              </p>
            </a>
            <p className="flex items-center space-x-2">
              <i className="fa-solid fa-globe text-lg md:text-base sm:text-sm text-orange-500"></i>
              <span className="text-lg font-semibold text-gray-600 md:text-base sm:text-sm">
                Website
              </span>
            </p>

            <p className="flex items-center space-x-2">
              <i className="fa-solid fa-location-dot text-xl text-orange-500"></i>
              <span className="text-2xl font-semibold text-gray-600 text-xl md:text-lg sm:text-lg">
                Address
              </span>
            </p>
          </div>
          <div className="space-y-4">
            <h2 className="text-xl font-bold text-gray-800">Business Hours</h2>
            <div className="text-gray-600 space-y-1">
              <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
              <p>Saturday: 10:00 AM - 4:00 PM</p>
              <p>Sunday: Closed</p>
            </div>
          </div>
          <div className="space-y-6">
            <h1 className="text-xl md:text-xl sm:text-xl text-gray-800 font-bold">
              Follow Me
            </h1>
            <div className="flex items-center space-x-4 cursor-pointer">
              <i className="fa-brands fa-github text-2xl   hover:text-blue-500 transform transition duration-300"></i>
              <i className="fa-brands fa-facebook text-2xl text-blue-600 hover:text-red-600 transform transition duration-300 "></i>
              <i className="fa-brands fa-instagram text-2xl text-red-700  hover:text-blue-500 transform transition duration-300"></i>
              <i className="fa-brands fa-linkedin text-2xl text-blue-600  hover:text-red-600 transform transition duration-300"></i>
            </div>
          </div>
        </div>
        {/* Map */}
        {/* Map */}
        <div className="w-full h-[300px] md:col-span-2 mt-6">
          <iframe
            title="map"
            className="w-full h-full rounded-lg border"
            src="https://www.google.com/maps?q=Phnom%20Penh&output=embed"
            loading="lazy"
          ></iframe>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="max-w-7xl mx-auto px-10 mt-16">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
          Frequently Asked Questions
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-gray-800">
                How can I place an order?
              </h3>
              <p className="text-gray-600">
                Browse our products, add items to your cart, and proceed to
                checkout. Follow the payment instructions to complete your
                order.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800">
                What payment methods do you accept?
              </h3>
              <p className="text-gray-600">
                We accept ABA PayWay for secure online payments.
              </p>
            </div>
          </div>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-gray-800">
                How long does shipping take?
              </h3>
              <p className="text-gray-600">
                Standard shipping takes 3-5 business days. Express shipping is
                available for faster delivery.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800">
                Can I return or exchange items?
              </h3>
              <p className="text-gray-600">
                We offer returns within 30 days of purchase. Please contact us
                for return instructions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
