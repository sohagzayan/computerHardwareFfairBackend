const mongoose = require('mongoose')

const reviewSchema = mongoose.Schema({
    name : {
        type : String,
    },
    email : {
        type : String,
    },
    rating : {
        type : String,
    },
    dese : {
        type : String,
    },
    image : {
        type : String,
    },
    username : {
        type : String,
    },
    date : {
        type : Date,
        default : Date.now
    }
})

module.exports = mongoose.model("Review" , reviewSchema)