const mongoose = require('mongoose')
const connectionDb = async()=>{
   try {
       await mongoose.connect(process.env.MONGODB_URL)
        ("mongoDb connection Success");
   } catch (error) {
       ("mongodb Connection failed");
   }
}

module.exports= connectionDb