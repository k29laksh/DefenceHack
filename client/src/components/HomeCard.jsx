import React from "react";
import { Link } from "react-router-dom";

const HomeCard = ({ featureImg, featureName, featureDetails, featureLink }) => {
  return (
    <div className=" w-full flex flex-col  lg:flex-row  md:justify-between  dark:text-white p-8 lg:p-16 md:items-center lg:items-start  lg:space-y-0">
      <img
        src={featureImg}
        alt="Person sitting"
        className="rounded-lg w-full md:w-[80%] lg:w-1/3  "
      />

      <div className="text-left mt-4 md:w-[80%] lg:w-auto  lg:mt-0  lg:ml-16 flex flex-col gap-6">
        <h1 className="text-2xl lg:text-5xl font-bold ">{featureName}</h1>

        <p className=" sm:text-lg dark:text-gray-200">
         {featureDetails}
        </p>

        <Link to={featureLink} className="border-zinc-900 text-zinc-900 dark:border-white bg-transparent w-44 border-2 sm:text-xl text-center dark:text-white  py-3 rounded-full dark:hover:border-blue dark:hover:text-blue  hover:border-blue hover:text-blue transition duration-300 ease-in-out drop-shadow-md">
          Know More
        </Link>
      </div>
    </div>
  );
};

export default HomeCard;
