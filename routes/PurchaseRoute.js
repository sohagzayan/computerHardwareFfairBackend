const express = require('express')
const purchaseRoute = express.Router()
const {addPurchase , getAllPurchase} = require('../controllers/purchaseControllers')
const authToken = require('../middlWare/authToken')

purchaseRoute.post('/', addPurchase)
purchaseRoute.get('/',authToken,getAllPurchase)


module.exports = purchaseRoute