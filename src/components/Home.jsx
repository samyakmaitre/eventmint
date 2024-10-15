import React, { useState, useEffect } from "react";
import axios from "axios";
import ImageSlider from "./ImageSlider";
import MovieList from "./MovieList";
import ReviewForm from "./ReviewForm";  // Keep this line
import ReviewList from "./ReviewList"; 
import Footer from "./Footer";
import Header from "./Header";
import "../App.css";
import Heading from "./heading";
import Chatbot from "../chatbot";

const Home = () => {
    const [searchTerm, setSearchTerm] = useState(""); 
    const [reviews, setReviews] = useState([]);

    const addReview = (review) => {
        setReviews([...reviews, review]);
    };

    // Fetch reviews when the component mounts
    useEffect(() => {
        const fetchReviews = async () => {
            try {
                const response = await axios.get('http://localhost:4000/api/v1/review/reviews');
                setReviews(response.data);
            } catch (error) {
                console.error('Error fetching reviews:', error);
            }
        };

        fetchReviews();
    }, []); // Only run once when the component mounts

    return (
        <div>
            <div className="App">
                <Header onSearch={setSearchTerm} /> 
                <Chatbot />
                <Heading />
                <ImageSlider />
                <MovieList searchTerm={searchTerm} /> 
                <ReviewForm addReview={addReview} />  {/* Keep this line */}
                <ReviewList reviews={reviews} /> 
                <Footer />
            </div>
        </div>
    );
};

export default Home;
