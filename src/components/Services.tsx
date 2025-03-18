import React from 'react';
import { Heart, Brain, Utensils, Clock, Shield, Users } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Heart className="w-12 h-12 text-pink-500" />,
      title: 'Childcare',
      description: 'Safe and nurturing environment for your child',
      features: ['Personalized care', 'Emotional support', 'Safe environment']
    },
    {
      icon: <Brain className="w-12 h-12 text-purple-500" />,
      title: 'Early Learning',
      description: 'Structured programs to develop cognitive and social skills',
      features: ['Age-appropriate curriculum', 'Skill development', 'Interactive learning']
    },
    {
      icon: <Shield className="w-12 h-12 text-blue-500" />,
      title: 'Safety First',
      description: 'Comprehensive safety measures and trained staff',
      features: ['24/7 monitoring', 'Trained staff', 'Emergency protocols']
    },
    {
      icon: <Utensils className="w-12 h-12 text-green-500" />,
      title: 'Healthy Meals',
      description: 'Nutritious and balanced meals prepared fresh daily',
      features: ['Fresh ingredients', 'Balanced nutrition', 'Dietary options']
    },
    {
      icon: <Users className="w-12 h-12 text-yellow-500" />,
      title: 'Social Development',
      description: 'Foster friendship and social skills through group activities',
      features: ['Group activities', 'Communication skills', 'Team building']
    },
    {
      icon: <Clock className="w-12 h-12 text-red-500" />,
      title: 'Extended Hours',
      description: 'Flexible scheduling to accommodate working parents',
      features: ['Early drop-off', 'Late pickup', 'Weekend programs']
    }
  ];

  return (
    <section
      className="py-20 relative"
      style={{
        backgroundImage: "url('https://png.pngtree.com/thumb_back/fh260/background/20190221/ourmid/pngtree-cartoon-simple-kindergarten-starting-school-image_13536.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-yellow-900 mb-4">Our Services</h2>
<p className="text-white max-w-3xl mx-auto">
  Comprehensive childcare services designed to support your child's development and your family's needs.
</p>

        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white/80 rounded-xl shadow-lg p-8 border border-gray-100 hover:border-blue-500 transition-all duration-300" // Semi-transparent white
            >
              <div className="flex flex-col h-full">
                <div className="flex items-center mb-6">
                  <div className="p-3 rounded-lg bg-gray-50">{service.icon}</div>
                  <h3 className="text-xl font-bold text-gray-800 ml-4">{service.title}</h3>
                </div>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="mt-auto space-y-2">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-600">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
