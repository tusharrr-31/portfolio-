import { useState } from "react";
import "./App.css";
import { PrimaryButton, SecondaryButton } from "./Components/PrimaryButton";
import { Experience } from "./Components/Experience";
import About from "./Components/About";
import { Clients } from "./Components/Clients";
import Pro from "./Components/ProjectCard.jsx";
import PosRes from "./Components/Por.jsx";
import Footer from "./Components/Footer.jsx";
import HeroGeometric from "./Components/HeroGeometric";
import Tape from "./Components/Tape";
import Testimonials from "./Components/Testimonials.jsx";


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
      {/* <div>
      <Navbar />
      
      </div> */}
      <div className="h-screen bg-black  text-center overflow-hidden ">
        <HeroGeometric
          badge="Open to opportunities"
          title1="Designing Interfaces"
          title2="Developing Experiences"
        />
      </div>
      <div>
        <Tape />
      </div>

      <div className="global">
        <About />
      </div>
          


      <div className="global">
        
        <div className="flex flex-col md:flex-row-reverse justify-between items-end md:items-end mb-20 ">
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
        
      <section className="global">
        <div className="flex flex-col md:flex-row-reverse  md:items-end mt-20 mb-10 ">
          <div className="text-xl md:text-2xl lg:text-3xl text-gray-600  font-primary">
            <span className="block text-gray-500">My Previous Clients</span>
          </div>
        </div>
        <Clients />
      </section>
      <div className="bg-container">
        <div className="animated-bg"></div>
        <section className="pb-24">
          <PosRes />
        </section>
      </div>
      <section className="global">
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
        <div className="grid grid-cols-3 grid-rows-2 gap-6 py-10 ">
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
      <section className="global">
        <div className="bg-[url('data:image/svg+xml,%3Csvg%20width%3D%221280%22%20height%3D%22469%22%20viewBox%3D%220%200%201280%20469%22%20fill%3D%22none%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20clip-path%3D%22url(%23clip0_256_287)%22%3E%3Crect%20width%3D%221280%22%20height%3D%22469%22%20rx%3D%2228%22%20fill%3D%22%23202320%22/%3E%3Cpath%20d%3D%22M1045.89%20-70.8331C1054.01%20-95.4055%201076.98%20-112%201102.86%20-112H1290.95C1332.7%20-112%201361.68%20-70.429%201347.25%20-31.2577L1279.46%20152.742C1270.77%20176.33%201248.3%20192%201223.16%20192H1042.03C1001.14%20192%20972.226%20151.992%20985.062%20113.167L1045.89%20-70.8331Z%22%20fill%3D%22%23383838%22/%3E%3Cpath%20d%3D%22M-40.8543%20325.036C-31.6552%20201.753%20-8.96706%20186.629%2016.0629%20187.094L281.903%20192.034C324.707%20192.829%20352.93%20236.912%20335.737%20276.12L241.491%20591.036C231.762%20613.221%20209.647%20627.38%20185.427%20626.93L-71.1487%20622.162C-113.006%20621.384%20-141.22%20579.061%20-125.836%20540.125L-40.8543%20325.036Z%22%20fill%3D%22%23383838%22/%3E%3C/g%3E%3Cdefs%3E%3CclipPath%20id%3D%22clip0_256_287%22%3E%3Crect%20width%3D%221280%22%20height%3D%22469%22%20rx%3D%2228%22%20fill%3D%22white%22/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E')] rounded-2xl p-6 sm:p-16">
          {/* Text Section */}
          <div className="text-white font-primary text-2xl sm:text-3xl lg:text-5xl text-left leading-tight">
            See the impact of good,
            <br /> conversion-oriented design on <br /> your business
          </div>

          {/* Button Section */}
          <div className="flex px-6 sm:px-24 py-10 w-full items-center sm:items-end justify-center sm:justify-end">
            <SecondaryButton ButtonText="Contact Me" />
          </div>
        </div>
      </section>

      <section className="global">
        <div>
          <div className="flex flex-col md:flex-row-reverse justify-between items-end md:items-end py-10">
            <h2 className="text-4xl md:text-5xl font-bold text-right leading-tight font-primary">
              What People Are <br />{" "}
              <span className="text-primary"> Saying About Me</span>
            </h2>
            <div className="text-xl md:text-2xl lg:text-3xl text-gray-600 text-left font-secondary">
              <span className="block text-gray-500">
                Crafting Memorable Experiences <br /> Through Design
              </span>
            </div>
          </div>
        </div>
        <section>
          <Testimonials />
        </section>
      </section>

      <section>
        <Footer />
      </section>
    </>
  );
}

export default App;
