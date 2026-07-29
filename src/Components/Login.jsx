import React, { useState } from "react";
import { Link } from "react-router-dom";

function Login() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState(""); // "success" or "error"

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { username, email, password } = formData;

    if (username && email && password) {
      setMessage("Login successful!");
      setMessageType("success");

      alert(`Login successful!
Username: ${username}
Email: ${email}
Password: ${password}`);

      // Redirect to home page
      window.location.href = "/";
    } else {
      setMessage("Please fill in all fields.");
      setMessageType("error");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 px-4">
      <div className="max-w-md w-full space-y-8">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Welcome Back
          </h1>
          <p className="text-gray-600">Sign in to your account</p>
        </div>

        {/* Login Form */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Username Field */}
            <div>
              <label
                htmlFor="username"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleInputChange}
                placeholder="Enter your username"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 outline-none"
                required
              />
            </div>

            {/* Email Field */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Enter your email"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 outline-none"
                required
              />
            </div>

            {/* Password Field */}
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                placeholder="Enter your password"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 outline-none"
                required
              />
            </div>

            {/* Message */}
            {message && (
              <div
                className={`text-center text-sm font-medium ${
                  messageType === "success" ? "text-green-600" : "text-red-600"
                }`}
              >
                {message}
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transform hover:scale-[1.02] transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Sign In
            </button>
          </form>

          {/* Links */}
          <div className="mt-6 space-y-4">
            <div className="text-center">
              <Link
                to="/signup"
                className="text-blue-600 hover:text-blue-800 font-medium transition duration-200"
              >
                Don't have an account? Sign up
              </Link>
            </div>

            <div className="text-center">
              <button className="text-gray-600 hover:text-red-600 font-medium transition duration-200">
                Forgot Password?
              </button>
            </div>
          </div>

          {/* Divider */}
          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">
                  Or continue with
                </span>
              </div>
            </div>
          </div>

          {/* Social Login */}
          <div className="mt-6">
            <div className="grid grid-cols-4 gap-4">
              <button className="flex justify-center items-center w-full py-3 px-4 border border-gray-300 rounded-lg hover:bg-gray-50 transition duration-200 transform hover:scale-105">
                <i className="fab fa-facebook-f text-blue-600 text-lg"></i>
              </button>
              <button className="flex justify-center items-center w-full py-3 px-4 border border-gray-300 rounded-lg hover:bg-gray-50 transition duration-200 transform hover:scale-105">
                <i className="fab fa-google text-red-500 text-lg"></i>
              </button>
              <button className="flex justify-center items-center w-full py-3 px-4 border border-gray-300 rounded-lg hover:bg-gray-50 transition duration-200 transform hover:scale-105">
                <i className="fab fa-twitter text-blue-400 text-lg"></i>
              </button>
              <button className="flex justify-center items-center w-full py-3 px-4 border border-gray-300 rounded-lg hover:bg-gray-50 transition duration-200 transform hover:scale-105">
                <i className="fab fa-github text-gray-800 text-lg"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
