import React from 'react';
import { Book, PlayCircle, Monitor, Music, Utensils, Heart } from 'lucide-react';
import image1 from './images/logo/activity1.avif'
import image2 from './images/logo/facilities2.jpeg'

import image3 from './images/logo/facilities3.jpeg'
import image4 from './images/logo/facilities4.jpg'
import image5 from './images/logo/facilities5.jpg'
import image6 from './images/logo/facilities6.jpg'

const Facilities = () => {
  const facilities = [
    {
      image: image1,
      icon: <Book className="w-8 h-8" />,
      title: 'Modern Library',
      description: 'A vast collection of children',
      features: ['Interactive reading sessions', 'Digital learning resources', 'Comfortable reading spaces']
    },
    {
      image: image2,
      icon: <PlayCircle className="w-8 h-8" />,
      title: 'Play Area',
      description: 'Safe and engaging outdoor playground equipment',
      features: ['Age-appropriate equipment', 'Soft play surfaces', 'Covered areas']
    },
    {
      image: image3,
      icon: <Monitor className="w-8 h-8" />,
      title: 'Smart Classrooms',
      description: 'Technology-enabled learning environments',
      features: ['Interactive whiteboards', 'Educational software', 'Digital learning tools']
    },
    {
      image: image4,
      icon: <Music className="w-8 h-8" />,
      title: 'Music Room',
      description: 'Dedicated space for musical exploration and learning',
      features: ['Musical instruments', 'Sound-proof rooms', 'Performance area']
    },
    {
      image: image5,
      icon: <Utensils className="w-8 h-8" />,
      title: 'Dining Area',
      description: 'Clean and comfortable space for meals and snacks',
      features: ['Hygienic environment', 'Nutritious meals', 'Dietary accommodations']
    },
    {
      image: image6,
      icon: <Heart className="w-8 h-8" />,
      title: 'Medical Room',
      description: 'Well-equipped facility for basic medical care',
      features: ['First aid equipment', 'Trained staff', 'Emergency protocols']
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Facilities</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            State-of-the-art facilities designed to provide the best learning environment for your child.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facilities.map((facility) => (
            <div
              key={facility.title}
              className="group bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <div className="relative h-64">
                <img
                  src={facility.image}
                  alt={facility.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 right-4 text-white transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <ul className="text-sm space-y-1">
                    {facility.features.map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-blue-100 rounded-lg text-blue-600 mr-3">
                    {facility.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">{facility.title}</h3>
                </div>
                <p className="text-gray-600">{facility.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Facilities;