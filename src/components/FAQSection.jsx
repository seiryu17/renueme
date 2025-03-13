import React from "react";
import faqBackground from "../assets/faq.png";

const FAQSection = () => {
  return (
    <section className="relative w-full h-[250px] md:h-[300px] flex items-center justify-center">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${faqBackground})`,
        }}
      />

      <div className="absolute inset-0 bg-black" style={{ opacity: 0.3 }} />

      <div className="relative text-center text-white px-6">
        <h2 className="text-[32px] md:text-5xl font-semibold">
          Questions on your mind?
        </h2>
        <button className="mt-6 px-6 py-2 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition">
          See our FAQs
        </button>
      </div>
    </section>
  );
};

export default FAQSection;
