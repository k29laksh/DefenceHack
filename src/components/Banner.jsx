// import React from 'react';

// const Banner = () => {
//   return (
//     <div className=" text-white  p-8 md:p-16 text-center lg:w-2/3 mx-auto mt-16">
//     <h1 className="text-3xl px-4 sm:px-0 sm:text-5xl lg:text-7xl font-bold mb-4 drop-shadow-md ">
//     Your Daily Essentials E-Commerce in <span className='text-blue-400'>Defence</span>
//     </h1>
//     <p className="text-md md:text-lg mb-6  text-gray-200">
//     Discover a curated selection of daily essentials tailored for defense personnel. From hygiene products to snacks and more, our platform simplifies shopping, ensuring convenience and quality. Explore now and thrive!
//     </p>
//     <button className=" bg-transparent border-2 sm:text-xl text-center text-white px-10 py-3 rounded-full   hover:text-white transition duration-300 ease-in-out drop-shadow-md">
//       Explore
//     </button>
//   </div>
//   );
// };

// export default Banner;
import React from 'react';

const Banner = () => {
  return (
    <div className="text-white p-8 md:p-16 text-center lg:w-2/3 mx-auto mt-16">
      <h1 className="text-3xl px-4 sm:px-0 sm:text-5xl lg:text-7xl font-bold mb-4 drop-shadow-md">
        Your Daily Essentials E-Commerce in{' '}
        <span
          className="text-[#1f93ff]"
          style={{
            textShadow: '0 0 0px #1F51FF, 0 0 2px #1F51FF, 0 0 3px #1F51FF',
          }}
        >
          Defence
        </span>
      </h1>
      <p className="text-md md:text-lg mb-6 text-gray-200">
        Discover a curated selection of daily essentials tailored for defense
        personnel. From hygiene products to snacks and more, our platform
        simplifies shopping, ensuring convenience and quality. Explore now and
        thrive!
      </p>
      <button className="bg-transparent border-2 sm:text-xl text-center text-white px-10 py-3 rounded-full hover:text-white transition duration-300 ease-in-out drop-shadow-md">
        Explore
      </button>
    </div>
  );
};

export default Banner;
