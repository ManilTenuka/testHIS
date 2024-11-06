import React from 'react';
import { useNavigate } from 'react-router-dom';
const Login = () => {
  const navigate = useNavigate();
  function dashboard(){
    navigate('/dashboard');
  }
  return (
    <div className="flex flex-col justify-center items-center gap-5 shadow-lg p-8 rounded-lg bg-white w-1/4 min-w-[300px] mt-40">
      {/* Header */}
      <div className="border-b border-gray-700 p-3 w-full text-center font-semibold text-gray-800 text-xl">
        Login
      </div>

      {/* Form */}
      <form className="w-full">
        <div className="flex flex-col gap-5 mt-4">
          {/* Username Field */}
          <div className="flex flex-col gap-1">
            <label htmlFor="userName" className="text-gray-700 font-medium">
              Enter Your Name
            </label>
            <input
              id="userName"
              type="text"
              placeholder="Enter your name"
              className="border border-gray-400 rounded px-3 py-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
            />
          </div>

          {/* Password Field */}
          <div className="flex flex-col gap-1">
            <label htmlFor="password" className="text-gray-700 font-medium">
              Enter Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="Enter your password"
              className="border border-gray-400 rounded px-3 py-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded py-2 mt-4 transition duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            onClick={dashboard}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
