const User = require('../models/UserSchema')
const jwt = require('jsonwebtoken')

exports.unShiptUser = async(req , res)=>{
    try {
       const email = req.params.email
       const user = req.body
       const filter = {email : email}
       const options = {upsert : true}  
       const updateDoc = {
           $set : user
       }
       const result = await User.updateOne(filter , updateDoc , options)
       const token = await jwt.sign({email : email} , process.env.ACCESS_TOKEN ,{expiresIn : '7d'})
       res.status(200).json({result , token})
    } catch (error) {
        res.send(error)
    }
}


exports.getAllUser = async(req , res)=>{
    try {
        const allUser = await User.find()
        res.send(allUser)
    } catch (error) {
        res.send(error)
    }
}




exports.deleteUser = async(req , res)=>{
    const id = req.params.id
    try {
        const allUser = await User.findByIdAndDelete(id)
        res.send(allUser)
    } catch (error) {
        res.send(error)
    }
}


exports.getSingleUser = async(req , res)=>{
    const email = req.params.email
    try {
        const allUser = await User.find({email : email})
        res.send(allUser)
    } catch (error) {
        res.send(error)
    }
}




