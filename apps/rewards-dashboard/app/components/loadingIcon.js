import React from 'react';

export const LoadingIcon = () => {
  return (
    <div className="mx-auto border border-gray-600 rounded-lg shadow-md ring-0 ring-offset-0 bg-[#181c21] w-12 h-12 flex items-center justify-center">
      <img
        src="/loading-icon.svg"
        className="animate-spin w-6 h-6 filter invert"
        alt="Loading Icon"
      />
    </div>
  );
};
