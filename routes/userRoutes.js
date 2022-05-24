const express = require('express') 
const {unShiptUser} = require('../controllers/userController')
const userRoute = express.Router()

userRoute.put('/:email' , unShiptUser)

module.exports = userRoute