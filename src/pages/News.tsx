import React from 'react';
import Footer from '../components/Footer';

const News = () => {
  const portfolioItems = [
    {
      title: 'Art Exhibition',
      category: 'Creative Arts',
      image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=800&q=80',
      description: 'Annual art exhibition showcasing our students'
    },
    {
      title: 'Sports Day',
      category: 'Physical Activities',
      image: 'https://images.unsplash.com/photo-1596464716127-f2a82984de30?auto=format&fit=crop&w=800&q=80',
      description: 'Fun-filled sports day with various physical activities and games.'
    },
    {
      title: 'Music Performance',
      category: 'Performing Arts',
      image: 'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?auto=format&fit=crop&w=800&q=80',
      description: 'Students showcasing their musical talents in our annual concert.'
    },
    {
      title: 'Science Fair',
      category: 'Education',
      image: 'https://images.unsplash.com/photo-1554475901-4538ddfbccc2?auto=format&fit=crop&w=800&q=80',
      description: 'Interactive science experiments and demonstrations by our young scientists.'
    },
    {
      title: 'Cultural Day',
      category: 'Culture',
      image: 'https://images.unsplash.com/photo-1526307616774-60d0098f7642?auto=format&fit=crop&w=800&q=80',
      description: 'Celebrating diversity through cultural performances and activities.'
    },
    {
      title: 'Reading Week',
      category: 'Literacy',
      image: 'https://www.precious-learners.com/wp-content/uploads/2022/10/310411244_623704189161282_798278585129646819_n.jpg',
      description: 'Promoting literacy through storytelling and reading activities.'
    }
  ];

  return (
    <div className="pt-20 bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">News</h1>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item) => (
            <div key={item.title} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
                  {item.category}
                </div>
              </div>
              
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-3">{item.title}</h2>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default News;