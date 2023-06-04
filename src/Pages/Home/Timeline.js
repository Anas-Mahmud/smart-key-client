import React from "react";
import trust from "../../../src/assets/trust.png";

const Timeline = () => {
  return (
    <section className="mb-16 flex flex-col lg:flex-row  mx-auto">
      <img src={trust} alt="" className="w-2/6 ml-36" />
      <div className="px-4 py-12 mx-auto">
        <div className="grid gap-4 sm:grid-cols-12">
          <div className="col-span-12 sm:col-span-3">
            <div className="text-center sm:text-left mb-14 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:dark:bg-blue-400">
              <h3 className="text-3xl font-semibold">Why People Trust Us</h3>
              <span className="text-sm font-bold tracking-wider uppercase dark:text-gray-400">
                Vestibulum diam nunc
              </span>
            </div>
          </div>
          <div className="relative col-span-12 px-4 space-y-6 sm:col-span-9">
            <div className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:dark:bg-gray-700">
              <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-blue-400">
                <h3 className="text-xl font-semibold tracking-wide">
                  One-stop Solution
                </h3>
                <p className="">
                  Sell, buy, repair or accessorize your smartphone
                </p>
              </div>
              <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-blue-400">
                <h3 className="text-xl font-semibold tracking-wide">
                  Trained Professionals
                </h3>
                <p className="">
                  Trusted experts to help every step of the way
                </p>
              </div>
              <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-blue-400">
                <h3 className="text-xl font-semibold tracking-wide">
                  Amazing Prices
                </h3>
                <p className="">
                  Buying or selling, you’ll surely love our prices
                </p>
              </div>
              <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-blue-400">
                <h3 className="text-xl font-semibold tracking-wide">
                  Quick & Hassle-free
                </h3>
                <p className="">
                  Get mobile care in a click at your home or office
                </p>
              </div>
              <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-blue-400">
                <h3 className="text-xl font-semibold tracking-wide">
                  Guaranteed Safety
                </h3>
                <p className="">
                  Be it buyback or repair, we are the safest hands for your
                  device security
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
