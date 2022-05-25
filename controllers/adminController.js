const User = require('../models/UserSchema')
const jwt = require('jsonwebtoken')


exports.makeAdmin = async(req , res)=>{
    try {
       const email = req.params.email
       const user = req.body
       const filter = {email : email}
       const options = {upsert : true}  
       const updateDoc = {
           $set : user
       }
       const result = await User.updateOne(filter , updateDoc , options)
       const token = await jwt.sign({email : email} , process.env.ACCESS_TOKEN ,{expiresIn : '1h'})
       res.status(200).json({result , token})
    } catch (error) {
        res.send(error)
    }
}

exports.getAdmin = async(req , res)=>{
    try {
        const email = req.params.email
        const user = await User.find({email : email})
        const isAdmin = user[0].role === 'admin'
        res.send({admin : isAdmin})
    } catch (error) {
        res.send(error)
    }
}
