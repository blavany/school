import React, { useEffect, useState } from 'react';

const Shop = () => {
  const [countdown, setCountdown] = useState('');

  useEffect(() => {
    const countDownDate = new Date("March 31, 2025 00:00:00").getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countDownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        clearInterval(interval);
        setCountdown("EXPIRED");
      } else {
        setCountdown(`${days}d ${hours}h ${minutes}m ${seconds}s`);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center justify-center h-screen bg-cover bg-center" style={{ backgroundImage: "url('/path/to/your/background.jpg')" }}>
      <div className="text-center bg-white bg-opacity-80 p-8 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-gray-800">Coming Soon</h1>
        <p className="mt-4 text-gray-600">We are working to launch W3 School Shop  . Stay tuned!</p>
        <div className="mt-6 text-lg font-semibold">{countdown}</div>
      </div>
    </div>
  );
};

export default Shop;
