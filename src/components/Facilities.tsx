import React from 'react';
import { Book, PlayCircle, Monitor, Music, Utensils, Heart } from 'lucide-react';

const Facilities = () => {
  const facilities = [
    {
      image: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=800&q=80',
      icon: <Book className="w-8 h-8" />,
      title: 'Modern Library',
      description: 'A vast collection of children',
      features: ['Interactive reading sessions', 'Digital learning resources', 'Comfortable reading spaces']
    },
    {
      image: 'https://5.imimg.com/data5/SELLER/Default/2023/6/319286839/QX/TB/BT/44179044/outdoor-playground-equipment.jpeg',
      icon: <PlayCircle className="w-8 h-8" />,
      title: 'Play Area',
      description: 'Safe and engaging outdoor playground equipment',
      features: ['Age-appropriate equipment', 'Soft play surfaces', 'Covered areas']
    },
    {
      image: 'https://preprimaryschools.com/assets/uploads/school/home/25042022014006_834428_Wonder-Kidz-Smart-Play-School-Anantapur-(3).jpg',
      icon: <Monitor className="w-8 h-8" />,
      title: 'Smart Classrooms',
      description: 'Technology-enabled learning environments',
      features: ['Interactive whiteboards', 'Educational software', 'Digital learning tools']
    },
    {
      image: 'https://live.staticflickr.com/4415/35561488273_dcccec0be7_b.jpg',
      icon: <Music className="w-8 h-8" />,
      title: 'Music Room',
      description: 'Dedicated space for musical exploration and learning',
      features: ['Musical instruments', 'Sound-proof rooms', 'Performance area']
    },
    {
      image: 'https://images.adsttc.com/media/images/5553/ffdf/e58e/ce16/aa00/00af/large_jpg/KHB311_d_65315-4.jpg?1431568339',
      icon: <Utensils className="w-8 h-8" />,
      title: 'Dining Area',
      description: 'Clean and comfortable space for meals and snacks',
      features: ['Hygienic environment', 'Nutritious meals', 'Dietary accommodations']
    },
    {
      image: 'https://t4.ftcdn.net/jpg/06/22/58/09/360_F_622580935_LXvKNp40MuAqaU8VUAuErbtj9TeZVRWc.jpg',
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