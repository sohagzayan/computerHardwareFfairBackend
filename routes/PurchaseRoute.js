const express = require('express')
const purchaseRoute = express.Router()
const {addPurchase , getAllPurchase , getSingleParson , paymentIntent} = require('../controllers/purchaseControllers')
const authToken = require('../middlWare/authToken')

purchaseRoute.post('/', addPurchase)
purchaseRoute.get('/',authToken,getAllPurchase)
purchaseRoute.get('/:id',authToken,getSingleParson)
purchaseRoute.post('/payment',paymentIntent)


module.exports = purchaseRoute