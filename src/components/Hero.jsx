import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import renuelogowhite from "../assets/renue_logo_white.svg";
import heroimage1 from "../assets/hero_img.jpg";
import heroimage2 from "../assets/hero_img2.jpg";

const slides = [
  {
    image: heroimage1,
    heading: "Give. Thrift. Uplift.",
    buttonText: "Donate your items",
  },
  {
    image: heroimage2,
    heading: "Shop Second-hand, Save the Planet.",
    buttonText: "Start Thrifting",
  },
];

const AUTO_SLIDE_INTERVAL = 5000;
const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    setProgress(0);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + slides.length) % slides.length
    );
    setProgress(0);
  };

  useEffect(() => {
    setProgress(0);
    const interval = setInterval(() => {
      setProgress((prev) => (prev < 100 ? prev + 1 : 100));
    }, AUTO_SLIDE_INTERVAL / 100);

    const slideTimeout = setTimeout(nextSlide, AUTO_SLIDE_INTERVAL);

    return () => {
      clearInterval(interval);
      clearTimeout(slideTimeout);
    };
  }, [currentIndex]);

  return (
    <section className="relative flex items-center justify-center md:p-6 pt-5">
      <div className="relative w-full min-h-[calc(100vh-140px)] md:min-h-[calc(100vh-160px)] flex items-center justify-center overflow-hidden md:rounded-3xl">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
            style={{
              backgroundImage: `url(${slide.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        ))}

        <div className="absolute flex flex-col gap-7 text-white items-center bg-opacity-50 p-8 rounded-lg">
          <img src={renuelogowhite} alt="Renue Logo" className="h-10" />
          <h2 className="text-5xl font-semibold text-center">
            {slides[currentIndex].heading}
          </h2>
          <button className="px-6 py-3 bg-white text-black font-semibold rounded-full hover:bg-gray-200">
            {slides[currentIndex].buttonText}
          </button>
        </div>

        <button
          onClick={prevSlide}
          className="absolute left-2 top-1/2 -translate-y-1/2  text-white p-2 rounded-full hover:bg-gray-600"
        >
          <ChevronLeft size={28} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-2 top-1/2 -translate-y-1/2  text-white p-2 rounded-full hover:bg-gray-600"
        >
          <ChevronRight size={28} />
        </button>

        <div className="absolute bottom-4 flex space-x-2 w-96 justify-center">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentIndex(index);
                setProgress(0); // Reset progress when manually clicked
              }}
              className="relative w-44 h-1 bg-gray-500 rounded-full overflow-hidden"
            >
              {index === currentIndex && (
                <div
                  className="absolute left-0 top-0 h-full bg-white transition-all"
                  style={{ width: `${progress}%` }}
                />
              )}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
