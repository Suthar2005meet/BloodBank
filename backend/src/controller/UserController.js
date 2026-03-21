const UserSchema = require('../models/UserModel')

const getUserData = async (req,resp) => {
    try{
        const res = await UserSchema.find()
        resp.json({
            message : "User Details Fetched Successfully",
            data : res
        })
    }catch(err){
        resp.status(500).json({
            message : "Error while fetching the details",
            err : err
        })
    }
}

const addUser = async (req,resp) =>{
    try{
        const res = await UserSchema.create(req.body)
        resp.status(201).json({
            message : "Data Added Successfully",
            data : res
        })
    }catch(err){
        resp.status(500).json({
            message : "Data Not Add Successfully",
            err : err
        })
    }
}


module.exports = {
    getUserData,
    addUser
}