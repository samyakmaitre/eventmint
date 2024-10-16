import React from "react";
import NavBar from "./NavBar"; 

const Plays = () => {
  const plays = [
    {
      id: 1,
      title: "Hamlet",
      date: "2024-10-15",
      time: "8:00 PM",
      description: "Shakespeare’s classic tragedy.",
    },
    {
      id: 2,
      title: "The Phantom of the Opera",
      date: "2024-10-17",
      time: "7:30 PM",
      description: "A tale of love and obsession in a haunted opera house.",
    },
    {
      id: 3,
      title: "The Lion King",
      date: "2024-10-20",
      time: "6:00 PM",
      description: "Experience the circle of life in this stunning musical!",
    },
    {
      id: 4,
      title: "Wicked",
      date: "2024-10-22",
      time: "7:00 PM",
      description: "The untold story of the witches of Oz.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <NavBar /> 
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-red-600 mb-6 text-center">
          Upcoming Plays
        </h1>
        <p className="text-lg text-gray-700 mb-12 text-center">
          Discover our upcoming plays and reserve your tickets today!
        </p>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {plays.map((play) => (
            <div
              key={play.id}
              className="bg-white shadow-lg rounded-lg p-6 border border-red-200 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:border-red-400 hover:bg-red-50"
            >
              <h2 className="text-2xl font-semibold text-red-500 mb-2">
                {play.title}
              </h2>
              <p className="text-gray-600 mb-4">{play.description}</p>
              <p className="text-sm font-medium text-gray-500 mb-2">
                Date: {play.date}
              </p>
              <p className="text-sm font-medium text-gray-500 mb-2">
                Time: {play.time}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Plays;
