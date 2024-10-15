import React, { useState } from 'react';
import '../components/ReviewForm.css';
import axios from 'axios';

const ReviewForm = ({ addReview }) => {
  const [rating, setRating] = useState(0);
  const [reviewText, setReviewText] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (rating && reviewText) {
      try {
        const response = await axios.post('http://localhost:4000/api/v1/review/reviews', {
          rating,
          reviewText,
        });
        addReview(response.data);  // Add review to the state
        setRating(0);              // Reset rating
        setReviewText('');          // Clear review text
      } catch (error) {
        console.error('Error submitting review:', error);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="review-form">
      <h3 className="form-title">Rate and Review the Events</h3>
      <label className="form-label">  {/* Corrected the typo here */}
        Rating:
        <select value={rating} onChange={(e) => setRating(Number(e.target.value))}>
          <option value={0}>Select Rating</option>
          {[1, 2, 3, 4, 5].map((num) => (
            <option key={num} value={num}>{num}</option>
          ))}
        </select>
      </label>
      <br />
      <label className="form-label">
        Review:
        <textarea value={reviewText} onChange={(e) => setReviewText(e.target.value)} />
      </label>
      <br />
      <button type="submit" className="form-button">Submit Review</button>
    </form>
  );
};

export default ReviewForm;
