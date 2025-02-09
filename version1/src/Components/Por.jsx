import React from "react";
import kmc from "../assets/Clubs/LOGO.png";
import spark from "../assets/Clubs/sparks.png";
import techno from "../assets/Clubs/Frame 1.png";
import skill from "../assets/Clubs/skill eliters.png";
import "./Bg.css";

const responsibilities = [
  {
    title: "Lead UI Designer",
    year: "2022-Present",
    org: "Skill Eliters",
    image: skill,
  },
  {
    title: "Lead Designer",
    year: "2022-Present",
    org: "Spark Creations",
    image: spark,
  },
  {
    title: "Creative Head",
    year: "2022-Present",
    org: "KIET Music Club",
    image: kmc,
  },
  {
    title: "Lead UI Designer",
    year: "2022-Present",
    org: "Technocrats",
    image: techno,
  },
];

const ResponsibilitiesSection = () => {
  return (
    <div className="responsibility-section">
      {/* Animated Background inside the div */}
      <div className="animat-bg"></div>

      {/* Content Wrapper to keep everything above the gradient */}
      <div className="responsibility-content">
      <div className="global">
        {/* Heading */}
        <div className="w-full flex justify-end py-10">
          <div className="text-right">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-primary leading-tight">
              <span className="text-primary">Position of </span>
              <span className="text-white">Responsibilities</span>
            </h2>
            <p className="text-lg sm:text-xl lg:text-3xl my-4 font-secondary text-gray-400">
              Driving Impact with Vision
            </p>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {responsibilities.map((item, index) => (
            <div
              key={index}
              className="bg-white text-black p-6 rounded-xl flex flex-wrap justify-between items-center shadow-lg w-full sm:w-72"
            >
              <div className="text-left">
                <h3 className="font-bold text-xl font-primary">{item.title}</h3>
                <p className="text-sm font-bold font-secondary">{item.org}</p>
                <p className="text-sm font-secondary">{item.year}</p>
              </div>
              <img
                src={item.image}
                alt={item.org}
                className="w-16 h-16 rounded-full object-cover bg-black"
              />
            </div>
          ))}
        </div>
        </div>
      </div>
    </div>
  );
};

export default ResponsibilitiesSection;
