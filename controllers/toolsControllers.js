const Tools = require('../models/toolsSchema')



/* add tools */

exports.AddTools = async (req , res)=>{
   
    try {
        const newTools = await Tools(req.body)
        await newTools.save()
        res.send(newTools)
    } catch (error) {
        res.send(error.message)
    }
}

/* get all tools */


exports.getAllTools = async (req , res)=>{
   
    try {
        const allTools = await Tools.find()
        res.send(allTools)
    } catch (error) {
        res.send(error.message)
    }
}


/* get single products use id */


exports.getSingleProducts = async (req , res)=>{
   
    try {
        const getSingleProducts = await Tools.findById(req.params.id)
        res.send(getSingleProducts)
    } catch (error) {
        res.send(error.message)
    }
}
exports.deleteSingleProducts = async (req , res)=>{
   
    try {
        const getSingleProducts = await Tools.findByIdAndDelete(req.params.id)
        res.send(getSingleProducts)
    } catch (error) {
        res.send(error.message)
    }
}