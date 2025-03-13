import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import caring from "../assets/caring.svg";
import tshirt from "../assets/tshirt.svg";
import purposeful from "../assets/purposeful.svg";
import authentic from "../assets/authentic.svg";
import passionate from "../assets/passionate.svg";

const valuesData = [
  {
    title: "Purposeful",
    description:
      "We are committed to making a positive difference to the environment, to supporting and changing lives, and to inspiring change for a brighter future.",
    icon: purposeful,
  },
  {
    title: "Passionate",
    description:
      "We bring energy, enthusiasm, and commitment to everything we do, striving to make a meaningful impact in our communities.",
    icon: passionate,
  },
  {
    title: "Caring",
    description:
      "We care deeply for people, our planet, and the future, ensuring that our actions contribute positively to the world.",
    icon: caring,
  },
  {
    title: "Authentic",
    description:
      "We stay true to our values, acting with honesty and integrity while fostering genuine relationships.",
    icon: authentic,
  },
  {
    title: "Inclusive",
    description:
      "We embrace diversity and inclusion, ensuring that everyone has a place and a voice in our mission.",
    icon: tshirt,
  },
];

const ValuesSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="max-w-3xl mx-auto py-16 text-center px-6">
      <h2 className="text-5xl font-semibold">Our values</h2>
      <p className="mb-8 mt-4 text-xl font-semibold">
        Guiding principles behind everything we do
      </p>

      <div className="flex flex-col gap-4">
        {valuesData.map((value, index) => (
          <div
            key={index}
            className="bg-gray-100 rounded-xl p-4 cursor-pointer transition-all duration-300"
            onClick={() => toggleAccordion(index)}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <img src={value.icon} alt={value.title} className="w-8 h-8" />
                <h3 className="text-lg font-semibold">{value.title}</h3>
              </div>
              {openIndex === index ? (
                <ChevronUp className="w-5 h-5" />
              ) : (
                <ChevronDown className="w-5 h-5" />
              )}
            </div>

            <div
              className={`mt-2 text-gray-600 text-left overflow-hidden transition-all ${
                openIndex === index ? "max-h-40" : "max-h-0 opacity-0"
              }`}
            >
              {openIndex === index && (
                <p className="mt-2">{value.description}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ValuesSection;
