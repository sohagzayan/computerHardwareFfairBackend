const mongoose = require('mongoose')
const userSchema = mongoose.Schema({
    email : {
        type : String,
    },
    role : {
        type : String,
        default : 'user'
    },
    date : {
        type : Date,
        default : Date.now
    }
})

module.exports = mongoose.model("User", userSchema)