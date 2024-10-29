import React from 'react';
import Play from './Play'; 
import '../assets/styles/PlaysList.css';

import play1 from '../assets/images/plays/playposter1.jpg';
import play2 from '../assets/images/plays/playposter2.jpg';
import play3 from '../assets/images/plays/playposter3.jpg';
import play4 from '../assets/images/plays/playposter4.jpg';
import play5 from '../assets/images/plays/playposter5.jpg';

function PlaysList({ searchTerm }) { 
  const plays = [
    {
      id: 1,
      image: play1,
      name: 'Hamlet',
      ranking: 1,
      participants: '1.2K',
      category: 'Tragedy'
    },
    {
      id: 2,
      image: play2,
      name: 'Macbeth',
      ranking: 2,
      participants: '960.2K',
      category: 'Tragedy'
    },
    {
      id: 3,
      image: play3,
      name: 'A Midsummer Night\'s Dream',
      ranking: 3,
      participants: '43.9K',
      category: 'Comedy'
    },
    {
      id: 4,
      image: play4,
      name: 'Othello',
      ranking: 4,
      participants: '7.5K',
      category: 'Tragedy'
    },
    {
      id: 5,
      image: play5,
      name: 'The Tempest',
      ranking: 5,
      participants: '44.2K',
      category: 'Romantic'
    },
  ];

  const filteredPlays = plays.filter(play => 
    play.name.toLowerCase().includes(searchTerm.toLowerCase())
  ); 

  return (
    <div className="play-list mt-20">
      {filteredPlays.map((play, index) => (
        <Play
          key={index}
          id={play.id}
          image={play.image}
          name={play.name}
          ranking={play.ranking}
          participants={play.participants}
          category={play.category}
        />
      ))}
    </div>
  );
}

export default PlaysList;
