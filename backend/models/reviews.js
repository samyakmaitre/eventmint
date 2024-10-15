const mongoose = require('mongoose');

// MongoDB Schema
const reviewSchema = new mongoose.Schema({
  rating: { type: Number, required: true },
  reviewText: { type: String, required: true },
});

// Model
const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;
