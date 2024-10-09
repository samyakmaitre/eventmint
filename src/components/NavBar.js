import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-slate-800 shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        
        {/* Left Section */}
        <div className="flex space-x-6">
          {/* Movies Dropdown */}
          <div className="text-white text-lg flex items-center">
            <label htmlFor="moviesDropdown" className="mr-2">Movies:</label>
            <select
              id="moviesDropdown"
              name="movies"
              className="bg-slate-700 text-white border-none hover:bg-slate-600 px-2 py-1"
            >
              <option value="BBOTT">BBOTT</option>
              <option value="Hollywood">Hollywood</option>
              <option value="Bollywood">Bollywood</option>
              <option value="Tollywood">Tollywood</option>
            </select>
          </div>
          <a href="#" className="text-white hover:text-gray-300 text-lg border-2 border-transparent hover:border-white transition-all duration-300 ease-in-out px-2 py-1 no-underline">Stream Events</a>
          <a href="#" className="text-white hover:text-gray-300 text-lg border-2 border-transparent hover:border-white transition-all duration-300 ease-in-out px-2 py-1 no-underline">Plays</a>
          <a href="#" className="text-white hover:text-gray-300 text-lg border-2 border-transparent hover:border-white transition-all duration-300 ease-in-out px-2 py-1 no-underline">Sports Activities</a>
        </div>

        {/* Right Section */}
        <div className="flex space-x-6">
          <a href="#" className="text-white hover:text-gray-300 text-lg border-2 border-transparent hover:border-white transition-all duration-300 ease-in-out px-2 py-1 no-underline">List Your Show</a>
          <a href="#" className="text-white hover:text-gray-300 text-lg border-2 border-transparent hover:border-white transition-all duration-300 ease-in-out px-2 py-1 no-underline">Corporates</a>
          <a href="#" className="text-white hover:text-gray-300 text-lg border-2 border-transparent hover:border-white transition-all duration-300 ease-in-out px-2 py-1 no-underline">Offers</a>
          <a href="#" className="text-white hover:text-gray-300 text-lg border-2 border-transparent hover:border-white transition-all duration-300 ease-in-out px-2 py-1 no-underline">Gift Cards</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
