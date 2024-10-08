import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-white shadow">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
     
        <div className="flex space-x-0 float-left gap-3">
          <a href="#" className="text-gray-700 hover:text-blue-600 text-lg no-underline">Movies</a>
          <a href="#" className="text-gray-700 hover:text-blue-600 text-lg no-underline">Stream Events</a>
          <a href="#" className="text-gray-700 hover:text-blue-600 text-lg no-underline">Plays</a>
          <a href="#" className="text-gray-700 hover:text-blue-600 text-lg no-underline">Sports Activities</a>
        </div>
        
        {/* Right Section */}
        <div className="flex space-x-4">
          <a href="#" className="text-gray-700 hover:text-blue-600 text-lg no-underline">List Your Show</a>
          <a href="#" className="text-gray-700 hover:text-blue-600 text-lg no-underline">Corporates</a>
          <a href="#" className="text-gray-700 hover:text-blue-600 text-lg no-underline">Offers</a>
          <a href="#" className="text-gray-700 hover:text-blue-600 text-lg no-underline">Gift Cards</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
