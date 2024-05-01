import React from 'react';

const NotFound = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-50">
      <div className="text-center">
        <img src="./src/assets/404.png" className='w-96 h-80' alt="" />
        <h1 className="text-5xl font-bold text-gray-700 mb-4">Uh-oh!</h1>
        <p className="text-lg text-gray-600 mb-2">We couldn't find the page you're looking for.</p>
        <p className="text-lg text-gray-600 mb-8">It seems you've reached a dead end...</p>
        <a href="/" className="text-darkGreen hover:underline">Go back to home</a>
      </div>
    </div>
  );
};

export default NotFound;
