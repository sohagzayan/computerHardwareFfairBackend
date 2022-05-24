const express = require('express')
const reviewRoute = express.Router()
const {postReview} = require('../controllers/reviewController')


reviewRoute.post('/', postReview)


module.exports = reviewRoute