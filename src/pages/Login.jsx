import React, { useState } from 'react';

const Login = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Phone Number:', phoneNumber);
    console.log('Email:', email);
    console.log('Password:', password);
    // You can also redirect the user or perform validation here
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-bold mb-6 text-center">Log In</h2>
        
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Enter your Phone Number</label>
          <input 
            type="tel" 
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            className="border border-gray-300 p-2 w-full rounded" 
            placeholder="Your phone number" 
            required 
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Enter your Email</label>
          <input 
            type="email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border border-gray-300 p-2 w-full rounded" 
            placeholder="Your email" 
            required 
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Enter your Password</label>
          <input 
            type="password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border border-gray-300 p-2 w-full rounded" 
            placeholder="Your password" 
            required 
          />
        </div>

        <button 
          type="submit" 
          className="bg-green-600 text-white px-4 py-2 rounded w-full hover:bg-green-500 transition duration-200"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;
