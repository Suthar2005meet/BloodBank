const router = require("express").Router()

const UserController = require('../controller/UserController')
router.get('/all',UserController.getUserData)
router.post("/add",UserController.addUser)


module.exports = router