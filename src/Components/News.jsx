import React from "react";

function News() {
  return (
    <div
      className="w-full bg-purple-800 
      h-[140px] xs:h-[160px] sm:h-[200px] md:h-[250px] 
      flex items-center justify-center text-center px-2 sm:px-4"
    >
      <div>
        {/* Title */}
        <h1
          className="text-white 
          text-sm xs:text-base sm:text-xl md:text-3xl 
          font-bold leading-tight"
        >
          Ready to Upgrade Your Setup?
        </h1>

        {/* Subtitle */}
        <p
          className="text-white 
          text-[10px] xs:text-xs sm:text-sm md:text-base 
          mt-1 sm:mt-2"
        >
          Join thousands of satisfied customers who have upgraded their setup
        </p>

        {/* Buttons */}
        <div className="mt-2 sm:mt-4 grid grid-cols-2 xs:flex-row gap-2 justify-center w-fit mx-auto">
          <button
            className="bg-white text-purple-800 
            px-3 py-1 xs:px-4 xs:py-2 
            text-xs sm:text-sm 
            rounded-md hover:bg-blue-800 hover:text-white transition active:bg-blue-800 active:text-white"
          >
            Shop Now
          </button>
          <button
            className="border border-white text-white 
            px-3 py-1 xs:px-4 xs:py-2 
            text-xs sm:text-sm 
            rounded-md hover:bg-white hover:text-purple-800 transition active:bg-white active:text-purple-800"
          >
            Contact Sales
          </button>
        </div>
      </div>
    </div>
  );
}

export default News;
