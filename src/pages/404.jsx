import React from 'react';

const NotFoundPage = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Oops!</h1>
        <p className="text-lg text-gray-600 mb-2">We couldn't find the page you're looking for.</p>
        <p className="text-lg text-gray-600 mb-8">It seems you've reached a dead end...</p>
        <a href="/" className="text-blue-600 hover:underline">Go back to home</a>
      </div>
    </div>
  );
};

export default NotFoundPage;
