import clgLogo from "../assets/CollegeLogo.png";
import SocialMedia from "./SocialMedia";
import schoolLogo from "../assets/schoolLogo.jpg";
import "@fortawesome/fontawesome-free/css/all.min.css"; // Import FontAwesome
import { PrimaryButton } from "./PrimaryButton";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import React from "react";

function About() {
  return (
    <div className="container pt-16">
      <div className="flex flex-col md:flex-row-reverse justify-between items-end md:items-end ">
        <h2 className="text-4xl md:text-5xl font-bold text-right leading-tight font-primary">
          About <br /> <span className="text-primary">Who I Am?</span>
        </h2>
        <div className="text-xl md:text-2xl lg:text-3xl text-gray-600 text-left font-secondary">
          <span className="block text-gray-500">Hey!</span>I am{" "}
          <span className="font-semibold text-secondary">Tushar Singh</span>
        </div>
      </div>

      {/* About Content Section */}
      <div className="flex flex-row flex-wrap font-secondary">
        <div className="flex flex-col md:flex-row  md:mx-0 pt-12">
          <div className="text-left">
            <p className="md:w-2/3 text-lg text-gray-700 leading-relaxed">
              Hi, I'm Tushar Singh, a passionate and innovative designer
              blending creativity and technology to craft user-centric digital
              experiences. With a strong foundation in Computer Science and
              Information Technology from{" "}
              <span className="font-semibold text-indigo-600">
                KIET Group of Institutions
              </span>
              , I specialize in transforming complex ideas into intuitive and
              visually appealing designs.
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-row flex-wrap justify-between">
        {/* Resume Button */}

        {/* Education & Image Section */}
        <div className="flex flex-row md:flex-row justify-between w-1/2 mx-4 md:mx-0 font-secondary">
          <div className="flex flex-col flex-wrap">
            <div className="flex flex-row w-fit">
              <SocialMedia />
            </div>

            {/* Education Section */}
            <div className="flex-1 text-left">
              <h3 className="text-2xl font-semibold text-indigo-600 pb-5">
                Education
              </h3>
              <div className="space-y-5">
                {/* Education Item 1 */}
                <div className="flex items-center">
                  <div className="h-12 w-12 flex items-center justify-center bg-gray-200 rounded-full">
                    <img
                      src={clgLogo}
                      alt="College Logo"
                      className="h-10 w-10 object-cover rounded-full"
                    />
                  </div>
                  <div className="ml-4">
                    <p className="font-medium text-gray-900">
                      Bachelor of Technology in Computer Science and Information
                      Technology
                    </p>
                    
                      KIET Group of Institutions, Ghaziabad
                    
                  </div>
                </div>

                {/* Education Item 2 */}
                <div className="flex items-center">
                  <div className="h-12 w-12 flex items-center justify-center bg-gray-200 rounded-full">
                    <img
                      src={schoolLogo}
                      alt="School Logo"
                      className="h-10 w-10 object-cover rounded-full"
                    />
                  </div>
                  <div className="ml-4">
                    <p className="font-medium text-gray-900">Intermediate</p>
                    
                      New St. Stephen’s Senior Secondary School, Agra
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Right Image Section */}
        <div className="flex justify-center md:justify-end w-full md:w-fit mt-10 md:mt-0">
          {/* <img
            src={RightImg}
            alt="Right Section Image"
            className="w-full object-contain rounded-full shadow-lg"
          /> */}
          <DotLottieReact
            src="https://lottie.host/9c15409d-55af-42b4-a5aa-272f16d550f2/0q0kVSmlRj.lottie"
            className="w-full object-contain"
            loop
            autoplay
          />
        </div>
      </div>
      
    </div>
  );
}

export default About;
