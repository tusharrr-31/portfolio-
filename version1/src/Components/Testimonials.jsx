import React, { useState } from "react";
import { motion } from "framer-motion";
import "./Testimonials.css"; // Import CSS
import Devanshu from "../assets/Testimonials/Devanshu.jpg"
import Jai from "../assets/Testimonials/JaiGupta.jpg"
import Shubhi from "../assets/Testimonials/Shubhi.jpg"

const testimonials = [
  {
    
    quote:
      "He stands out as an exceptional graphic designer in college. His work requires minimal guidance, showcasing innate self-awareness. He identifies and rectifies mistakes effortlessly, driven by an unwavering commitment to perfection. His dedication and artistic prowess make him truly remarkable in his field.",
    author: "Devanshu Saxena",
    role: "Founder, Skill Eliters",
    image: Devanshu,
  },
  {
    quote:
      "He stands out as an exceptional graphic designer in college. His work requires minimal guidance, showcasing innate self-awareness. He identifies and rectifies mistakes effortlessly, driven by an unwavering commitment to perfection. His dedication and artistic prowess make him truly remarkable in his field.",
    author: "Jai Gupta",
    role: "Founder, Rablo Learning Pvt. Lmt.",
    image: Jai,
  },
  {
    quote:
      "Shoutout to our incredible UI/UX designer for crafting a website that has left us utterly amazed! Your attention to detail, creativity, and dedication to enhancing user experience shines through in every pixel. Navigating the site is an absolute delight, thanks to your intuitive designs and seamless interactions. 🎨 Your ability to transform our vision into this visually captivating reality is truly commendable.",
    author: "Shubhi Pandey",
    role: "Web Developer, Skill Eliters",
    image: Shubhi,
  },
];

const TestimonialSlider = () => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const nextSlide = () => {
    setDirection(1);
    setIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <main className="testimonial-container">
      <div className="slider justify-center">
        {/* Navigation Buttons */}
        <div className="buttons">
          <div className="previous" onClick={prevSlide}></div>
          <div className="next" onClick={nextSlide}></div>
        </div>

        {/* Slide Content with Smooth Animation */}
        <motion.div
          key={index}
          className="slide"
          initial={{ opacity: 0, x: direction * 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -direction * 100 }}
          transition={{ type: "spring", stiffness: 80, damping: 12 }}
        >
          <div className="testimonial font-secondary">
            <blockquote>“ {testimonials[index].quote} ”</blockquote>
            <p className="author font-primary text-2xl">
              {testimonials[index].author} <br /><span>{testimonials[index].role}</span>
            </p>
          </div>
          
          <motion.div
            className="slider-img "
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <img src={testimonials[index].image} alt={testimonials[index].author} />
          </motion.div>
        </motion.div>
      </div>
    </main>
  );
};

export default TestimonialSlider;
