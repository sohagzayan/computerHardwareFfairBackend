const mongoose = require('mongoose')

const paymentSchema = mongoose.Schema({
    transactionId : {
        type : String,
    },
    productId : {
        type : String,
    },
    date : {
        type : Date ,
        default : Date.now
    }
   
})

module.exports = mongoose.model("Payment" , paymentSchema)