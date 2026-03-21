const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    user : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    password : {
        type : String,
        required : true
    },
    role : {
        type : String,
        enum : ["admin","donor","hospital","staff"]
    },
    phone : {
        type : Number,
        required : true
    },
    address : {
        type : String,
        required : true
    }
})

module.exports = mongoose.model('users', UserSchema)