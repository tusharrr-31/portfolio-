import React from "react";
import kmc from "../assets/Clubs/LOGO.png"
import spark from "../assets/Clubs/sparks.png"
import techno from "../assets/Clubs/Frame 1.png"
import skill from "../assets/Clubs/skill eliters.png"

const responsibilities = [
    {
      title: "Lead UI Designer",
      year: "2022-Present",
      org: "Skill Eliters",
      image: skill, // Update with actual image path
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
    <div className="bg-black text-white p-10 flex justify-between items-center w-full rounded-xl">
      {/* Left: Responsibility Cards */}
      <div className="grid grid-cols-2 gap-6">
        {responsibilities.map((item, index) => (
          <div
            key={index}
            className="bg-white text-black p-6 rounded-xl flex justify-between items-center shadow-lg w-72"
          >
            <div className="text-left">
              <h3 className="font-bold text-xl font-primary">{item.title}</h3>
              <p className="text-sm font-secondary">{item.year}</p>
              <p className="text-sm font-secondary">{item.org}</p>
            </div>
            <img
              src={item.image} // Dynamic Image
              alt={item.org}
              className="w-16 h-16 rounded-full object-cover bg-black"
            />
          </div>
        ))}
      </div>

      {/* Right: Heading */}
      <div className="text-right">
        <h2 className="text-4xl font-bold font-primary">
          <span className="text-primary font-primary">Position</span> of{" "}
          <span className="text-white font-primary">Responsibilities</span>
        </h2>
        <p className="text-gray-400 mt-2 font-secondary">Driving Impact with Vision</p>
      </div>
    </div>
  );
};

export default ResponsibilitiesSection;
