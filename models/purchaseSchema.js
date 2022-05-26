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
    price : {
        type : String,
    },
    orderAmount : {
        type : String,
    },
    
    payed : {
        type : String,
        default : ''
    },
    transactionId : {
        type : String,
        default : ''

    },
    status : {
        type : String,
        default : 'pending'
    },
    date : {
        type : String
        
    }
})

module.exports = mongoose.model("Purchase" , purchaseSchema)