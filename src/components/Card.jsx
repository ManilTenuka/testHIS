import React from 'react'
import { useNavigate } from 'react-router-dom'; 
const Card = ({str , amount , icon}) => {
  const navigate = useNavigate();
  return (
    <div className="border border-gray-700  text-center font-semibold text-gray-800 text-xl shadow-lg p-4 rounded-lg bg-white  w-48 h-48 flex flex-col justify-center items-center gap-1 cursor-pointer" onClick={()=>{

        navigate('/doctors')
    }}>
        <div className='flex flex-col justify-center items-center'>
            <div>{icon}</div>
            <h2>{str}</h2>
        </div>
        <h2>{amount}</h2>
    </div>
  )
}

export default Card