import React from 'react';
import Slide1 from './images/logo/header image1.avif'; 
import Slide2 from './images/logo/headerimage2.jpg';
import Slide3 from './images/logo/headerimage4.jpg';

const Hero = () => {
  const slides = [
    {
      image: Slide1,
      title: "Welcome to B4School",
      subtitle: "Where Learning Begins with Joy"
    },
    {
      image: Slide2,
      title: "Quality Education for Kids",
      subtitle: "Nurturing Young Minds for a Brighter Future"
    },
    {
      image: Slide3,
      title: "Art & Physical Education",
      subtitle:"Promotes child’s creativity and encourages kids to stay healthy.",
      
    },
  ];
  const colors = ["text-red-500", "text-orange-500", "text-yellow-500", "text-green-500", "text-blue-500", "text-indigo-500", "text-purple-500"];
  
  const [currentSlide, setCurrentSlide] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-screen overflow-hidden pt-16 md:pt-24">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ 
              backgroundImage: `url(${slide.image})`,
              backgroundSize: 'cover', 
              backgroundPosition: 'center',
              height: 'calc(100% - -15rem)', 
              width: '100%'
            }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-40" />
          </div>
          <div className="relative h-full flex items-center justify-center text-center">
            <div className="text-white px-4">
              {index === 0 ? (
                // First Slide: "Welcome" with different colors
                <h1 className="text-5xl md:text-6xl font-bold mb-4">
                  {["W", "e", "l", "c", "o", "m", "e"].map((letter, i) => (
                    <span key={i} className={`${colors[i]} drop-shadow-md`}>
                      {letter}
                    </span>
                  ))} 
                  <span className="text-white"> to B4School</span>
                </h1>
              ) : (
               
                <h1 className="text-5xl md:text-6xl font-bold mb-4">{slide.title}</h1>
              )}
              <p className="text-xl md:text-2xl">{slide.subtitle}</p>
            </div>
          </div>
        </div>
      ))}
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-colors duration-200 ${
              index === currentSlide ? 'bg-white' : 'bg-white/50'
            }`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;
