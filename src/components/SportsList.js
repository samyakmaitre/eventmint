import React from 'react';
import Sport from './Sport'; // Updated import for Sport component
import '../assets/styles/SportsList.css';

import sports1 from '../assets/images/sports/sports1.jpg';
import sports2 from '../assets/images/sports/sports2.jpg';
import sports3 from '../assets/images/sports/sports3.jpg';
import sports4 from '../assets/images/sports/sports4.jpg';
import sports5 from '../assets/images/sports/sports5.jpg';

function SportsList({ searchTerm }) { 
  const sports = [
    {
      id: 1,
      image: sports1,
      name: 'Swimming',
      ranking: 1,
      participants: '1.2K',
      category: 'Water Sport'
    },
    {
      id: 2,
      image: sports2,
      name: 'Weightlifting',
      ranking: 2,
      participants: '960.2K',
      category: 'Strength Sport'
    },
    {
      id: 3,
      image: sports3,
      name: 'Football',
      ranking: 3,
      participants: '43.9K',
      category: 'Team Sport'
    },
    {
      id: 4,
      image: sports4,
      name: 'Baseball',
      ranking: 4,
      participants: '7.5K',
      category: 'Team Sport'
    },
    {
      id: 5,
      image: sports5,
      name: 'Boxing',
      ranking: 5,
      participants: '44.2K',
      category: 'Combat Sport',
    },
  ];

  const filteredSports = sports.filter(sport => 
    sport.name.toLowerCase().includes(searchTerm.toLowerCase())
  ); 

  return (
    <div className="sport-list mt-20">
      {filteredSports.map((sport, index) => (
        <Sport
          key={index}
          id={sport.id}
          image={sport.image}
          name={sport.name}
          ranking={sport.ranking}
          participants={sport.participants}
          category={sport.category}
        />
      ))}
    </div>
  );
}

export default SportsList