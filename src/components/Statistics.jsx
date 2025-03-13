import React from "react";
import CountUp from "react-countup";
import basket from "../assets/basket.svg";
import community from "../assets/community.svg";
import storefront from "../assets/storefront.svg";
import partners from "../assets/partners.svg";

const statisticsData = [
  { icon: storefront, number: 4, label: "Stores" },
  { icon: basket, number: 15, label: "Donation booths" },
  { icon: partners, number: 9, label: "Partners" },
  { icon: community, number: 10000, label: "Community" },
];

const Statistics = () => {
  return (
    <section className="py-20 px-6 text-center flex flex-col gap-10 items-center">
      <div className="flex justify-center gap-10 md:gap-40 flex-wrap">
        {statisticsData.map((stat, index) => (
          <div key={index} className="flex flex-col items-center gap-2">
            <img src={stat.icon} alt={stat.label} className="h-16" />
            <p className="text-xl font-semibold mb-3">{stat.label}</p>
            <h3 className="text-5xl font-semibold min-w-[120px] text-center">
              <CountUp
                start={0}
                end={stat.number}
                duration={stat.number > 50 ? 2.5 : 3}
                delay={0.2}
                separator=","
              />
            </h3>
          </div>
        ))}
      </div>
      <p className="text-center md:line-clamp-3 max-w-lg font-semibold">
        As the social enterprise arm of The Salvation Army, Re:Nue aims to
        deliver excellent donation-in-kind service that meets underserved needs
        within our community.
      </p>
      <button className="px-6 py-3 text-white bg-black font-semibold rounded-full hover:bg-gray-200 w-fit">
        About Re:Nue
      </button>
    </section>
  );
};

export default Statistics;
