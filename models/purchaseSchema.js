const mongoose = require('mongoose')

const purchaseSchema = mongoose.Schema({
    name : {
        type : String,
    },
    email : {
        type : String,
    },
    address : {
        type : String,
    },
    Number : {
        type : String,
    },
    date : {
        type : Date,
        default : Date.now
    }
})

module.exports = mongoose.model("Purchase" , purchaseSchema)