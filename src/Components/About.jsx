import React from "react";

function About() {
  return (
    <div className="relative bg-gradient-to-br from-gray-50 to-gray-100 py-20">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-3 gap-12 items-center">
        {/* LEFT SECTION */}
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
            About Me
          </h1>

          <p className="text-gray-600 leading-relaxed">
            Welcome to my portfolio. I’m a passionate FrontEnd Developer
            focused on building modern, responsive, and user-friendly
            applications. I love turning ideas into real digital experiences.
          </p>

          <div className="inline-block bg-red-500 text-white px-6 py-4 rounded-2xl shadow-lg">
            <h2 className="text-xl font-semibold">Keo Sovanreach</h2>
            <p className="text-sm text-gray-200">FrontEnd Developer</p>
          </div>
          <div className="flex justify-center items-center gap-6 mt-6">
            <a
              href="#"
              className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-100 text-gray-600 shadow-md hover:bg-black hover:text-white hover:scale-110 transition duration-300 cursor-pointer"
            >
              <i className="fa-brands fa-github text-xl"></i>
            </a>

            <a
              href="#"
              className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-100 text-blue-500 shadow-md hover:bg-blue-500 hover:text-white hover:scale-110 transition duration-300 cursor-pointer"
            >
              <i className="fa-brands fa-telegram text-xl"></i>
            </a>

            <a
              href="#"
              className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-100 text-blue-600 shadow-md hover:bg-blue-600 hover:text-white hover:scale-110 transition duration-300 cursor-pointer"
            >
              <i className="fa-brands fa-facebook text-xl"></i>
            </a>

            <a
              href="#"
              className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-100 text-pink-500 shadow-md hover:bg-gradient-to-r hover:from-pink-500 hover:to-yellow-500 hover:text-white hover:scale-110 transition duration-300 cursor-pointer"
            >
              <i className="fa-brands fa-instagram text-xl"></i>
            </a>
          </div>
        </div>

        {/* CENTER IMAGE */}
        <div className="flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 bg-red-400 rounded-full blur-3xl opacity-20"></div>
            <img
              src="https://i.pinimg.com/736x/7c/be/5b/7cbe5b183abbae2fcd7e510e2d4b3e8f.jpg"
              alt="profile"
              className="relative w-64 h-64 md:w-80 md:h-80 object-cover rounded-full shadow-2xl"
            />
          </div>
        </div>

        {/* RIGHT SECTION */}
        <div className="space-y-10">
          {/* Education */}
          <div>
            <h2 className="text-xl font-bold text-red-500 mb-4">Education</h2>
            <div className="space-y-4 text-gray-600">
              <div className="bg-white p-4 rounded-xl shadow-md">
                <p className="text-sm text-gray-400">2016 - 2020</p>
                <h3 className="font-semibold">Bachelor of IT</h3>
                <p className="text-sm">
                  Studied software engineering and web development.
                </p>
              </div>
            </div>
          </div>

          {/* Experience */}
          <div>
            <h2 className="text-xl font-bold text-red-500 mb-4">Experience</h2>
            <div className="space-y-4 text-gray-600">
              <div className="bg-white p-4 rounded-xl shadow-md">
                <p className="text-sm text-gray-400">2022 - Present</p>
                <h3 className="font-semibold">FrontEnd Developer</h3>
                <p className="text-sm">
                  Building modern React applications.
                </p>
              </div>
            </div>
          </div>

          {/* Skills */}
          <div>
            <h2 className="text-xl font-bold text-red-500 mb-4">
              FrontEnd Skills
            </h2>

            <div className="space-y-4">
              {[
                { name: "React JS", level: "90%" },
                { name: "JavaScript", level: "85%" },
                { name: "HTML/CSS", level: "80%" },
                { name: "Tailwind CSS", level: "95%" },
              ].map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between text-sm mb-1">
                    <span>{skill.name}</span>
                    <span>{skill.level}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-red-500 h-2 rounded-full"
                      style={{ width: skill.level }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

     
      <div className="absolute bottom-0 left-0 w-full">
        <svg viewBox="0 0 1440 320" className="w-full">
          <path
            fill="#ef4444"
            d="M0,160L60,186.7C120,213,240,267,360,266.7C480,267,600,213,720,202.7C840,192,960,224,1080,218.7C1200,213,1320,171,1380,149.3L1440,128V320H0Z"
          ></path>
        </svg>
      </div>
    </div>
  );
}

export default About;
