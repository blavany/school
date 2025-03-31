import React from 'react';
import Footer from '../components/Footer';
import image1 from '../components/images/logo/d3493ce8-9306-4067-83e3-7f1a671b2220-bottle.png';
import image2 from '../components/images/logo/lego-76261-spider-man-final-battle.webp';
import image3 from '../components/images/logo/firstreadersetof6.webp';
import image4 from '../components/images/logo/81ap+We87nL.jpg';

const Shop = () => {
  const products = [
    { id: 1, name: "Bottle", price: "$15", image: image1 },
    { id: 2, name: "Lego Set", price: "$25", image: image2 },
    { id: 3, name: "Kids Story Book", price: "$10", image: image3 },
    { id: 4, name: "Toy Car", price: "$12", image: image4 }
  ];

  return (
    <div className="pt-20 bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">Shop</h1>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 w-full max-w-4xl mx-auto">
          {products.map((product) => (
            <div key={product.id} className="bg-white p-6 rounded-lg shadow-md text-center flex flex-col items-center">
              <img src={product.image} alt={product.name} className="w-48 h-48 object-cover mb-4 rounded-lg" />
              <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
              <p className="text-gray-600">{product.price}</p>
              <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">Buy Now</button>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Shop;
