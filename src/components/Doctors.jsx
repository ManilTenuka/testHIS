import React from 'react'
import NavigationBar from './Navigation'
import BarChart from './charts/BarChart'
import PieChart from './charts/PieChart'
import LineChart from './charts/LineChart'
import SearchBar from './charts/SearchBar'
import DoctorFilter from './charts/FilterDropDown'
import { FaUserMd } from 'react-icons/fa';
import { MdPerson } from 'react-icons/md'; 
import { FaUserNurse } from 'react-icons/fa';  // Nurse icon
import { MdEvent } from 'react-icons/md';  // Appointment icon
import { FaHospital } from 'react-icons/fa';  // Hospital icon
import { MdLocalHospital } from 'react-icons/md'; // Ward icon alternative
import Card from './Card'


const Doctors = () => {
    const doctors = [
        { id: 1, name: "Dr. John Doe", specialty: "Cardiology", contact: "123-456-7890", hospital: "City Hospital" },
        { id: 2, name: "Dr. Jane Smith", specialty: "Neurology", contact: "987-654-3210", hospital: "General Hospital" },
        { id: 3, name: "Dr. Emily Clark", specialty: "Orthopedics", contact: "555-555-5555", hospital: "River Hospital" },
        { id: 4, name: "Dr. Michael Brown", specialty: "Pediatrics", contact: "111-222-3333", hospital: "Children's Hospital" },
        { id: 5, name: "Dr. Sarah White", specialty: "Dermatology", contact: "444-444-4444", hospital: "Sunshine Clinic" },
      ];
  return (
    
    <div className='flex ' >
    <div className='w-1/4'>
    <NavigationBar />
    </div>
    <div className='w-3/4'>
    <div className='flex mt-[4%] gap-4 justify-center'>
        <div><Card str={"Total Doctors"} amount={10} icon = {<FaUserMd/>} /></div>
        <div><Card str={"Total Nurses"} amount={6} icon={<FaUserNurse/>}/></div>
        <div><Card str={"Total Patients"} amount={3} icon = {<MdPerson/>} /></div>

    </div>
    <div className='flex flex-col justify-center items-center mt-[3%] '>

    <div className='flex gap-6 '>
        <SearchBar/>
        <DoctorFilter />
    </div>
   
    <div className="table-container ">
    <div className="">
      <h2 className="text-2xl font-semibold mb-4"></h2>
      <table className="min-w-full table-auto bg-gray-700 text-white rounded-lg ">
        <thead>
          <tr className="bg-gray-600">
            <th className="px-4 py-2">ID</th>
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Specialty</th>
            <th className="px-4 py-2">Contact</th>
            <th className="px-4 py-2">Hospital</th>
          </tr>
        </thead>
        <tbody>
          {doctors.map((doctor) => (
            <tr key={doctor.id} className="hover:bg-gray-600">
              <td className="px-4 py-2">{doctor.id}</td>
              <td className="px-4 py-2">{doctor.name}</td>
              <td className="px-4 py-2">{doctor.specialty}</td>
              <td className="px-4 py-2">{doctor.contact}</td>
              <td className="px-4 py-2">{doctor.hospital}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
    </div>
    {/* <div className=''>
        <LineChart title = {"Doctors Enrolled Per Month" }/>
        <PieChart title = {"Doctor Type"}/>
        <PieChart title = {"Gender"}/>
    </div> */}
    <div className="w-full text-right ">
    <button className="ml-4 px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
        Create Report
    </button>
    </div>


   
    </div>
    </div>
  )
}

export default Doctors