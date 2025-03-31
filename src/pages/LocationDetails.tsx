import React from 'react';
import { useParams } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, Users, GraduationCap, Navigation } from 'lucide-react';
import { motion } from 'framer-motion';
import Footer from '../components/Footer';

const LocationDetail = () => {
  const { id } = useParams<{ id: string }>();
  // You would typically fetch the location data based on the ID
  // For now, we'll just display a sample layout

  return (
    <div className="pt-20 min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="container mx-auto px-4 py-16">
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          {/* Hero Section */}
          <div className="relative h-96">
            <img
              src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1920&q=80"
              alt="Location"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
            <div className="absolute bottom-8 left-8 right-8 text-white">
              <h1 className="text-4xl font-bold mb-2">Location Name</h1>
              <p className="text-xl opacity-90">City, State</p>
            </div>
          </div>

          {/* Content */}
          <div className="p-8">
            {/* Overview */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">Overview</h2>
              <p className="text-gray-600">
                Detailed description of the location, its history, and what makes it special...
              </p>
            </section>

            {/* Programs */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">Our Programs</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {/* Program cards would go here */}
              </div>
            </section>

            {/* Facilities */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">Facilities</h2>
              <div className="grid md:grid-cols-4 gap-6">
                {/* Facility cards would go here */}
              </div>
            </section>

            {/* Contact Information */}
            <section className="bg-gray-50 rounded-xl p-8">
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-blue-600" />
                    <p className="text-gray-600">Address goes here</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-blue-600" />
                    <p className="text-gray-600">Phone number</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-blue-600" />
                    <p className="text-gray-600">Email address</p>
                  </div>
                </div>
                <div>
                  {/* Add a contact form or map here */}
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LocationDetail;