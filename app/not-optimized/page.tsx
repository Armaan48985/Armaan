import React from 'react';

const NotOptimizedPage = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-900 text-white px-6 py-8">
      <div className="text-center bg-gray-800 p-6 rounded-xl shadow-xl max-w-md w-full">
        <h1 className="text-2xl font-bold text-gray-200 mb-4">
          Oops! This website isn&apos;t optimized for mobile yet 📱
        </h1>
        <p className="text-lg text-gray-400 mb-6">
          We&apos;re sorry for the inconvenience 😔. For the best experience, please view this site on a desktop or laptop.
        </p>
        <p className="text-md text-gray-500">
          (If you&apos;re already on a laptop, please refresh the page! 🔄)
        </p>
      </div>
    </div>
  );
};

export default NotOptimizedPage;