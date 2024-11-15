import React from 'react';

const Logo = () => {
  return (
    <div className="flex items-center justify-center w-6 h-6 bg-gradient-to-r from-green-400 to-blue-500 rounded-full">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-8 w-8 text-white"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2L2 12h10v10l10-10H12V2z" />
    </svg>
  </div>
  );
};

export default Logo;