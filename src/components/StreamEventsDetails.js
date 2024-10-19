import React, { useState, useEffect } from 'react';
import YouTube from 'react-youtube';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Link, useParams } from 'react-router-dom';
import Header from "./Header.js";
// import "../assets/styles/StreamEvents.css";
import Navbar from './NavBar.js';
import Footer from './Footer.js';

// // Import event stills
import eventstill1 from "../assets/images/download1.png";
import eventstill2 from "../assets/images/cast2.jpg";
import eventstill3 from "../assets/images/cast2.jpg";
// // Import speaker photos
import speaker1 from "../assets/images/cast1.jpg";
import speaker2 from "../assets/images/cast1.jpg";
import speaker3 from "../assets/images/cast1.jpg";
import speaker4 from "../assets/images/cast1.jpg";

// // Import event posters
import eventPoster1 from "../assets/images/cast1.jpg";
import eventPoster2 from "../assets/images/cast1.jpg";
// import eventPoster3 from "../assets/images/eventPoster3.jpg";
// import eventPoster4 from "../assets/images/eventPoster4.jpg";
// import eventPoster5 from "../assets/images/eventPoster5.jpg";

const StreamEventsDetails = () => {
  const [event, setEvent] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [trailerUrl, setTrailerUrl] = useState('');
  const [speakerPhotos, setSpeakerPhotos] = useState([]);
  const [photos, setPhotos] = useState([]);
  const [showtimes, setShowtimes] = useState([]);
  const { id } = useParams();

  // Updated events array with the imported poster images
  const events = [
    {
      id: 1,
      poster: eventPoster1,
      title: 'Tech Conference 2024',
      description: 'A deep dive into AI and Machine Learning.',
      rating: 4.8,
      votes: '5.3K',
      genre: 'Technology/AI/Innovation',
      trailerUrl: 'https://www.youtube.com/watch?v=3JZ_D3ELwOQ',
      speakers: [
        { name: 'Speaker 1', photo: speaker1 },
        { name: 'Speaker 2', photo: speaker2 },
        { name: 'Speaker 3', photo: speaker3 },
        { name: 'Speaker 4', photo: speaker4 },
      ],
      photos: [
        { url: eventstill1, alt: 'Event Still 1' },
        { url: eventstill2, alt: 'Event Still 2' },
        { url: eventstill3, alt: 'Event Still 3' },
      ],
      showtimes: [
        { time: '10:00 AM', format: 'Live' },
        { time: '1:00 PM', format: 'Replay' },
      ],
    },
    {
      id: 2,
      poster: eventPoster2,
      title: 'Climate Action Summit',
      description: 'A global initiative to combat climate change.',
      rating: 4.9,
      votes: '4.2K',
      genre: 'Environment/Climate/Activism',
      trailerUrl: 'https://www.youtube.com/watch?v=8qyZxr6onrw',
      speakers: [
        { name: 'Speaker 1', photo: speaker1 },
        { name: 'Speaker 2', photo: speaker2 },
        { name: 'Speaker 3', photo: speaker3 },
        { name: 'Speaker 4', photo: speaker4 },
      ],
      photos: [
        { url: eventstill1, alt: 'Event Still 1' },
        { url: eventstill2, alt: 'Event Still 2' },
        { url: eventstill3, alt: 'Event Still 3' },
      ],
      showtimes: [
        { time: '10:00 AM', format: 'Live' },
        { time: '1:00 PM', format: 'Replay' },
      ],
    },
    // Add more events similarly...
  ];

  const fetchEventDetails = async (id) => {
    try {
      const eventData = events.find((event) => event.id === parseInt(id, 10)); // Match by ID
      return eventData || {}; // Return empty object if no match found
    } catch (error) {
      throw new Error(`Error fetching event details for ID ${id}: ${error.message}`);
    }
  };

  useEffect(() => {
    const fetchEvent = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const eventData = await fetchEventDetails(id);
        setEvent(eventData);
        setTrailerUrl(eventData?.trailerUrl || '');
        setSpeakerPhotos(eventData?.speakers || []);
        setPhotos(eventData?.photos || []);
        setShowtimes(eventData?.showtimes || []);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchEvent();
  }, [id]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading event details: {error.message}</div>;
  }

  return (
    <>
      <Header />
      <Navbar />
      <div className="event-details-container">
        <div className="left-section">
          <div className="event-poster">
            <img src={event.poster} alt={`${event.title} poster`} />
          </div>
        </div>
        <div className="right-section">
          <div className="title-rating">
            <div className="event-title">{event.title}</div>
            <div className="rating">
              Rating: {event.rating}/10 ({event.votes} votes)
            </div>
          </div>
          <div className="event-description">{event.description}</div>
          <div className="event-genre">{event.genre}</div>
          <div className="event-showtimes">
            <h3>Showtimes</h3>
            {showtimes.map((showtime, index) => (
              <div key={index}>
                {showtime.time} ({showtime.format})
              </div>
            ))}
          </div>
        </div>

        <div className="bottom-section">
          <div className="event-speakers">
            <h3>Speakers</h3>
            <Carousel
              additionalTransfrom={0}
              arrows
              autoPlaySpeed={3000}
              centerMode={false}
              containerClass="carousel-container"
              draggable
              infinite
              keyBoardControl
              responsive={{
                desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3, slidesToSlide: 3 },
                tablet: { breakpoint: { max: 1024, min: 464 }, items: 2, slidesToSlide: 2 },
                mobile: { breakpoint: { max: 464, min: 0 }, items: 1, slidesToSlide: 1 },
              }}
              swipeable
            >
              {speakerPhotos.map((speaker, index) => (
                <div className="speaker-member" key={index}>
                  <img src={speaker.photo} alt={`${speaker.name} photo`} />
                  <div>{speaker.name}</div>
                </div>
              ))}
            </Carousel>
          </div>
          <div className="event-photos">
            <h3>Photos</h3>
            <Carousel
              additionalTransfrom={0}
              arrows
              autoPlaySpeed={3000}
              containerClass="carousel-container"
              draggable
              infinite
              keyBoardControl
              responsive={{
                desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3, slidesToSlide: 3 },
                tablet: { breakpoint: { max: 1024, min: 464 }, items: 2, slidesToSlide: 2 },
                mobile: { breakpoint: { max: 464, min: 0 }, items: 1, slidesToSlide: 1 },
              }}
              swipeable
            >
              {photos.map((photo, index) => (
                <div className="photo" key={index}>
                  <img src={photo.url} alt={photo.alt} />
                </div>
              ))}
            </Carousel>
          </div>
          <div className="event-trailer">
            <h3>Watch Trailer</h3>
            {trailerUrl && (
              <YouTube
                videoId={trailerUrl.split("v=")[1]}
                opts={{ height: '390', width: '100%', playerVars: { autoplay: 0 } }}
              />
            )}
          </div>
          <div className='buttons-sec'>
            <Link to="/book-tickets">
              <button className='book-tickets-button'>Book Tickets</button>
            </Link>
            <Link to="/">
              <button className='book-tickets-button'>Back</button>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default StreamEventsDetails
