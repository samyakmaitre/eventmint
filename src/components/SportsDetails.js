import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import Header from "./Header.js";
import Navbar from './NavBar.js';
import Footer from './Footer.js';
import "../assets/styles/SportsDetails.css";


// Import sport images
import sports1 from "../assets/images/sports/sports1.jpg"
import sports2 from "../assets/images/sports/sports2.jpg"
import sports3 from "../assets/images/sports/sports3.jpg"
import sports4 from "../assets/images/sports/sports4.jpg"
import sports5 from "../assets/images/sports/sports5.jpg"

const SportDetails = () => {
  const [sport, setSport] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const { id } = useParams();

  // Updated sports array
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

  const fetchSportDetails = async (id) => {
    try {
      const sportData = sports.find((sport) => sport.id === parseInt(id, 10)); // Match by ID
      return sportData || {}; // Return empty object if no match found
    } catch (error) {
      throw new Error(`Error fetching sport details for ID ${id}: ${error.message}`);
    }
  };

  useEffect(() => {
    const fetchSport = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const sportData = await fetchSportDetails(id);
        setSport(sportData);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchSport();
  }, [id]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading sport details: {error.message}</div>;
  }

  return (
    <>
      <Header />
      <Navbar />
      <div className="sport-details-container">
        <div className="left-section">
          <div className="sport-image">
            <img src={sport.image} alt={`${sport.name}`} />
          </div>
        </div>
        <div className="right-section">
          <div className="name-ranking">
            <div className="sport-name">{sport.name}</div>
            <div className="ranking">
              Ranking: {sport.ranking}
            </div>
          </div>
          <div className="participants">
            Participants: {sport.participants}
          </div>
          <div className="category">
            Category: {sport.category}
          </div>
        </div>

        
        <div className='buttons-sec'>
            <Link to="/book-tickets">
              <button className='book-tickets-button'>Book Tickets</button>
            </Link>
            <Link to="/sports-activities">
              <button className='back-button'>Back</button>
            </Link>
          </div>
      </div>
      <Footer />
    </>
  );
};

export default SportDetails;
