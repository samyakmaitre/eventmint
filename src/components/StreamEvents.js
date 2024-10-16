import React from 'react';
import NavBar from './NavBar'; 

const StreamEvents = () => {
  const events = [
    { id: 1, title: 'Live Concert', date: '2024-10-20', time: '7:00 PM', description: 'Join us for an unforgettable live concert!' },
    { id: 2, title: 'Cooking Show', date: '2024-10-22', time: '5:00 PM', description: 'Learn new recipes from top chefs!' },
    { id: 3, title: 'Tech Webinar', date: '2024-10-25', time: '3:00 PM', description: 'Discover the latest trends in technology.' },
    { id: 4, title: 'Fitness Bootcamp', date: '2024-10-28', time: '8:00 AM', description: 'Get fit with our live bootcamp sessions!' },
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <NavBar />
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-red-600 mb-6 text-center">Upcoming Stream Events</h1>
        <p className="text-lg text-gray-700 mb-12 text-center">
          Explore our upcoming live events and mark your calendars!
        </p>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {events.map((event) => (
            <div key={event.id} className="bg-white shadow-lg rounded-lg p-6 border border-red-200 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:border-red-400 hover:bg-red-50">
              <h2 className="text-2xl font-semibold text-red-500 mb-2">{event.title}</h2>
              <p className="text-gray-600 mb-4">{event.description}</p>
              <p className="text-sm font-medium text-gray-500 mb-2">Date: {event.date}</p>
              <p className="text-sm font-medium text-gray-500 mb-2">Time: {event.time}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StreamEvents;
