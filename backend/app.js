const express = require('express')
const cors = require('cors')
require('dotenv').config()

const dbConnection = require('./src/config/DBConnection')
dbConnection()

const app = express();
app.use(express.json());
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}));

const UserRoute = require('./src/router/UserRoute')
app.use('/user',UserRoute)

const PORT = process.env.PORT
app.listen(PORT,()=>{
    console.log(`server start Successfully at port ${PORT} ` )
})
