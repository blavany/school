import React, { useState } from 'react';
import Footer from '../components/Footer';

const About = () => {
  const testimonials = [
    {
      image: "https://media.istockphoto.com/id/1164370754/photo/school-supplies-on-blackboard-back-to-school-concept.jpg?s=612x612&w=0&k=20&c=-bxtemetxdvGZuHlQ__SYZwYA9H5ydXJrV7EhStafL4=",
      content: "B4-School has truly transformed my child's learning experience. The teachers are amazing!",
      name: "Pooja",
    },
    {
      image: "https://media.istockphoto.com/id/802352810/photo/top-view-of-a-large-group-of-school-or-office-supplies-on-wooden-table.jpg?s=612x612&w=0&k=20&c=SZ9-27uZDR-eAt3T3nH81lXpKlTrue1R3Z5_bNbsyXU=",
      content: "The nurturing environment at B4-School helped my child develop confidence and curiosity.",
      name: "Aditya",
    },
    {
      image: "https://media.istockphoto.com/id/507487061/photo/back-to-school.jpg?s=612x612&w=is&k=20&c=AtWNBatG5sVAM07ZCTByLaZsrhren5OXMXeb8UsLop0=",
      content: "I highly recommend B4-School for their dedication to quality education and care.",
      name: "Shivaji",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="pt-20 bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        {/* About Section */}
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">About Us</h1>
        <p className="text-gray-600 text-lg leading-relaxed mb-8">
          B4-School is a premier learning center that fosters a nurturing and engaging learning environment for young children. Our experienced educators understand the unique ways in which children learn and are dedicated to creating programs that stimulate curiosity and encourage intellectual growth.
          At B4-School, we believe in maximizing each child's potential through tailored educational experiences that inspire a lifelong love for learning.
        </p>

        {/* Mission and Vision Section */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Vision</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Education is the passport to the world. No child should fall behind academically.
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Mission</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              We strive to provide a safe and learning environment for preschool-age children to reach their maximum potential.
            </p>
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Testimonials</h2>
          <div className="relative overflow-hidden">
            {/* Sliding Box */}
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-full md:w-[300px] bg-white shadow-md rounded-lg p-6 mx-auto"
                >
                  <img
                    src={testimonial.image}
                    alt={`Testimonial ${index}`}
                    className="w-full h-[150px] object-cover rounded-md mb-4"
                  />
                  <p className="text-gray-600 text-lg leading-relaxed mb-4">{testimonial.content}</p>
                  <h3 className="text-gray-800 font-bold">{testimonial.name}</h3>
                </div>
              ))}
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-0 top-[50%] transform -translate-y-[50%] bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700"
            >
              &#8592;
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-0 top-[50%] transform -translate-y-[50%] bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700"
            >
              &#8594;
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default About;
