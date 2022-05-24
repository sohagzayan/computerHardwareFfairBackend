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
       const token = await jwt.sign({email : email} , process.env.ACCESS_TOKEN ,{expiresIn : '1h'})
       res.status(200).json({result , token})
    } catch (error) {
        res.send(error)
    }
}