const express = require('express')
const adminRoute = express.Router()
const authToken = require('../middlWare/authToken')
const {makeAdmin , getAdmin} = require('../controllers/adminController')


adminRoute.put('/:email', authToken, makeAdmin)

adminRoute.get('/:email',  getAdmin)


module.exports = adminRoute