const Review = require('../models/reviews');

// Create a new review
const createReview = async (req, res) => {
  try {
    const { rating, reviewText } = req.body;
    const newReview = new Review({ rating, reviewText });
    await newReview.save();
    res.status(201).json(newReview);
  } catch (err) {
    res.status(400).json({ error: 'Failed to submit review' });
  }
};

// Fetch all reviews
const getAllReviews = async (req, res) => {
  try {
    const reviews = await Review.find();
    res.json(reviews);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch reviews' });
  }
};

module.exports = { createReview, getAllReviews };
