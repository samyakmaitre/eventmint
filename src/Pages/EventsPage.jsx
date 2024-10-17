// StreamEventsPage.jsx
import React, { useState, useEffect } from 'react';
import StreamNavBar from '../components/StreamNavBar';
import '../assets/styles/StreamEventsPage.css';
import StreamEvent from '../components/StreamEvent';

const API_URL = `https://app.ticketmaster.com/discovery/v2/events.json?classificationName=music&apikey=${process.env.REACT_APP_TICKETMASTER_API_KEY}`;

const StreamEventsPage = () => {
    const [events, setEvents] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      const fetchEvents = async () => {
        try {
          const response = await fetch(API_URL);
          if (!response.ok) throw new Error('Failed to fetch events');
  
          const data = await response.json();
          if (data._embedded) {
            const fetchedEvents = data._embedded.events.map((event) => ({
              id: event.id,
              name: event.name,
              image: event.images[0]?.url,
              date: event.dates.start.dateTime,
              venue: event._embedded.venues[0]?.name,
              genre: event.classifications[0]?.genre?.name || 'Music',
            }));
            setEvents(fetchedEvents);
          } else {
            setEvents([]);
          }
        } catch (error) {
          console.error('Error fetching events:', error);
        } finally {
          setLoading(false);
        }
      };
  
      fetchEvents();
    }, []);
  
    const filteredEvents = events.filter((event) =>
      event.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  
    return (
      <div className="stream-events-page">
        <StreamNavBar />
        <h1 className="page-title">Live Music Events</h1>
  
        <input
          type="text"
          placeholder="Search Events..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-bar"
        />
  
        <div className="events-list">
          {loading ? (
            <p>Loading events...</p>
          ) : filteredEvents.length > 0 ? (
            filteredEvents.map((event) => <StreamEvent key={event.id} {...event} />)
          ) : (
            <p className="no-results">No events found</p>
          )}
        </div>
      </div>
    );
  };
  
  export default StreamEventsPage;