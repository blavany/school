import React, { useState, useEffect } from "react";
import Slide1 from "./images/logo/headerimage1.avif";
import Slide2 from "./images/logo/headerimage2.jpg";
import Slide3 from "./images/logo/headerimage4.jpg";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Hero = () => {
  const slides = [
    {
      image: Slide1,
      title: "Welcome to B4School",
      subtitle: "Where Learning Begins with Joy",
    },
    {
      image: Slide2,
      title: "Quality Education for Kids",
      subtitle: "Nurturing Young Minds for a Brighter Future",
    },
    {
      image: Slide3,
      title: "Art & Physical Education",
      subtitle: "Promotes child's creativity and encourages kids to stay healthy.",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  // Function to go to the next slide
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  // Function to go to the previous slide
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // Auto-slide effect every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(timer);
  }, []); // Run only once on mount

  return (
    <div className="relative h-screen overflow-hidden pt-16 md:pt-24">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${slide.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "calc(100% - -15rem)",
              width: "100%",
            }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-40" />
          </div>
          <div className="relative h-full flex items-center justify-center text-center">
            <div className="text-white px-4">
              <h1 className="text-5xl md:text-6xl font-bold mb-4">{slide.title}</h1>
              <p className="text-xl md:text-2xl">{slide.subtitle}</p>
            </div>
          </div>
        </div>
      ))}

      {/* Left Arrow */}
      <button
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full z-10"
        onClick={prevSlide}
      >
        <FaChevronLeft size={24} />
      </button>

      {/* Right Arrow */}
      <button
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full z-10"
        onClick={nextSlide}
      >
        <FaChevronRight size={24} />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-colors duration-200 ${
              index === currentSlide ? "bg-white" : "bg-white/50"
            }`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;