import React from "react";
import { Link } from "react-router-dom";
import img1 from "../../assets/photo-1586776977607-310e9c725c37.jpg";
import img2 from "../../assets/photo-1626958390916-90be78b9bfe6.jpg";

const About = () => {
  return (
    <div>
      <section className=" dark:text-gray-900 mx-5 mb-20">
        <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-around">
          <div className="relative w-1/2 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
            <img
              src={img1}
              alt=""
              className="w-4/5 border-4 rounded-lg sm:h-80 lg:h-full xl:h-112 2xl:h-128"
            />
            <img
              src={img2}
              alt=""
              className="absolute w-3/5 right-6 top-1/2 border-4 rounded-lg sm:h-80 lg:h-full xl:h-112 2xl:h-128"
            />
          </div>
          <div className="flex flex-col justify-center p-6 mt-4 text-center rounded-sm w-1/2 lg:max-w-md xl:max-w-lg lg:text-left">
            <p className="text-2xl font-semibold text-blue-400">About us</p>
            <hr className="w-2/4 mb-3" />
            <p className="text-4xl font-bold leading-none">
              Welcome to
              <span className="text-indigo-400"> Key Smart</span>, your go-to
              destination for high-quality, pre-owned keyboards.
            </p>
            <p className="mt-6 mb-8 text-base sm:mb-12">
              At "KEY SMART", our mission is to provide our customers with a
              wide selection of high-quality, pre-owned keyboards that meet
              their needs and budget. We are committed to offering exceptional
              customer service and support to ensure that our customers are
              completely satisfied with their purchase.
            </p>
            <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
              <Link>
                <button class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
                  <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                    Get More Info
                  </span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
