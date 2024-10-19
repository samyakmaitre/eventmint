import React from 'react'; // Updated component for stream events
// import '../assets/styles/StreamEventList.css'; // Updated the stylesheet

// import streamPoster1 from '../assets/images/streamPoster1.jpg';
// import streamPoster2 from '../assets/images/streamPoster2.jpg';
// import streamPoster3 from '../assets/images/streamPoster3.jpg';
// import streamPoster4 from '../assets/images/streamPoster4.jpg';
// import streamPoster5 from '../assets/images/streamPoster5.jpg';
import streamPoster1 from '../assets/images/cast2.jpg';
import streamPoster2 from '../assets/images/cast2.jpg';
import streamPoster3 from '../assets/images/cast2.jpg';
import streamPoster4 from '../assets/images/cast2.jpg';
import streamPoster5 from '../assets/images/cast2.jpg';
import StreamEvent from './StreamEvents';

function StreamEventsList({ searchTerm }) { 
  const streamEvents = [
    {
      id: 1,
      poster: streamPoster1,
      title: 'Tech Conference 2024',
      description: 'A global conference discussing future technologies.',
      rating: 4.5,
      participants: '15K',
      genre: 'Technology'
    },
    {
      id: 2,
      poster: streamPoster2,
      title: 'AI & Robotics Workshop',
      description: 'Hands-on workshop focusing on AI in robotics.',
      rating: 4.9,
      participants: '9.2K',
      genre: 'Education/Workshop'
    },
    {
      id: 3,
      poster: streamPoster3,
      title: 'Live Coding Competition',
      description: 'Real-time coding battle for developers.',
      rating: 4.8,
      participants: '18.5K',
      genre: 'Coding/Competition'
    },
    {
      id: 4,
      poster: streamPoster4,
      title: 'Digital Marketing Summit',
      description: 'Learn the latest trends in digital marketing.',
      rating: 4.7,
      participants: '12K',
      genre: 'Marketing/Summit'
    },
    {
      id: 5,
      poster: streamPoster5,
      title: 'Game Dev Expo',
      description: 'An expo showcasing the latest in game development.',
      rating: 4.6,
      participants: '25K',
      genre: 'Gaming/Expo'
    },
  ];

  // Filtering the stream events based on the search term
  const filteredEvents = streamEvents.filter(event => 
    event.title.includes(searchTerm)
  ); 

  return (
    <div className="stream-events-list mt-20">
      {filteredEvents.map((event, index) => (
        <StreamEvent
          key={index}
          id={event.id}
          poster={event.poster}
          title={event.title}
          rating={event.rating}
          participants={event.participants}
          genre={event.genre}
        />
      ))}
    </div>
  );
}

export default StreamEventsList;
