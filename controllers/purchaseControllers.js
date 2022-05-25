const Purchase = require("../models/purchaseSchema");

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
