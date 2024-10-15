const express = require('express');
const { createReview, getAllReviews } = require('../controllers/reviewController');
const router = express.Router();

// Routes
router.post('/reviews', createReview);
router.get('/reviews', getAllReviews);

module.exports = router;
