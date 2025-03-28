import React from 'react';
import { Heart, Brain, Star } from 'lucide-react';

const About = () => {
  return (
    <section id="about-section" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-start gap-12">
          <div className="md:w-1/2">
            <img
              src="https://t4.ftcdn.net/jpg/02/00/82/69/360_F_200826934_COUjK2eRDXGBCmDs7qgghkWS8r43NwhQ.jpg"
              alt="Children learning together"
              className="rounded-lg shadow-xl w-full h-[400px] object-cover"
              loading="lazy"
            />
          </div>
          
          <div className="md:w-1/2 self-center">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">About Children Care</h2>
            <p className="text-gray-600 mb-8">
              At B4School, we believe every child deserves the best start in life. Our nurturing
              environment combines play-based learning with structured activities to develop
              essential skills and foster a love for learning.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <Heart className="w-8 h-8 text-pink-500 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">Nurturing Environment</h3>
                  <p className="text-gray-600">Creating a safe and loving space for children to grow</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <Brain className="w-8 h-8 text-blue-500 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">Cognitive Development</h3>
                  <p className="text-gray-600">Stimulating activities to enhance learning and creativity</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <Star className="w-8 h-8 text-yellow-500 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">Quality Education</h3>
                  <p className="text-gray-600">Expert teachers and proven educational methods</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;