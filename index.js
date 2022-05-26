const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();
const toolsRoute = require("./routes/toolsRoutes");
const purchaseRoute = require("./routes/PurchaseRoute");
const connectionDb = require("./connection/connectionDB");
const multer = require("multer");
const path = require("path");
const userRoutes = require('./routes/userRoutes')
const reviewRoute = require('./routes/reviewRoute')
const adminRoute = require('./routes/adminRoute')
const UPLOAD_FOLDER = "./upload/";
app.use("/upload" , express.static(path.join(__dirname, "/upload")))
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, UPLOAD_FOLDER);
  },

  filename: (req, file, cb) => {

    cb(null, req.body.name);
  },
});

let upload = multer({
  storage: storage,
});










app.post("/upload", upload.single("file"), (req, res) => {
  res.status(200).json("file upload success");
});

/* meddleWere */

app.use(cors());
connectionDb();
app.use(express.json());

/* Routes */
app.use("/api/tools", toolsRoute);
app.use("/api/purchase", purchaseRoute);
app.use("/api/user" , userRoutes)
app.use("/api/review" , reviewRoute)
app.use("/api/admin" , adminRoute)


app.get('/',(req, res)=>{
  res.send('hello word')
})

app.listen(port,() => {
  console.log(`server is running on ${port}`);
});
