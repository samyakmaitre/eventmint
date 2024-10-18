import React from 'react';
import NavBar from './NavBar';

const Plays = () => {
  const plays = [
    { id: 1, title: 'Hamlet', date: '2024-11-01', time: '6:00 PM', location: 'Royal Theatre', price: '50' },
    { id: 2, title: 'The Lion King', date: '2024-11-05', time: '4:00 PM', location: 'Broadway Hall', price: '70' },
    { id: 3, title: 'Phantom of the Opera', date: '2024-11-12', time: '8:00 PM', location: 'Grand Opera House', price: '80' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-tr from-purple-100 to-pink-50 py-10">
      <NavBar />
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold text-pink-600 text-center mb-10">
          Enchanting Plays Awaits You
        </h1>
        <div className="flex flex-wrap justify-center gap-10">
          {plays.map((play) => (
            <div
              key={play.id}
              className="w-64 h-64 rounded-full bg-white shadow-lg p-6 border-4 border-pink-300 transform transition-all duration-300 hover:rotate-6 hover:scale-110 hover:border-pink-500"
            >
              <div className="flex flex-col items-center justify-center h-full text-center">
                <h2 className="text-2xl font-semibold text-purple-700 mb-2">{play.title}</h2>
                <p className="text-sm text-gray-500">{play.location}</p>
                <p className="text-gray-600 my-2">📅 {play.date}</p>
                <p className="text-gray-600">🕒 {play.time}</p>
                <p className="text-sm font-bold text-pink-600 mt-2">${play.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Plays;
