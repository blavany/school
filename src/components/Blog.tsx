import React from 'react';

const Blog = () => {
  const posts = [
    {
      image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=80',
      title: 'The Importance of Early Education',
      excerpt: 'Discover why early education plays a crucial role in your child',
      date: 'March 15, 2024'
    },
    {
      image: 'https://www.kidz.priyalallsphotography.in/activities/co-curricular/large/1.jpg',
      title: 'Creative Activities for Preschoolers',
      excerpt: 'Fun and educational activities to try with your preschooler at home.',
      date: 'March 10, 2024'
    },
    {
      image: 'https://images.unsplash.com/photo-1588075592446-265fd1e6e76f?auto=format&fit=crop&w=800&q=80',
      title: 'Healthy Eating Habits for Kids',
      excerpt: 'Tips for developing healthy eating habits in early childhood.',
      date: 'March 5, 2024'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Latest from Our Blog</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post) => (
            <div
              key={post.title}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <p className="text-sm text-blue-600 mb-2">{post.date}</p>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{post.title}</h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <button className="text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-200">
                  Read More →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;