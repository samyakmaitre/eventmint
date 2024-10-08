import React from 'react';

function Forget() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <form className="bg-white p-6 rounded-lg shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-semibold mb-4 text-center">Forgot Password</h2>
        
        <label className="block mb-2 text-sm font-medium text-gray-700">
          Email Address
        </label>
        <input
          type="email"
          placeholder="abc@gmail.com"
          className="w-full p-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        
        <button
          type="submit"
          className="w-full bg-blue-600 text-white font-semibold py-2 rounded-md hover:bg-blue-700 transition-all"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Forget;
