const Review = require('../models/reviewSchema')


exports.postReview = async(req , res)=>{
    try {
        const newPurchase = await Review(req.body)
        await newPurchase.save()
        res.send(newPurchase)
    } catch (error) {
        res.send(error.message)
    }
}


exports.getReview = async(req , res)=>{
    try {
        const newPurchase = await Review.find()
        res.send(newPurchase)
    } catch (error) {
        res.send(error.message)
    }
}