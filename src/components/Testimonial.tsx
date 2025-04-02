import React, { useState } from "react";
import image1 from "./images/logo/testimoniol1.jpg";
import image2 from "./images/logo/testimonial2.jpg";
import image3 from "./images/logo/testimonial3.jpg";

const Testimonial = () => {
  const testimonials = [
    {
      image: image1,
      content:
        "B4-School is excellent! The sense of community is wonderful, and my child is making great progress. The school's focus on character-building sets it apart from others.",
      name: "Pooja",
    },
    {
      image: image2,
      content:
        "B4-School is amazing! My child loves it there, and the teachers are really helpful. The school's environment is very positive, which makes me confident in my child's education.",
      name: "Aditya",
    },
    {
      image: image3,
      content:
        "I'm so happy with B4-School! The staff are friendly, and my child has learned a lot. The facilities are well-maintained, and the curriculum is engaging for children.",
      name: "Shivaji",
    },
    {
      image: image3,
      content:
        "B4-School is fantastic! My child enjoys the activities, and the teachers are very caring. The school encourages creativity and critical thinking, which I appreciate as a parent.",
      name: "Avani",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    if (currentSlide < testimonials.length - 1) {
      setCurrentSlide((prev) => prev + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide((prev) => prev - 1);
    }
  };

  return (
    <div className="py-10 bg-gradient-to-r from-yellow-500 to-orange-500 text-white">
      <div className="container mx-auto px-4">
        <div className="mb-6">
          <h2 className="text-4xl font-bold text-center mb-6">Testimonials</h2>
          <div className="relative overflow-hidden bg-white p-8 rounded-lg shadow-md text-gray-800 max-w-2xl mx-auto">
            {/* Testimonial Slide */}
            <div className="text-center">
              <img
                src={testimonials[currentSlide].image}
                alt={`Testimonial ${currentSlide}`}
                className="w-full h-[200px] object-cover rounded-md mb-4"
              />
              <p className="text-lg leading-relaxed mb-4">{testimonials[currentSlide].content}</p>
              <h3 className="text-blue-600 font-bold text-xl">{testimonials[currentSlide].name}</h3>
            </div>

            {/* Navigation Arrows */}
            {testimonials.length > 1 && (
              <>
                <button
                  onClick={prevSlide}
                  disabled={currentSlide === 0}
                  className={`absolute left-4 top-[50%] transform -translate-y-[50%] bg-blue-500 text-white p-3 rounded-full shadow-lg $ {
                    currentSlide === 0 ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-600"
                  }`}
                >
                  &#8592;
                </button>
                <button
                  onClick={nextSlide}
                  disabled={currentSlide >= testimonials.length - 1}
                  className={`absolute right-4 top-[50%] transform -translate-y-[50%] bg-blue-500 text-white p-3 rounded-full shadow-lg $ {
                    currentSlide >= testimonials.length - 1 ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-600"
                  }`}
                >
                  &#8594;
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
