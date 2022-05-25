const express = require('express')
const {AddTools , getAllTools , getSingleProducts , deleteSingleProducts} = require('../controllers/toolsControllers')
const toolsRoute = express.Router()

toolsRoute.post('/', AddTools)
toolsRoute.get('/', getAllTools)
toolsRoute.delete('/:id', deleteSingleProducts)
toolsRoute.get('/:id', getSingleProducts)



module.exports = toolsRoute