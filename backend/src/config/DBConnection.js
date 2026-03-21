const mongoose = require('mongoose')
require('dotenv').config()

const dbConnection = () => {

    mongoose.connect(process.env.Mongo_Url).then(()=>{
        console.log('db connection')
    }).catch((err)=>{
        console.log("database connected ...", err)
    })
}

module.exports = dbConnection