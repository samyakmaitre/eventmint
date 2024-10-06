import React from 'react'
import '../assets/styles/EventList.css';
import EventList from './EventList';
import { assets } from '../assets/assets';

const EventRenderer = () => {
    const movies = [
        {
          poster: `${assets.poster1}`,
          title: 'Hindustani 2',
          rating: 5.7,
          votes: '3.9K',
          genre: 'Action/Drama/Thriller'
        },
        {
          poster: `${assets.poster2}`,
          title: 'Kalki 2898 AD',
          rating: 8.7,
          votes: '630.2K',
          genre: 'Action/Sci-Fi/Thriller'
        },
        {
          poster: `${assets.poster3}`,
          title: 'Deadpool & Wolverine',
          rating: 8.9,
          votes: '268.9K',
          genre: 'Action/Adventure/Comedy'
        },
        {
          poster: `${assets.poster4}`,
          title: 'Sarfira',
          rating: 8.9,
          votes: '7.5K',
          genre: 'Biography/Drama'
        },
        {
          poster: `${assets.poster5}`,
          title: 'Kill',
          rating: 9.0,
          votes: '24.7K',
          genre: 'Action/Thriller'
        },
        {
          poster: `${assets.poster1}`,
          title: 'Hindustani 2',
          rating: 5.7,
          votes: '3.9K',
          genre: 'Action/Drama/Thriller'
        },
        {
          poster: `${assets.poster2}`,
          title: 'Kalki 2898 AD',
          rating: 8.7,
          votes: '630.2K',
          genre: 'Action/Sci-Fi/Thriller'
        },
        {
          poster: `${assets.poster3}`,
          title: 'Deadpool & Wolverine',
          rating: 8.9,
          votes: '268.9K',
          genre: 'Action/Adventure/Comedy'
        },
      ];

      const events = [
        {
          poster: `${assets.event1}`,
          title: 'Event 1',
          rating: 5.7,
          votes: '3.9K',
          genre: 'Education'
        },
        {
          poster: `${assets.event2}`,
          title: 'Business Talk',
          rating: 8.7,
          votes: '630.2K',
          genre: 'Conference'
        },
        {
          poster: `${assets.event3}`,
          title: 'Event 3',
          rating: 8.9,
          votes: '268.9K',
          genre: 'Meetings'
        },
        {
          poster: `${assets.event4}`,
          title: 'Notice Outlay',
          rating: 8.9,
          votes: '7.5K',
          genre: 'Bind your Time'
        },
        {
          poster: `${assets.event5}`,
          title: 'Event 5',
          rating: 9.0,
          votes: '24.7K',
          genre: 'Small Talk Attendee'
        },
        {
            poster: `${assets.event1}`,
            title: 'Event 1',
            rating: 5.7,
            votes: '3.9K',
            genre: 'Education'
          },
          {
            poster: `${assets.event2}`,
            title: 'Business Talk',
            rating: 8.7,
            votes: '630.2K',
            genre: 'Conference'
          },
      ];
  return (
    <>
    <div id='movies'>
    <EventList header={'Movies'} data={movies}  />
    </div>
    <div id='events'>
    <EventList header={'Events'} data={events} />
    </div>
    </>
  )
}

export default EventRenderer