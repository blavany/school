import React from 'react';
import { BookOpen, Palette, Calculator, FileWarning as Running, Bus, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';
import Footer from '../components/Footer';

const Activities = () => {
  const activities = [
    {
      icon: <BookOpen className="w-12 h-12 text-blue-500" />,
      title: 'English',
      description: 'Building strong language and communication skills',
      color: 'bg-blue-50',
      images: [
        'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1544717297-fa95b6ee9643?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1588075592446-265fd1e6e76f?auto=format&fit=crop&w=800&q=80'
      ]
    },
    {
      icon: <Palette className="w-12 h-12 text-pink-500" />,
      title: 'Art',
      description: 'Fostering creativity and artistic expression',
      color: 'bg-pink-50',
      images: [
        'https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1594608661623-aa0bd3a69d98?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1519331379826-f10be5486c6f?auto=format&fit=crop&w=800&q=80'
      ]
    },
    {
      icon: <Calculator className="w-12 h-12 text-purple-500" />,
      title: 'Math',
      description: 'Developing logical thinking and problem-solving skills',
      color: 'bg-purple-50',
      images: [
        'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1444723121867-7a241cacace9?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=800&q=80'
      ]
    },
    {
      icon: <Running className="w-12 h-12 text-green-500" />,
      title: 'Physical Education',
      description: 'Promoting health and physical development',
      color: 'bg-green-50',
      images: [
        'https://images.unsplash.com/photo-1540479859555-17af45c78602?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1594608661623-aa0bd3a69d98?auto=format&fit=crop&w=800&q=80'
      ]
    },
    {
      icon: <Bus className="w-12 h-12 text-yellow-500" />,
      title: 'Field Trips',
      description: 'Learning through real-world experiences',
      color: 'bg-yellow-50',
      images: [
        'https://images.unsplash.com/photo-1521464302861-ce943915d1c3?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1444723121867-7a241cacace9?auto=format&fit=crop&w=800&q=80'
      ]
    },
    {
      icon: <Calendar className="w-12 h-12 text-red-500" />,
      title: 'Events',
      description: 'Celebrating learning through special occasions',
      color: 'bg-red-50',
      images: [
        'https://images.unsplash.com/photo-1540479859555-17af45c78602?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1594608661623-aa0bd3a69d98?auto=format&fit=crop&w=800&q=80'
      ]
    }
  ];

  const [selectedActivity, setSelectedActivity] = React.useState<number | null>(null);

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Activities</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Engaging activities designed to nurture creativity, learning, and development in a fun environment.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activities.map((activity, index) => (
            <motion.div
              key={activity.title}
              className={`${activity.color} rounded-xl shadow-lg overflow-hidden cursor-pointer
                transform transition-all duration-300 hover:shadow-xl`}
              whileHover={{ scale: 1.02 }}
              onClick={() => setSelectedActivity(selectedActivity === index ? null : index)}
            >
              <div className="p-8">
                <div className="flex flex-col items-center text-center">
                  <div className="bg-white p-4 rounded-full shadow-md mb-6">
                    {activity.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{activity.title}</h3>
                  <p className="text-gray-600 mb-6">{activity.description}</p>
                </div>

                {/* Image Gallery */}
                <motion.div
                  className="grid grid-cols-3 gap-2 mt-4"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{
                    opacity: selectedActivity === index ? 1 : 0,
                    height: selectedActivity === index ? 'auto' : 0
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {activity.images.map((image, imgIndex) => (
                    <div
                      key={imgIndex}
                      className="relative aspect-square rounded-lg overflow-hidden"
                    >
                      <img
                        src={image}
                        alt={`${activity.title} ${imgIndex + 1}`}
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <Footer/>
    </section>
  );
};

export default Activities;