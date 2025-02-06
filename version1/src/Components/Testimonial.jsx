import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./Testimonial.css";

const testimonials = [
  {
    id: 1,
    text: "Shoutout to our incredible UI/UX designer for crafting a website that has left us utterly amazed! Your attention to detail, creativity, and dedication to enhancing user experience shines through in every pixel. Navigating the site is an absolute delight, thanks to your intuitive designs and seamless interactions. 🎨 Your ability to transform our vision into this visually captivating reality is truly commendable.",
    name: "Jai Gupta",
    role: "Founder and CEO",
    company: "Rablo Learning Pvt. Lmt.",
    image: "https://i.pravatar.cc/120?img=1",
  },
  {
    id: 2,
    text: "Working with them was a pleasure! The creativity and attention to detail were outstanding.",
    name: "John Doe",
    role: "Marketing Head",
    company: "XYZ Corp",
    image: "https://i.pravatar.cc/120?img=2",
  },
  {
    id: 3,
    text: "They transformed our ideas into reality with their amazing designs and professionalism.",
    name: "Jane Smith",
    role: "CEO",
    company: "Creative Studio",
    image: "https://i.pravatar.cc/120?img=3",
  },
];

export default function Testimonal() {
  return (
    <div className="testimonial-container">
      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        
        autoplay={{ delay: 4000 }}
        loop={true}
        className="mySwiper"
      >
        {testimonials.map((testimonial) => (
          <SwiperSlide key={testimonial.id}>
            <div className="testimonial-quote flex flex-row mx-36 ">
              <img src={testimonial.image} alt={testimonial.name} className="testimonial-img " />
              <div className="quote-container ">
                <blockquote>
                  <p className="testimonial-text font-secondary pb-10 text-md">"{testimonial.text}"</p>
                </blockquote>
                <cite className="testimonial-author font-primary">
                  <span className="text-primary font-bold text-2xl">{testimonial.name}</span>
                  <br /> 
                  <span className="text-md">
                  {testimonial.role} - {testimonial.company}
                  </span>
                </cite>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
