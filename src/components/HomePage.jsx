import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

// Navbar Component
const Navbar = () => {
  return (
    <nav className="bg-green-600 p-4 flex justify-between items-center">
      <div className="text-white font-bold text-lg">ZeroHunger</div>
      <div>
        <Link to="/" className="text-white mx-2 hover:underline hover:text-green-300 transition duration-200">Home</Link>
        <Link to="/pages/Donate" className="text-white mx-2 hover:underline hover:text-green-300 transition duration-200">Donate</Link>
        <Link to="/pages/About" className="text-white mx-2 hover:underline hover:text-green-300 transition duration-200">About</Link>
        <Link to="/pages/Contact" className="text-white mx-2 hover:underline hover:text-green-300 transition duration-200">Contact</Link>
        <Link to="/pages/Login" className="text-white mx-2 hover:bg-green-500 transition duration-200 rounded-full px-4 py-2">Log in</Link>
        <Link to="/pages/signup" className="bg-white text-green-600 px-4 py-2 rounded-full hover:bg-green-200 transition duration-200">Sign up</Link>
      </div>
    </nav>
  );
};

// Hero Component
const Hero = () => {
  return (
    <div className="bg-gray-100 p-6 text-center">
      <h1 className="text-4xl font-bold">Welcome to ZeroHunger</h1>
      <p className="mt-2">Tackling food wastage and feeding those in need with our decentralized initiative</p>
      <button className="bg-green-600 text-white px-4 py-2 rounded mt-4 hover:bg-green-500">Get Involved</button>
    </div>
  );
};

// Donation Component
const Donation = () => {
  return (
    <div className="border p-4 rounded-lg text-center overflow-hidden">
      <img 
        src="/image-1.jpg" 
        alt="Donation" 
        className="w-full h-48 object-cover rounded-lg mb-4 transform transition-transform duration-300 hover:scale-105" 
      />
      <h2 className="text-2xl font-bold">Donate</h2>
      <p>Your contributions can make a difference!</p>
    </div>
  );
};

// Recipient Component
const Recipient = () => {
  return (
    <div className="border p-4 rounded-lg text-center overflow-hidden">
      <img 
        src="/image-2.jpg" 
        alt="Recipient" 
        className="w-full h-48 object-cover rounded-lg mb-4 transform transition-transform duration-300 hover:scale-105" 
      />
      <h2 className="text-2xl font-bold">Recipient</h2>
      <p>Helping those in need receive food supplies.</p>
    </div>
  );
};

// Volunteer Component
const Volunteer = () => {
  return (
    <div className="border p-4 rounded-lg text-center overflow-hidden">
      <img 
        src="/image-3.jpg" 
        alt="Volunteer" 
        className="w-full h-48 object-cover rounded-lg mb-4 transform transition-transform duration-300 hover:scale-105" 
      />
      <h2 className="text-2xl font-bold">Volunteer</h2>
      <p>Join us in making a change!</p>
    </div>
  );
};

const HomePage = () => {
  console.log("HomePage rendered"); 
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="flex justify-around p-4">
        <Donation />
        <Recipient />
        <Volunteer />
      </div>
    </div>
  );
};

export default HomePage;