const mongoose = require('mongoose')
const connectionDb = async()=>{
   try {
       await mongoose.connect(process.env.MONGODB_URL)
        console.log("mongoDb connection Success")
   } catch (error) {
       console.log("mongodb Connection failed")
   }
}

module.exports= connectionDb