const express = require('express')
const reviewRoute = express.Router()
const {postReview , getReview} = require('../controllers/reviewController')


reviewRoute.post('/', postReview)
reviewRoute.get('/', getReview)


module.exports = reviewRoute