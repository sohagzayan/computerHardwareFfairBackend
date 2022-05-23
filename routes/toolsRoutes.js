const express = require('express')
const {AddTools} = require('../controllers/toolsControllers')
const toolsRoute = express.Router()

toolsRoute.get('/', AddTools)
module.exports = toolsRoute