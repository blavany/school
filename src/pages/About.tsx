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
      image: "https://www.kindertap.com/assets/images/features/kindertap-app-medias.jpg",
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
    <div className="pt-20 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 min-h-screen text-white">
      <div className="container mx-auto px-4 py-16">
        {/* About Section */}
        <h1 className="text-5xl font-extrabold text-center mb-12 text-white-300">About Us</h1>
        <p className="text-lg leading-relaxed mb-8 text-white text-center px-6 md:px-24">
          B4-School is a premier learning center that fosters a nurturing and engaging learning environment for young children. 
          Our experienced educators understand the unique ways in which children learn and are dedicated to creating programs that 
          stimulate curiosity and encourage intellectual growth.
        </p>

        {/* Mission and Vision Section */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white text-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold text-blue-600 mb-4">Vision</h2>
            <p className="text-lg leading-relaxed">
              Education is the passport to the world. No child should fall behind academically.
            </p>
          </div>
          <div className="bg-white text-gray-800 p-6 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold text-pink-600 mb-4">Mission</h2>
            <p className="text-lg leading-relaxed">
              We strive to provide a safe and learning environment for preschool-age children to reach their maximum potential.
            </p>
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-center text-white-300 mb-8">Testimonials</h2>
          <div className="relative overflow-hidden bg-white p-8 rounded-lg shadow-lg text-gray-800">
            {/* Sliding Box */}
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-full md:w-[300px] p-6 mx-auto text-center"
                >
                  <img
                    src={testimonial.image}
                    alt={`Testimonial ${index}`}
                    className="w-full h-[150px] object-cover rounded-md mb-4"
                  />
                  <p className="text-lg leading-relaxed mb-4">{testimonial.content}</p>
                  <h3 className="text-blue-600 font-bold">{testimonial.name}</h3>
                </div>
              ))}
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-2 top-[50%] transform -translate-y-[50%] bg-blue-500 text-white p-3 rounded-full hover:bg-blue-600"
            >
              &#8592;
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-2 top-[50%] transform -translate-y-[50%] bg-blue-500 text-white p-3 rounded-full hover:bg-blue-600"
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
