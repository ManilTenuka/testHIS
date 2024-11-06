// src/components/NavigationBar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { MdDashboard, MdSchool, MdPerson, MdClass, MdSchedule   } from 'react-icons/md';
import { IoIosLogOut } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';
import { FaUserNurse } from 'react-icons/fa';  // Nurse icon
import { MdEvent } from 'react-icons/md';  // Appointment icon
import { FaHospital } from 'react-icons/fa';  // Hospital icon
import { MdLocalHospital } from 'react-icons/md'; // Ward icon alternative



const NavigationBar = () => {

  
  return (
    <nav className="flex flex-col justify-between items-center h-screen p-4 bg-gray-800 text-white">
    <div className="flex flex-col gap-10 items-center mt-20">
      <div className="flex flex-col sm:flex-row items-center gap-2 p-2 rounded-md hover:bg-gray-700 hover:text-gray-200 transition-all duration-200 ease-in-out">
        <MdPerson size={20} />
        <Link to="adminDashboard">Doctors</Link>
      </div>
      
      <div className="flex flex-col sm:flex-row  items-center gap-2 p-2 rounded-md hover:bg-gray-700 hover:text-gray-200 transition-all duration-200 ease-in-out">
        <MdPerson size={20} />
        <Link to="manageStudents">Patients</Link>
      </div>
      
      <div className="flex flex-col sm:flex-row  items-center gap-2 p-2 rounded-md hover:bg-gray-700 hover:text-gray-200 transition-all duration-200 ease-in-out">
        <MdEvent size={20} />
        <Link to="manageTeachers">Appointments</Link>
      </div>
      
      <div className="flex flex-col sm:flex-row items-center gap-2 p-2 rounded-md hover:bg-gray-700 hover:text-gray-200 transition-all duration-200 ease-in-out">
        <MdLocalHospital size={20} />
        <Link to="manageCourses">Wards</Link>
      </div>
      
      
      
    </div>
     
    <div className="flex items-center gap-2 cursor-pointer mb-8">
        <IoIosLogOut size={20} />
        Logout
    </div>
  </nav>
  
  );
};

export default NavigationBar;
