import React from "react";
import communityImage from "../assets/community.jpg";

const CommunityForm = () => {
  return (
    <section className="bg-[#FFD500] py-16 px-6 md:px-16 flex flex-col md:flex-row items-center justify-center md:gap-12">
      <div className="md:w-1/2 flex justify-center">
        <img
          src={communityImage}
          alt="Community"
          className="w-full max-w-[550px] max-h-[550px] rounded-xl shadow-lg object-cover"
        />
      </div>

      <div className="md:w-1/2 text-black text-left">
        <h2 className="text-4xl font-bold">Be part of the community</h2>
        <p className="mt-2 text-lg">
          Join the{" "}
          <span className="underline font-semibold">Re:Nue community</span> and
          unlock a world of exclusive perks and discounts when you shop with us!
        </p>

        <form className="mt-6 space-y-4">
          <div>
            <label className="block text-sm  mb-2">Full name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full px-4 py-3    rounded-full focus:outline-none focus:ring-2 focus:ring-black bg-white"
            />
          </div>

          <div>
            <label className="block text-sm  mb-2">Phone number</label>
            <div className="flex items-center    rounded-full px-4 py-3  bg-white">
              <span className="text-gray-700 mr-2">+65</span>
              <input
                type="tel"
                placeholder="Enter your mobile number"
                className="w-full focus:outline-none "
              />
            </div>
          </div>

          <div>
            <label className="block text-sm  mb-2">Email (optional)</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3    rounded-full focus:outline-none focus:ring-2 focus:ring-black bg-white"
            />
          </div>

          <div className="flex items-start">
            <input type="checkbox" className="mr-2 mt-1" />
            <p className="text-sm">
              By registering, you agree that The Salvation Army Red Shield
              Industries Singapore may collect, use, and disclose your personal
              data in accordance with the{" "}
              <a href="#" className="underline font-semibold">
                following purposes
              </a>
              .
            </p>
          </div>

          <button className="w-full bg-black text-white py-3 rounded-full font-semibold text-lg hover:bg-gray-800 transition">
            Join now
          </button>
        </form>
      </div>
    </section>
  );
};

export default CommunityForm;
