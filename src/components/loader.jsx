import React from 'react';

function Loader() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-50">
      <div className="loader">
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
      </div>
    </div>
  );
}

export default Loader;
