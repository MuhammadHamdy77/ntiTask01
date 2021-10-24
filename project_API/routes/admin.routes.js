const router = require('express').Router()
const AdminController = require("../controller/admin.controlller")
const auth = require("../middleware/auth.middleware")

router.patch("/setadmin/:id" , AdminController.setAdmin)




module.exports = router