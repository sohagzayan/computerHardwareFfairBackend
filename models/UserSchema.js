const mongoose = require('mongoose')
const userSchema = mongoose.Schema({
    email : {
        type : String,
    },
    role : {
        type : String,
        default : 'user'
    },

    education : {
        type : String,
        default : 'Your Education'

    },
    location : {
        type : String,
        default : 'Your location'
    },
    linkDin : {
        type : String,
        default : 'your link din url'
    },
    image : {
        type : String,
        default : ''
    },
    date : {
        type : Date,
        default : Date.now
    }
})

module.exports = mongoose.model("User", userSchema)