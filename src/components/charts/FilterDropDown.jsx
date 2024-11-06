import React from 'react';
import { HiChevronDown } from 'react-icons/hi'; // Importing the chevron-down icon

const DoctorFilter = () => {
  return (
    <div className="flex justify-center mt-4">
      <div className="relative w-32">
        <select
          className="w-full py-2 pl-3 pr-10 rounded-lg text-black focus:outline-none focus:ring-2 border border-black"
        >
          <option value="All">All</option>
          <option value="Cardiologist">Cardiologist</option>
          <option value="Dentist">Dentist</option>
          <option value="Neurologist">Neurologist</option>
          <option value="Orthopedic">Orthopedic</option>
          <option value="Pediatrician">Pediatrician</option>
        </select>
        <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500">
             {HiChevronDown}
        </span>
      </div>
    </div>
  );
};

export default DoctorFilter;
