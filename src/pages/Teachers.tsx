import React from 'react';
import { Mail, Phone } from 'lucide-react';
import Footer from '../components/Footer';

const Teachers = () => {
  const teachers = [
    {
      name: 'Sarah Johnson',
      position: 'Head Teacher',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80',
      education: 'M.Ed. in Early Childhood Education',
      experience: '15+ years',
      specialization: 'Early Childhood Development',
      email: 'sarah.j@b4school.com',
      // phone: '(555) 123-4567'
    },
    {
      name: 'Michael Chen',
      position: 'Art Teacher',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80',
      education: 'B.F.A. in Art Education',
      experience: '8 years',
      specialization: 'Creative Arts',
      email: 'michael.c@b4school.com',
      // phone: '(555) 123-4568'
    },
    {
      name: 'Emily Rodriguez',
      position: 'Music Teacher',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=400&q=80',
      education: 'B.Mus. in Music Education',
      experience: '10 years',
      specialization: 'Early Music Education',
      email: 'emily.r@b4school.com',
      // phone: '(555) 123-4569'
    }
  ];

  return (
    <div className="pt-20 bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">Our Teachers</h1>
        
        <div className="grid md:grid-cols-3 gap-8">
          {teachers.map((teacher) => (
            <div key={teacher.name} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src={teacher.image}
                alt={teacher.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-2">{teacher.name}</h2>
                <h3 className="text-lg text-blue-600 mb-4">{teacher.position}</h3>
                
                <div className="space-y-3 text-gray-600">
                  <p><strong>Education:</strong> {teacher.education}</p>
                  <p><strong>Experience:</strong> {teacher.experience}</p>
                  <p><strong>Specialization:</strong> {teacher.specialization}</p>
                  
                  <div className="pt-4 space-y-2">
                    <div className="flex items-center">
                      <Mail className="w-5 h-5 text-blue-600 mr-2" />
                      <a href={`mailto:${teacher.email}`} className="hover:text-blue-600">
                        {teacher.email}
                      </a>
                    </div>
                    <div className="flex items-center">
                      {/* <Phone className="w-5 h-5 text-blue-600 mr-2" /> */}
                      {/* <a href={`tel:${teacher.phone}`} className="hover:text-blue-600">
                        {teacher.phone}
                      </a> */}
                    </div>
                  </div>
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

export default Teachers;