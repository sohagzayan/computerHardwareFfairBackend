const express = require('express') 
const {unShiptUser , getAllUser , deleteUser} = require('../controllers/userController')
const userRoute = express.Router()
const authToken = require('../middlWare/authToken')
userRoute.put('/:email' , unShiptUser)
userRoute.delete('/:id' , deleteUser)
userRoute.get('/' ,authToken, getAllUser)

module.exports = userRoute