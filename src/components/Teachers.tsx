import React from 'react';
import { Heart, Brain, Star } from 'lucide-react';
import image1 from './images/logo/ourteam1.jpg'
import image2 from './images/logo/ourteam2.avif'
import image3 from './images/logo/ourteam3.jpg'


const Teachers = () => {
  const teachers = [
    {
      name: 'John Doe',
      role: 'Math Teacher',
      image: image1,
      backgroundColor: 'bg-blue-200',
    },
    {
      name: 'Jane Smith',
      role: 'English Teacher',
      image: image2,
      backgroundColor: 'bg-green-200',
    },
    {
      name: 'Bob Johnson',
      role: 'Science Teacher',
      image: image3,
      backgroundColor: 'bg-yellow-200',
    },
    {
      name: 'Alice Williams',
      role: 'Art Teacher',
      image: 'https://static.vecteezy.com/system/resources/previews/040/754/527/non_2x/ai-generated-woman-standing-with-arms-crossed-in-classroom-generative-ai-photo.jpg',
      backgroundColor: 'bg-purple-200',
    },
  ];

  return (
    <section className="py-20 bg-white">
      {/* Teacher Profiles Section */}
      <div className="bg-gradient-to-r from-blue-200 to-green-200 py-10">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-8"> Our Team</h2>
          <div className="flex flex-wrap justify-center gap-10">
            {teachers.map((teacher, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className={`rounded-full ${teacher.backgroundColor} p-4`}>
                  <img
                    src={teacher.image}
                    alt={teacher.name}
                    className="rounded-full w-48 h-48 object-cover"
                  />
                </div>
                <div className="text-center mt-4">
                  <h3 className="text-lg font-bold text-gray-800">{teacher.name}</h3>
                  <p className="text-gray-600">{teacher.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Teachers;
