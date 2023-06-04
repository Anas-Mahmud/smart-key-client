import React from "react";
import { FaDollarSign, FaLocationArrow } from "react-icons/fa";
import { IoMdPricetags } from "react-icons/io";

const Feature = () => {
  return (
    <section className="p-6">
      <div className="w-5/6 mx-auto">
        <span className="block mb-2 text-2xl font-bold text-center uppercase">
          Sell Your Gadget in 3 Steps
        </span>
        <h2 className="text-base font-light text-center">
          Book a free pickup from your home or work at a <br /> time slot as per
          your convenience
        </h2>

        <div className="grid gap-6 my-16 lg:grid-cols-3">
          <div className="p-8 space-y-6 rounded-md bg-gray-100 hover:shadow-lg">
            <div className="flex justify-center">
              <IoMdPricetags className="text-6xl mt-3 mr-2 text-blue-500" />
              <p className="text-3xl font-semibold ml-3">
                Check <br /> Price
              </p>
            </div>
            <p className="text-center text-lg px-8">
              Select your device & tell us about its current condition, and our
              advanced AI tech will tailor make the perfect price for you.
            </p>
          </div>
          <div className="p-8 space-y-6 rounded-md bg-gray-100 hover:shadow-lg">
            <div className="flex justify-center">
              <FaLocationArrow className="text-5xl mt-3 mr-2 text-blue-500" />
              <p className="text-3xl font-semibold ml-3">
                Schedule <br /> Pickup
              </p>
            </div>
            <p className="text-center text-lg px-8">
              Book a free pickup from your home or work at a time slot as per
              your convenience
            </p>
          </div>
          <div className="p-8 space-y-6 rounded-md bg-gray-100 hover:shadow-lg">
            <div className="flex justify-center">
              <FaDollarSign className="text-6xl mt-3 mr-2 text-blue-500" />
              <p className="text-3xl font-semibold ml-3">
                Get paid <br /> instantly
              </p>
            </div>
            <p className="text-center text-lg px-8">
              Did we mention you get paid as soon as our executive picks up your
              device? It’s instant & secure payment all the way!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature;
