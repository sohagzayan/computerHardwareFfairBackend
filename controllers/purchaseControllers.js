const Purchase = require("../models/purchaseSchema");
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

/* Purses add */
exports.addPurchase = async (req, res) => {
  try {
    const newPurchase = await Purchase(req.body);
    await newPurchase.save();
    res.send(newPurchase);
  } catch (error) {
    res.send(error.message);
  }
};

/* get all Parses post */

exports.getAllPurchase = async (req, res) => {
  const email = req.query.email;
  const decodedEmail = req.decoded.email

  if (email) {
    if(decodedEmail === email){
        try {
            const newPurchase = await Purchase.find({ email: email });
            (newPurchase);
            res.send(newPurchase);
          } catch (error) {
            res.send(error.message);
          }
    }else{
        return res.status(403).send({message : "Forbidden access"})
    }
  } else {
    try {
      const newPurchase = await Purchase.find();
      res.send(newPurchase);
    } catch (error) {
      res.send(error.message);
    }
  }
};



exports.getSingleParson = async (req, res) => {
  const id = req.params.id
  try {
    const newPurchase = await Purchase.findById(id)
    res.send(newPurchase);
  } catch (error) {
    res.send(error.message);
  }
};



exports.paymentIntent = ('/',  async (req , res)=>{
  const service = req.body;
    const price = service.price;
    const amount = price * 100;
    const paymentIntent = await stripe.paymentIntents.create({
      amount : amount,
      currency: 'usd',
      payment_method_types:['card']
    });
    res.send({clientSecret: paymentIntent.client_secret})
})

