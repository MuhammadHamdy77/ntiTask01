const router = require('express').Router()
const UserController = require("../controller/user.controlller")
const auth = require("../middleware/auth.middleware")

const User = require('../db/model/user.model')

router.get('/all' , UserController.allUser)

router.post('/register' ,UserController.register)

router.patch("/activate/:id" , UserController.activate)

router.post('/login' , UserController.login)

router.post("/profile" , auth, UserController.profile)

router.post("/logoutAll", auth, UserController.logoutAll)

router.post("/logout", auth, UserController.logout)



module.exports = router