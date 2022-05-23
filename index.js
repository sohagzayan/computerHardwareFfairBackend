const express = require('express')
const app = express()
const port = process.env.PORT || 5000
const cors =require('cors')
const dotenv =require('dotenv')
dotenv.config()
const toolsRoute = require('./routes/toolsRoutes')
const connectionDb = require('./connection/connectionDB')
/* meddleWere */

app.use(cors())
connectionDb()
app.use(express.json())


/* Routes */
app.use("/api/tools" , toolsRoute)


app.listen(port , ()=>{
    console.log(`server is running on ${port}`);
} )