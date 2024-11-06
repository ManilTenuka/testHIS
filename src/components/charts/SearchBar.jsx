import React from 'react';

const SearchBar = () => {
  return (
    <div className="flex justify-center items-center mt-4">
      <div className="relative w-96">
        <input
          type="text"
          placeholder="Search..."
          className="w-full py-2 pl-10 pr-4 rounded-full border border-black text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
          🔍
        </span>
      </div>
    </div>
  );
};

export default SearchBar;
