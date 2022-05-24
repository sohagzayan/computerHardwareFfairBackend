const express = require('express')
const {AddTools , getAllTools , getSingleProducts} = require('../controllers/toolsControllers')
const toolsRoute = express.Router()

toolsRoute.post('/', AddTools)
toolsRoute.get('/', getAllTools)
toolsRoute.get('/:id', getSingleProducts)



module.exports = toolsRoute