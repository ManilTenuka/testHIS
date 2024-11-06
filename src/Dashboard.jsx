import React from 'react'
import Card from './components/Card'
import NavigationBar from './components/Navigation'
import { FaUserMd } from 'react-icons/fa';
import { MdPerson } from 'react-icons/md'; 
import { FaUserNurse } from 'react-icons/fa';  // Nurse icon
import { MdEvent } from 'react-icons/md';  // Appointment icon
import { FaHospital } from 'react-icons/fa';  // Hospital icon
import { MdLocalHospital } from 'react-icons/md'; // Ward icon alternative


const Dashboard = () => {
  return (
        <div className='flex'>
            <div className='w-1/4'>
            <NavigationBar />
            </div>
            
            <div className='flex justify-center mt-[5%] w-3/4'>
                <div className=' grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 ml-4  '>
                    
                    <div><Card str={"Total Doctors"} amount={10} icon = {<FaUserMd/>} /></div>
                    <div><Card str={"Total Nurses"} amount={6} icon={<FaUserNurse/>}/></div>
                    <div><Card str={"Total Patients"} amount={3} icon = {<MdPerson/>} /></div>
                    <div><Card str={"Total Appointments"} amount={1} icon={<MdEvent/>}/></div>
                    <div><Card str={"Total Hospitals"} amount={5} icon={<FaHospital/>}/></div>
                    <div><Card str={"Total Wards"} amount={7} icon={<MdLocalHospital/>}/></div>
                
                </div>
            </div>
            
        </div>

 
    
  )
}

export default Dashboard