import React from "react";
import { Parallax } from "react-scroll-parallax";
import store from "../assets/store.jpg";

const StoreSection = () => {
  return (
    <section className="bg-[#1E3A8A] text-white py-40">
      <Parallax
        className=" flex flex-col md:flex-row items-center justify-center gap-20 px-6"
        speed={-13}
      >
        <div className="text-left">
          <h4 className="text-gray-300 uppercase tracking-wide font-semibold">
            Re:Nue pillars
          </h4>
          <h2 className="text-5xl font-bold mt-2">Store</h2>
          <p className="text-lg text-gray-300 mt-4 max-w-md">
            Creating a fun and interesting thrifting experience, targeted at
            current customers and reaching out to younger, new generations who
            are interested in thrifting and repurposing.
          </p>
          <button className="mt-6 px-6 py-3 bg-white text-black font-semibold rounded-full shadow-md hover:bg-gray-200 transition">
            Donate your items
          </button>
        </div>
        <div className="mt-8 md:mt-0 flex justify-center">
          <img
            src={store}
            alt="Store"
            className="w-full max-w-md md:max-w-lg rounded-lg shadow-lg"
          />
        </div>{" "}
      </Parallax>
    </section>
  );
};

export default StoreSection;
