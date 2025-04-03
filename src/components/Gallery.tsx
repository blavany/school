import React from 'react';

const Gallery = () => {
  const images = [
    {
      url: 'https://images.unsplash.com/photo-1543248939-ff40856f65d4?auto=format&fit=crop&w=800&q=80',
      caption: 'Learning Through Play'
    },
    {
      url: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=80',
      caption: 'Art & Creativity'
    },
    {
      url: 'https://images.unsplash.com/photo-1588075592446-265fd1e6e76f?auto=format&fit=crop&w=800&q=80',
      caption: 'Outdoor Activities'
    },
    {
      url: 'https://images.unsplash.com/photo-1544717297-fa95b6ee9643?auto=format&fit=crop&w=800&q=80',
      caption: 'Music & Movement'
    },
    {
      url: 'https://images.unsplash.com/photo-1554475901-4538ddfbccc2?auto=format&fit=crop&w=800&q=80',
      caption: 'Science Exploration'
    },
    {
      url: 'https://images.unsplash.com/photo-1526307616774-60d0098f7642?auto=format&fit=crop&w=800&q=80',
      caption: 'Special Events'
    }
  ];

  return (
    <section
      className="py-20"
      style={{
        backgroundImage: "url('https://static.vecteezy.com/system/resources/previews/053/858/016/non_2x/colorful-background-with-many-small-circles-the-circles-are-of-different-colors-and-sizes-the-background-is-a-mix-of-red-blue-and-purple-the-image-has-a-festive-and-lively-mood-free-photo.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-white mb-12">Our Gallery</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-lg"
            >
              <img
                src={image.url}
                alt={image.caption}
                className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <p className="text-white text-center font-semibold px-4">{image.caption}</p>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default Gallery;