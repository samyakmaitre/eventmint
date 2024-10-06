import React from 'react';
import Event from './Event';


const EventList=({header, data}) => {
  

  return (
    <>
    <div className='event-wrapper'>
    <div className='event-header'>{header}</div>
    <div className="movie-list">
      
      {data.length > 0 && data.map((movie, index) => (
        <Event
          key={index}
          poster={movie.poster}
          title={movie.title}
          rating={movie.rating}
          votes={movie.votes}
          genre={movie.genre}
        />
      ))}
    </div>
    </div>
    
    </>
  );
}

export default EventList;
