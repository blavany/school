import React from 'react';

const WhatsAppButton = () => {
  const phoneNumber = "3154021234"; // Replace with the actual phone number (with country code)
  const whatsappLogo = "https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"; // WhatsApp official logo URL

  return (
    <a
      href={`https://wa.me/${phoneNumber}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 left-8 bg-green-500 p-3 rounded-full shadow-lg hover:bg-green-600 transition-colors duration-200 z-50"
      aria-label="Chat on WhatsApp"
    >
      <img src={whatsappLogo} alt="WhatsApp" className="h-10 w-10" />
    </a>
  );
};

export default WhatsAppButton;
