import React from 'react';
import { BookOpen, Clock, Users } from 'lucide-react';
import Footer from '../components/Footer';

const Classes = () => {
  const classes = [
    {
      name: 'Pre-KG',
      ageGroup: '2-3 years',
      schedule: 'Monday to Friday, 9:00 AM - 12:00 PM',
      description: 'Early development focused on social skills and basic concepts.',
      activities: ['Play-based learning', 'Basic numbers', 'Colors and shapes', 'Story time']
    },
    {
      name: 'Lower KG',
      ageGroup: '3-4 years',
      schedule: 'Monday to Friday, 9:00 AM - 1:00 PM',
      description: 'Building foundation in literacy and numeracy through interactive learning.',
      activities: ['Phonics', 'Writing practice', 'Basic math', 'Art and craft']
    },
    {
      name: 'Upper KG',
      ageGroup: '4-5 years',
      schedule: 'Monday to Friday, 9:00 AM - 2:00 PM',
      description: 'Comprehensive preparation for primary education.',
      activities: ['Reading and writing', 'Numbers and counting', 'Environmental awareness', 'Physical education']
    }
  ];

  return (
    <div className="pt-20 bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">Our Classes</h1>
        
        <div className="grid md:grid-cols-3 gap-8">
          {classes.map((classItem) => (
            <div key={classItem.name} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">{classItem.name}</h2>
                
                <div className="flex items-center mb-4">
                  <Users className="w-5 h-5 text-blue-600 mr-2" />
                  <span className="text-gray-600">{classItem.ageGroup}</span>
                </div>
                
                <div className="flex items-center mb-4">
                  <Clock className="w-5 h-5 text-blue-600 mr-2" />
                  <span className="text-gray-600">{classItem.schedule}</span>
                </div>
                
                <p className="text-gray-600 mb-6">{classItem.description}</p>
                
                <div className="space-y-2">
                  <h3 className="font-semibold text-gray-800 flex items-center">
                    <BookOpen className="w-5 h-5 text-blue-600 mr-2" />
                    Activities
                  </h3>
                  <ul className="list-disc list-inside text-gray-600 ml-4">
                    {classItem.activities.map((activity) => (
                      <li key={activity}>{activity}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Classes;