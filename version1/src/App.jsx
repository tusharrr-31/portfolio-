import { useState } from "react";
import "./App.css";
import { PrimaryButton, SecondaryButton } from "./Components/PrimaryButton";
import { Experience } from "./Components/Experience";
import About from "./Components/About";
import { Clients } from "./Components/Clients";
import Pro from "./Components/ProjectCard.jsx";
import PosRes from "./Components/Por.jsx";
import Testimonal from "./Components/Testimonial.jsx";

function App() {
  const handleResumeClick = () => {
    window.location.href = "https://youtube.com/"; // Opens in a new tab
  };
  const behanceLink1 = "https://www.behance.net/embed/project/206844361?ilo0=1";
  const behanceLink2 = "https://www.behance.net/embed/project/200258317?ilo0=1";
  const behanceLink3 = "https://www.behance.net/embed/project/162754725?ilo0=1";
  const behanceLink4 = "https://www.behance.net/embed/project/187619833?ilo0=1";
  const behanceLink5 = "https://www.behance.net/embed/project/183752927?ilo0=1";
  const behanceLink6 = "https://www.behance.net/embed/project/202079839?ilo0=1";

  return (
    <>
      <div>
        <About />
      </div>

      <div>
        <div className="flex flex-col md:flex-row-reverse justify-between items-end md:items-end my-20 ">
          <div className="text-xl md:text-2xl lg:text-3xl text-gray-600 text-right font-secondary">
            <span className="block text-gray-500">
              Transforming Ideas into Intuitive <br />
              Designs!
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-left leading-tight font-primary">
            My <span className="text-primary">Professional</span>
            <br /> Journey
          </h2>
        </div>
        <Experience
          Company="Rablo Learning Pvt. Lmt."
          Date="July 2024 - October 2024"
          Address="Lucknow, U.P."
          Position="UI/UX Design Intern"
          JobLoc="Remote"
        />
        <Experience
          Company="Digivance Solutions"
          Date="Feb 2024 - April 2024"
          Address="New Delhi"
          Position="Design Intern"
          JobLoc="Hybrid"
        />
        <Experience
          Company="Easy Eduverse"
          Date="April 2024 - November 2024"
          Address="Greater Noida, U.P."
          Position="UI/UX Designer"
          JobLoc="Hybrid"
        />
      </div>

      <section>
        <div className="flex flex-col md:flex-row-reverse justify-between items-end md:items-end my-20 ">
          <div className="text-xl md:text-2xl lg:text-3xl text-gray-600 text-right font-secondary">
            <span className="block text-gray-500">My Previous Clients</span>
          </div>
        </div>
        <Clients />
      </section>
      <section className="pb-24">
        <PosRes />
      </section>
      <section>
        <div className="flex flex-col md:flex-row-reverse justify-between items-end md:items-end my-20 ">
          <div className="text-xl md:text-2xl lg:text-3xl text-gray-600 text-right font-secondary content-end">
            <span className="block text-gray-500">
              Bridging Creativity and Functionality
            </span>
            <div className="mt-4 flex justify-end">
              {" "}
              {/* Ensures button is aligned right */}
              <PrimaryButton ButtonText="Explore more projects" />
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-left leading-tight font-primary">
            My <span className="text-primary">Professional</span>
            <br /> Journey
          </h2>
        </div>
        <div className="grid grid-cols-3 grid-rows-2 gap-6 py-10">
          {/* Cards or Items */}
          <div>
            <Pro link={behanceLink1} />
          </div>
          <div>
            <Pro link={behanceLink2} />
          </div>
          <div>
            <Pro link={behanceLink3} />
          </div>
          <div>
            <Pro link={behanceLink4} />
          </div>
          <div>
            <Pro link={behanceLink5} />
          </div>
          <div>
            <Pro link={behanceLink6} />
          </div>
        </div>
      </section>
      <section>
        <div>
          <div className="flex flex-col md:flex-row-reverse justify-between items-end md:items-end py-10">
            <h2 className="text-4xl md:text-5xl font-bold text-right leading-tight font-primary">
            What People Are <br /> <span className="text-primary"> Saying About Me</span>
            </h2>
            <div className="text-xl md:text-2xl lg:text-3xl text-gray-600 text-left font-secondary">
              <span className="block text-gray-500">Crafting Memorable Experiences <br /> Through Design</span>
              
            </div>
          </div>
        </div>
        <div>
          <Testimonal/>
        </div>
      </section>
    </>
  );
}

export default App;
