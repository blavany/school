import React from 'react';
import { Heart, Brain, Star } from 'lucide-react';

const Teachers = () => {
  const teachers = [
    {
      name: 'John Doe',
      role: 'Math Teacher',
      image: 'https://www.leadershipbroward.org/wp-content/uploads/2017/06/photodune-3458394-teacher-m.jpg',
      backgroundColor: 'bg-blue-200',
    },
    {
      name: 'Jane Smith',
      role: 'English Teacher',
      image: 'https://img.freepik.com/premium-photo/kindergarten-teacher-playing-with-children_464463-777.jpg',
      backgroundColor: 'bg-green-200',
    },
    {
      name: 'Bob Johnson',
      role: 'Science Teacher',
      image: 'https://t4.ftcdn.net/jpg/02/15/27/85/360_F_215278578_ALaCqniUHq0YhMR9dSk6eSfLH9hJ6KJ6.jpg',
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
