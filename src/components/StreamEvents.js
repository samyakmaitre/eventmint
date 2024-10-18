import React from "react";
import NavBar from "./NavBar";

const StreamEvents = () => {
  const events = [
    {
      id: 1,
      title: "Live Concert",
      date: "2024-10-20",
      time: "7:00 PM",
      description: "Join us for an unforgettable live concert!",
    },
    {
      id: 2,
      title: "Cooking Show",
      date: "2024-10-22",
      time: "5:00 PM",
      description: "Learn new recipes from top chefs!",
    },
    {
      id: 3,
      title: "Tech Webinar",
      date: "2024-10-25",
      time: "3:00 PM",
      description: "Discover the latest trends in technology.",
    },
    {
      id: 4,
      title: "Fitness Bootcamp",
      date: "2024-10-28",
      time: "8:00 AM",
      description: "Get fit with our live bootcamp sessions!",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-100 py-10">
      <NavBar />
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold text-blue-700 mb-12 text-center">
          Upcoming Stream Events
        </h1>
        <div className="grid gap-10">
          {events.map((event) => (
            <div
              key={event.id}
              className="flex flex-col md:flex-row bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200 hover:shadow-2xl transition-all duration-300"
            >
              {/* Left section - Event details */}
              <div className="flex-grow p-6">
                <h2 className="text-2xl font-bold text-blue-600 mb-2">
                  {event.title}
                </h2>
                <p className="text-gray-600 mb-4">{event.description}</p>
                <div className="text-sm text-gray-500">
                  <p>📅 Date: {event.date}</p>
                  <p>🕒 Time: {event.time}</p>
                </div>
              </div>

              {/* Right section - Join button */}
              <div className="flex items-center justify-center bg-blue-50 p-4 md:p-6 md:w-1/3">
                <button className="w-full px-6 py-3 text-lg font-medium bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                  Join Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StreamEvents;
