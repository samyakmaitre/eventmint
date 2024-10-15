import React, { useState, useRef } from 'react';

const ReviewList = ({ reviews }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null); // Track which card is hovered
  const reviewWrapperRef = useRef(null); // Ref for the review wrapper

  // Calculate scroll amount based on review card width and gap
  const cardWidth = 200; // Width of each review card (you can adjust this)
  const cardGap = 10; // Gap between cards

  // Function to scroll left
  const scrollLeft = () => {
    reviewWrapperRef.current.scrollBy({ left: -(cardWidth + cardGap), behavior: 'smooth' });
  };

  // Function to scroll right
  const scrollRight = () => {
    reviewWrapperRef.current.scrollBy({ left: cardWidth + cardGap, behavior: 'smooth' });
  };

  return (
    <div style={styles.container}>
      <h3 style={styles.heading}>User Reviews</h3>
      {reviews.length > 0 ? (
        <div style={styles.scrollContainer}>
          <button
            style={styles.arrowButton}
            onClick={scrollLeft}
            onMouseEnter={(e) => (e.target.style.color = '#0056b3')}
            onMouseLeave={(e) => (e.target.style.color = '#007BFF')}
          >
            &#8249;
          </button>
          <div style={styles.reviewsWrapper} ref={reviewWrapperRef}>
            {reviews.map((review, index) => (
              <div
                key={index}
                style={hoveredIndex === index ? { ...styles.reviewCard, ...styles.reviewCardHover } : styles.reviewCard}
                onMouseEnter={() => setHoveredIndex(index)} // Set hover state
                onMouseLeave={() => setHoveredIndex(null)}  // Remove hover state
              >
                <p style={styles.rating}>Rating: {review.rating}/5</p>
                <p style={styles.reviewText}>{review.reviewText}</p>
              </div>
            ))}
          </div>
          <button
            style={styles.arrowButton}
            onClick={scrollRight}
            onMouseEnter={(e) => (e.target.style.color = '#0056b3')}
            onMouseLeave={(e) => (e.target.style.color = '#007BFF')}
          >
            &#8250;
          </button>
        </div>
      ) : (
        <p style={styles.noReviews}>No reviews yet.</p>
      )}
    </div>
  );
};

const styles = {
  container: {
    width: '100%',
    maxWidth: '1000px',
    margin: '0 auto',
    padding: '20px',
    backgroundColor: '#f9f9f9',
    borderRadius: '8px',
    overflow: 'hidden',
  },
  heading: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: '24px',
    marginBottom: '20px',
    color: '#333',
  },
  scrollContainer: {
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
  },
  reviewsWrapper: {
    display: 'flex',
    flexDirection: 'row',
    gap: '10px',
    overflow: 'hidden', // Hide the scroll bar
    scrollBehavior: 'smooth',
    paddingBottom: '10px',
    flexGrow: 1, // Take remaining space
  },
  reviewCard: {
    cursor: 'pointer',
    flex: '0 0 calc(20% - 10px)', // 5 cards max per row with gap of 10px
    backgroundColor: '#fff',
    padding: '15px',
    borderRadius: '6px',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
    minWidth: '200px', // Set this to match cardWidth
    transition: 'transform 0.3s ease, box-shadow 0.3s ease', // Smooth hover effect
  },
  reviewCardHover: {
    transform: 'scale(1.05)', // Slight zoom-in on hover
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)', // More prominent shadow on hover
  },
  rating: {
    fontWeight: 'bold',
    marginBottom: '5px',
    color: '#ff9900',
  },
  reviewText: {
    fontSize: '16px',
    color: '#555',
  },
  noReviews: {
    textAlign: 'center',
    color: '#888',
    fontStyle: 'italic',
  },
  arrowButton: {
    background: 'none',
    border: 'none',
    fontSize: '40px', // Make the arrows bigger
    cursor: 'pointer',
    color: '#007BFF',
    transition: 'color 0.3s ease',
    zIndex: 1,
    padding: '0 10px', // Add some padding for better click area
  },
};

export default ReviewList;
