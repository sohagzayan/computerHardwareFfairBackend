const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

const authToken = (req, res, next) => {
  const { authorization } = req.headers;
  try {
    const token = authorization.split(" ")[1];
    const decoded = jwt.verify(token, process.env.ACCESS_TOKEN);
    console.log(decoded);
    req.decoded = decoded
    next();
  } catch (err) {
    //   next("Forbidden access")
    return res.status(403).send({message : 'Forbidden access'})
  }
};

module.exports = authToken;