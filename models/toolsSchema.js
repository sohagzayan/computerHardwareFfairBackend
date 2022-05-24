const mongoose = require('mongoose')

const toolsSchema = mongoose.Schema({
    name : {
        type : String,
    },
    details : {
        type : String,
    },
    quantity : {
        type : String,
    },
    price : {
        type : String,
    },
    minimumOrder : {
        type : String,
    },
    date : {
        type : Date,
        default : Date.now
    },
    image : {
        type : String,
    }
})

module.exports = mongoose.model("Tools", toolsSchema)