import React from 'react';
import { Palette, Music, BookOpen, Gamepad2, Bus, Camera } from 'lucide-react';

const Activities = () => {
  const activities = [
    {
      icon: <Palette className="w-12 h-12 text-pink-500" />,
      title: 'Drawing & Painting',
      description: 'Express creativity through colors and shapes',
      color: 'bg-pink-50'
    },
    {
      icon: <Music className="w-12 h-12 text-purple-500" />,
      title: 'Music & Dance',
      description: 'Develop rhythm and coordination skills',
      color: 'bg-purple-50'
    },
    {
      icon: <BookOpen className="w-12 h-12 text-blue-500" />,
      title: 'Storytelling',
      description: 'Enhance language and imagination',
      color: 'bg-blue-50'
    },
    {
      icon: <Gamepad2 className="w-12 h-12 text-green-500" />,
      title: 'Educational Games',
      description: 'Learn through interactive play',
      color: 'bg-green-50'
    },
    {
      icon: <Bus className="w-12 h-12 text-yellow-500" />,
      title: 'Field Trips',
      description: 'Explore and learn outside the classroom',
      color: 'bg-yellow-50'
    },
    {
      icon: <Camera className="w-12 h-12 text-red-500" />,
      title: 'Photography',
      description: 'Capture moments and develop creativity',
      color: 'bg-red-50'
    }
  ];

  return (
    <section
      className="py-20"
      style={{
        backgroundImage: "url('https://t3.ftcdn.net/jpg/07/10/94/28/360_F_710942843_CCIwzsAQCYCjRyZyrVssJltMiLFd71F1.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Our Activities</h2>
<p className="text-white max-w-4xl mx-auto">
  Engaging activities designed to nurture creativity, learning, and development in a fun environment.
</p>

         
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activities.map((activity) => (
            <div
              key={activity.title}
              className={`${activity.color} rounded-xl shadow-lg p-8 transform hover:scale-105 transition-all duration-300 hover:shadow-xl`}
            >
              <div className="flex flex-col items-center text-center">
                <div className="bg-white p-4 rounded-full shadow-md mb-6">
                  {activity.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{activity.title}</h3>
                <p className="text-gray-600">{activity.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Activities;
